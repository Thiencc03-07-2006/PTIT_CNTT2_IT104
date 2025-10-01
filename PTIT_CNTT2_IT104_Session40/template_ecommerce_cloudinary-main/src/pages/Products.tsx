import { useEffect, useMemo, useState } from "react";
import {
  Button,
  Form,
  Image,
  Input,
  Modal,
  Pagination,
  Select,
  Table,
} from "antd";
import type { ColumnsType } from "antd/es/table";
import { v4 as uuidv4, validate } from "uuid";
import {
  addProducts,
  deleteProduct,
  fetchData,
  updateProduct,
} from "../features/productSlice";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import axios from "axios";
type ProductStatus = "active" | "inactive";

type ProductRow = {
  id: string;
  code: string;
  name: string;
  category: string;
  price: number;
  image: string;
  status: ProductStatus;
};

export default function Products() {
  const { rows, status } = useSelector((state: RootState) => state.product);
  const category = useSelector((state: RootState) => state.category.rows);
  const filterCategory = category.filter((t) => t.status === "active");
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  const [file, setFile] = useState<File | null>(null);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<ProductStatus | "">("");
  const [page, setPage] = useState(1);
  const pageSize = 5;

  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<ProductRow | null>(null);

  const filtered = useMemo(() => {
    return rows
      .filter((r) =>
        search
          ? (r.name + r.code).toLowerCase().includes(search.toLowerCase())
          : true
      )
      .filter((r) => (statusFilter ? r.status === statusFilter : true));
  }, [rows, search, statusFilter]);

  const paged = useMemo(() => {
    const start = (page - 1) * pageSize;
    return filtered.slice(start, start + pageSize);
  }, [filtered, page]);

  const columns: ColumnsType<ProductRow> = [
    { title: "Mã", dataIndex: "code", key: "code", width: 120 },
    { title: "Tên", dataIndex: "name", key: "name" },
    { title: "Danh mục", dataIndex: "category", key: "category", width: 160 },
    {
      title: "Giá",
      dataIndex: "price",
      key: "price",
      width: 140,
      render: (v: number) => v.toLocaleString() + " đ",
    },
    {
      title: "Ảnh",
      dataIndex: "image",
      key: "image",
      width: 120,
      render: (src: string) => (src ? <Image src={src} width={56} /> : "-"),
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      width: 120,
      render: (s: string) => (s === "active" ? "Hoạt động" : "Ngừng"),
    },
    {
      title: "Thao tác",
      key: "actions",
      width: 160,
      render: (_, record) => (
        <div className="flex gap-2">
          <Button size="small" type="primary" onClick={() => onEdit(record)}>
            Sửa
          </Button>
          <Button size="small" danger onClick={() => onDelete(record.id)}>
            Xóa
          </Button>
        </div>
      ),
    },
  ];

  function onAdd() {
    setEditing(null);
    setOpen(true);
  }

  function onEdit(row: ProductRow) {
    setEditing(row);
    setOpen(true);
  }

  function onDelete(id: string) {
    if (
      confirm(
        `Ban co chac muon xoa san pham <${rows.find((t) => t.id === id)?.code}>`
      )
    ) {
      dispatch(deleteProduct(id));
    }
  }

  interface ProductFormValues {
    code: string;
    name: string;
    category: string;
    price: number | string;
    image?: string;
    status: ProductStatus;
  }

  async function onSubmit(values: ProductFormValues) {
    if (!file && editing === null) {
      alert("Vui long chon file");
      return;
    }
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "re_upload");
    data.append("cloud_name", "dk4uhrl7t");
    if (editing) {
      if (file) {
        try {
          const res = await axios.post(
            "https://api.cloudinary.com/v1_1/dk4uhrl7t/image/upload",
            data
          );
          const next: ProductRow = {
            id: editing?.id ?? uuidv4(),
            code: values.code,
            name: values.name,
            category: values.category,
            price: Number(values.price) || 0,
            image: res.data.secure_url,
            status: values.status,
          };
          dispatch(updateProduct(next));
          setOpen(false);
        } catch (error) {
          console.log("Loi khi sua co anh moi", error);
        }
      } else {
        const next: Partial<ProductRow> = {
          id: editing?.id ?? uuidv4(),
          code: values.code,
          name: values.name,
          category: values.category,
          price: Number(values.price) || 0,
          status: values.status,
        };
        dispatch(updateProduct(next));
        setOpen(false);
      }
    } else {
      try {
        const res = await axios.post(
          "https://api.cloudinary.com/v1_1/dk4uhrl7t/image/upload",
          data
        );
        const next: ProductRow = {
          id: editing?.id ?? uuidv4(),
          code: values.code,
          name: values.name,
          category: values.category,
          price: Number(values.price) || 0,
          image: res.data.secure_url,
          status: values.status,
        };
        dispatch(addProducts(next));
        setOpen(false);
      } catch (error) {
        console.log("Loi khi them", error);
      }
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div className="text-lg font-semibold">Quản lý sản phẩm</div>
        <Button type="primary" onClick={onAdd}>
          Thêm mới
        </Button>
      </div>

      <div className="flex justify-end gap-3">
        <Select
          placeholder="Trạng thái"
          className="min-w-40"
          allowClear
          value={statusFilter || undefined}
          onChange={(v) => setStatusFilter((v as ProductStatus) || "")}
          options={[
            { value: "active", label: "Hoạt động" },
            { value: "inactive", label: "Ngừng hoạt động" },
          ]}
        />
        <Input
          style={{ width: "300px" }}
          placeholder="Tìm kiếm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <Table<ProductRow>
        columns={columns}
        dataSource={paged as ProductRow[]}
        pagination={false}
        rowKey={(record) => `prod-${record.id}`}
      />

      <div className="flex justify-end">
        <Pagination
          current={page}
          pageSize={pageSize}
          total={filtered.length}
          onChange={setPage}
        />
      </div>

      <Modal
        title={editing ? "Sửa sản phẩm" : "Thêm mới sản phẩm"}
        open={open}
        onCancel={() => setOpen(false)}
        footer={null}
        destroyOnClose
      >
        <Form
          layout="vertical"
          onFinish={onSubmit}
          initialValues={editing ?? { status: "active" }}
        >
          <Form.Item
            name="code"
            label="Mã"
            rules={[{ required: true, message: "Nhập mã" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="name"
            label="Tên"
            rules={[{ required: true, message: "Nhập tên" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="category"
            label="Danh mục"
            rules={[{ required: true, message: "Chọn danh mục" }]}
          >
            <Select
              options={filterCategory.map((t) => ({
                value: t.name,
                laber: t.name,
              }))}
              placeholder="Nhập tên danh mục"
            />
          </Form.Item>
          <Form.Item
            name="price"
            label="Giá"
            rules={[{ required: true, message: "Nhập giá" }]}
          >
            <Input type="number" min={0} />
          </Form.Item>
          <Form.Item label="Ảnh (URL)">
            <input
              type="file"
              placeholder="Dán URL ảnh"
              onChange={handleChange}
            />
          </Form.Item>
          <Form.Item
            name="status"
            label="Trạng thái"
            rules={[{ required: true }]}
          >
            <Select
              options={[
                { value: "active", label: "Hoạt động" },
                { value: "inactive", label: "Ngừng" },
              ]}
            />
          </Form.Item>
          <Form.Item noStyle>
            <div className="flex justify-end gap-2">
              <Button onClick={() => setOpen(false)}>Hủy</Button>
              <Button type="primary" htmlType="submit">
                Lưu
              </Button>
            </div>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
