import React from "react";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div>
      <form>
        <h1>Create account</h1>
        <p>Your email</p>
        <input type="email" />
      </form>
      <p>Password</p>
      <input type="password" />
      <p>Confirm password</p>
      <input type="password" />
      <br />
      <button>Create acc</button>
      <p>
        Already have an account? <Link to="/login">Login here</Link>
      </p>
    </div>
  );
}
