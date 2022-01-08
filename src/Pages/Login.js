import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function loginUser(event) {
    event.preventDefault();
    const response = await fetch("http://localhost:1337/api/login", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await response.json();

    if (data.user) {
      alert("Login successful");
      window.location.href = "/Todo";
    } else {
      alert("Please check your credentials");
    }

    console.log(data);
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={loginUser}>
        <br />
        <label>E-mail</label>
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
        <input type="submit" value="Login" />
        <br />
        <br />
        <Link style={{ textDecoration: "none", color: "#fff" }} to="/register">
          CREATE A NEW ACCOUNT?
        </Link>
      </form>
    </div>
  );
}

export default Login;
