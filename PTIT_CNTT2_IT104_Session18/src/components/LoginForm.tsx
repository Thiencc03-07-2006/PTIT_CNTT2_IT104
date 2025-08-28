import React, { useCallback, useState } from "react";

export default function LoginForm() {
  const [emailAndPassword, setEmailAndPassword] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEmailAndPassword((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log(emailAndPassword);
    },
    [emailAndPassword]
  );
  return (
    <div>
      <h3>Bai 3</h3>
      <form onSubmit={handleSubmit}>
        <p>Email</p>
        <input onChange={handleChange} name="email" type="email" />
        <p>Password</p>
        <input onChange={handleChange} name="password" type="password" />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}
