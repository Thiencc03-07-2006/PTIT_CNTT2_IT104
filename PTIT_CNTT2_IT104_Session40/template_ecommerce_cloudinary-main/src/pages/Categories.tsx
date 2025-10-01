import { useEffect, useMemo, useState } from "react";
import {
  Button,
  Flex,
  Form,
  Input,
  Modal,
  Pagination,
  Select,
  Table,
} from "antd";
import type { ColumnsType } from "antd/es/table";
import { v4 as uuidv4 } from "uuid";
import type { RootState } from "../store/store";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../hooks/useAppDispatch";
import {
  addCategorys,
  deleteCategory,
  fetchDataCategory,
  updateCategory,
} from "../features/categorySlice";
import { deleteALlCategory, updateALlCategory } from "../features/productSlice";

type CategoryStatus = "active" | "inactive";

type CategoryRow = {
  id: string;
  name: string;
  description: string;
  status: CategoryStatus;
};

export default function Categories() {
  const { rows, status } = useSelector((state: RootState) => state.category);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchDataCategory());
  }, []);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<CategoryStatus | "">("");
  const [page, setPage] = useState(1);
  const pageSize = 5;

  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<CategoryRow | null>(null);

  const filtered = useMemo(() => {
    return rows
      .filter((r) =>
        search ? r.name.toLowerCase().includes(search.toLowerCase()) : true
      )
      .filter((r) => (statusFilter ? r.status === statusFilter : true));
  }, [rows, search, statusFilter]);

  const paged = useMemo<CategoryRow[]>(() => {
    const start = (page - 1) * pageSize;
    return filtered.slice(start, start + pageSize);
  }, [filtered, page]);

  const columns: ColumnsType<CategoryRow> = [
    { title: "Tên", dataIndex: "name", key: "name" },
    { title: "Mô tả", dataIndex: "description", key: "description" },
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

  function onEdit(row: CategoryRow) {
    setEditing(row);
    setOpen(true);
  }

  function onDelete(id: string) {
    if (
      confirm(
        `Ban co chac muon xoa danh muc <${rows.find((t) => t.id === id)?.name}>`
      )
    ) {
      dispatch(deleteALlCategory(String(rows.find((t) => t.id === id)?.name)));
      dispatch(deleteCategory(id));
    }
  }

  interface CategoryFormValues {
    name: string;
    description?: string;
    status: CategoryStatus;
  }

  function onSubmit(values: CategoryFormValues) {
    const next: CategoryRow = {
      id: editing?.id ?? uuidv4(),
      name: values.name,
      description: values.description || "",
      status: values.status,
    };
    if (editing) {
      dispatch(updateALlCategory({ now: editing.name, new: next.name }));
      dispatch(updateCategory(next));
    } else {
      dispatch(addCategorys(next));
    }
    setOpen(false);
  }

  return (
    <div className="space-y-4">
      {status === "pending" && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "#000000cc",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p style={{ color: "blue" }}>Loading...</p>
        </div>
      )}
      <div className="flex justify-between items-center">
        <div className="text-lg font-semibold">Quản lý danh mục</div>
        <Button type="primary" onClick={onAdd}>
          Thêm mới
        </Button>
      </div>

      <div className="flex justify-end gap-3">
        <Select
          placeholder="Trạng thái"
          style={{ width: "200px" }}
          allowClear
          value={statusFilter || undefined}
          onChange={(v) => setStatusFilter((v as CategoryStatus) || "")}
          options={[
            { value: "active", label: "Hoạt động" },
            { value: "inactive", label: "Ngừng" },
          ]}
        />
        <Input
          placeholder="Tìm kiếm"
          style={{ width: "300px" }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <Table<CategoryRow>
        columns={columns}
        dataSource={paged as CategoryRow[]}
        pagination={false}
        rowKey={(record) => `cat-${record.id}`}
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
        title={editing ? "Sửa danh mục" : "Thêm mới danh mục"}
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
            name="name"
            label="Tên"
            rules={[
              { required: true, message: "Nhập tên" },
              () => ({
                validator(_, value) {
                  if (!value) return Promise.resolve();
                  const exist = rows.some(
                    (c) =>
                      c.name.toLowerCase() === value.toLowerCase() &&
                      c.id !== editing?.id
                  );
                  return exist
                    ? Promise.reject(new Error("Tên danh mục đã tồn tại"))
                    : Promise.resolve();
                },
              }),
            ]}
          >
            <Input />
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
          <Form.Item name="description" label="Mô tả">
            <Input.TextArea rows={3} />
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
