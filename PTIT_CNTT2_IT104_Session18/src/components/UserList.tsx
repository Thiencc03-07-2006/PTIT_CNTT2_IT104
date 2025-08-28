import { useMemo } from "react";
interface User {
  id: number;
  name: string;
  age: number;
}
const userList: User[] = [
  { id: 1, name: "An", age: 18 },
  { id: 2, name: "Binh", age: 20 },
  { id: 3, name: "Chi", age: 25 },
];
export default function UserList() {
  const then18 = useMemo(() => {
    return userList.filter((t) => t.age > 18);
  }, []);
  return (
    <div>
      <h3>Bai 2</h3>
      {then18.map((t) => (
        <p key={t.id}>
          id: {t.id} name: {t.name} age: {t.age}
        </p>
      ))}
    </div>
  );
}
