import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
interface Acc {
  id: number;
  email: string;
  password: string;
}
export default function Register() {
  const [listAcc, setListAcc] = useState<Acc[]>(
    JSON.parse(localStorage.getItem("listAcc") || "[]")
  );
  const [inputAcc, setInput] = useState<{
    email: string;
    password: string;
    confirmPassword: string;
  }>({ email: "", password: "", confirmPassword: "" });
  const navigate = useNavigate();
  useEffect(
    () => localStorage.setItem("listAcc", JSON.stringify(listAcc)),
    [listAcc]
  );
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...inputAcc, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      inputAcc.email.trim().length > 0 &&
      inputAcc.password.trim().length > 0 &&
      inputAcc.confirmPassword.trim().length > 0
    ) {
      if (
        listAcc.every((t) => t.email !== inputAcc.email.trim()) &&
        inputAcc.password === inputAcc.confirmPassword
      ) {
        setListAcc([
          ...listAcc,
          {
            id: listAcc.length > 0 ? listAcc[listAcc.length - 1].id + 1 : 1,
            email: inputAcc.email,
            password: inputAcc.password,
          },
        ]);
        navigate("/login");
        return;
      }
    }
    alert("Gia tri khong hop le");
  };
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col border-[2px] border-black p-[10px] rounded-[10px]"
      >
        <h1 className="text-center">
          <strong>Create Account</strong>
        </h1>
        <br />
        <p>Your email</p>
        <input
          onChange={handleChange}
          className="border-[2px] border-black rounded-[10px] p-[5px]"
          type="text"
          value={inputAcc.email}
          name="email"
          placeholder="name@company.com"
        />
        <p>Password</p>
        <input
          onChange={handleChange}
          className="border-[2px] border-black rounded-[10px] p-[5px]"
          type="password"
          value={inputAcc.password}
          name="password"
          placeholder="12345678G"
        />
        <p>Confirm password</p>
        <input
          onChange={handleChange}
          className="border-[2px] border-black rounded-[10px] p-[5px]"
          type="password"
          value={inputAcc.confirmPassword}
          name="confirmPassword"
          placeholder="12345678G"
        />
        <br />
        <button className="w-[100%] bg-blue-500 rounded-[10px] p-[5px] text-white hover:brightness-80">
          Create an account
        </button>
        <p>
          Already have an account?{" "}
          <Link to="/login">
            <strong>Login here</strong>
          </Link>
        </p>
      </form>
    </div>
  );
}
