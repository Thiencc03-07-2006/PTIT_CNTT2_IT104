import type { Student } from "../../utils/types";
type ActionType = {
  type: string;
  payload?: unknown | Student;
};
const initialState: Student[] = [
  {
    id: "SV001",
    fullName: "Nguyen Van A",
    age: 20,
    gender: "Nam",
    dateOfBirth: "2005-09-25",
    placeOfBirth: "Ha Noi",
    address: "Ha Noi",
  },
  {
    id: "SV002",
    fullName: "Nguyen Van B",
    age: 21,
    gender: "Nữ",
    dateOfBirth: "2004-09-25",
    placeOfBirth: "Thanh Hoa",
    address: "Ha Noi",
  },
  {
    id: "SV003",
    fullName: "Nguyen Van C",
    age: 19,
    gender: "Nam",
    dateOfBirth: "2006-09-25",
    placeOfBirth: "Quy Nhon",
    address: "Ha Noi",
  },
];
export const students = (
  state: Student[] = initialState,
  action: ActionType
) => {
  switch (action.type) {
    case "addStudent": {
      const student = action.payload as Student;
      const index = state.findIndex((t) => t.id === student.id);
      if (index === -1) {
        return [...state, student];
      }
      alert("Ma sinh vien da duoc su dung");
      return state;
    }
    case "updateStudent": {
      const student = action.payload as Student;
      const index = state.findIndex((t) => t.id === student.id);
      if (index !== -1) {
        const temp = [...state];
        temp[index] = { ...student };
        return temp;
      }
      alert("Khong tim thay doi tuong can sua");
      return state;
    }
    case "deleteStudent": {
      const id = action.payload;
      const index = state.findIndex((t) => t.id === id);
      if (index !== -1) {
        return state.filter((t) => t.id !== id);
      }
      alert("Khong tim thay doi tuong can xoa");
      return state;
    }
    default:
      return state;
  }
};
