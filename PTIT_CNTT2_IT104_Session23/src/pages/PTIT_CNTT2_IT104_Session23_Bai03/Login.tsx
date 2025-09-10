import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div>
      <form>
        <h1>Login</h1>
        <p>Your email</p>
        <input type="text" />
        <p>Password</p>
        <input type="password" />
        <br />
        <button>Login</button>
        <p>
          Already have an account? <Link to="/register">Register here</Link>
        </p>
      </form>
    </div>
  );
}
