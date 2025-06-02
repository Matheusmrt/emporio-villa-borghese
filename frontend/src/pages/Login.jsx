import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Tentando logar com\nEmail: ${email}\nSenha: ${senha}`);
  }

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1 style={{ color: "orange" }}>LOGIN FUNCIONAL</h1>
      <form onSubmit={handleSubmit} style={{ display: "inline-block", textAlign: "left" }}>
        <div style={{ marginBottom: "1rem" }}>
          <label>Email:</label><br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label>Senha:</label><br />
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
        </div>
        <button type="submit" style={{ backgroundColor: "orange", color: "#fff", border: "none", padding: "0.5rem 1rem", cursor: "pointer" }}>
          Entrar
        </button>
      </form>
    </div>
  );
}
