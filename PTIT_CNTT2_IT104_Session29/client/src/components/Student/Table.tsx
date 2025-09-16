interface Student {
  id: number;
  student_name: string;
  email: string;
  address: string;
  phone: string;
  status: boolean;
  created_at: string;
}
export default function Table({
  students,
  setIsOpenDelete,
}: {
  students: Student[];
  setIsOpenDelete: React.Dispatch<
    React.SetStateAction<string | number | boolean>
  >;
}) {
  return (
    <div className="p-[10px]">
      <table className="w-[100%]">
        <thead>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>Ten sinh vien</td>
            <td>Email</td>
            <td>Dia chi</td>
            <td>So dien thoai</td>
            <td>Lua chon</td>
          </tr>
        </thead>
        <tbody>
          {students.map((t) => (
            <tr key={t.id}>
              <td>
                <input type="checkbox" />
              </td>
              <td>{t.student_name}</td>
              <td>{t.email}</td>
              <td>{t.address}</td>
              <td>{t.phone}</td>
              <td>
                <button>✏️</button>
                <button onClick={() => setIsOpenDelete(t.id)}>❌</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
