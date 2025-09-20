import React, { useState } from "react";

function Login({ onLogin }) {
  const [email, setEmail] = useState(""); // changed from username
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Hardcoded Email/Password check
    if (email === "krish@example.com" && password === "mypassword123") {
      onLogin(true);
    } else {
      setError("Invalid Email or Password");
    }
  };

  return (
    <div style={styles.container}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="email"
          placeholder="Email ID"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Login</button>
        {error && <p style={styles.error}>{error}</p>}
      </form>
    </div>
  );
}

const styles = {
  container: { textAlign: "center", marginTop: "100px", fontFamily: "Arial" },
  form: { display: "inline-block", textAlign: "left" },
  input: { display: "block", margin: "10px 0", padding: "10px", width: "250px" },
  button: { padding: "10px 20px", backgroundColor: "#2b6cb0", color: "#fff", border: "none", cursor: "pointer" },
  error: { color: "red", marginTop: "10px" }
};

export default Login;
