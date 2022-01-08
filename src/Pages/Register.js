import { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function registerUser(event) {
    event.preventDefault();
    const response = await fetch("http://localhost:1337/api/register", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });
    const data = await response.json();
    console.log(data);
  }

  return (
    <div>
      <h1>Register</h1>
      <form className="register-form" onSubmit={registerUser}>
        <br />
        <label>Name</label>
        <br />
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Name"
        />{" "}
        <br />
        <br />
        <label>Email</label>
        <br />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
        />
        <br />
        <br />
        <label>Password</label>
        <br />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
        <br />
        <br />
        <input type="submit" value="Register" />
        <br />
        <br />
        <Link style={{ textDecoration: "none", color: "#fff" }} to="/login">
          ALREADY HAVE AN ACCOUNT?
        </Link>
      </form>
    </div>
  );
}

export default Register;
