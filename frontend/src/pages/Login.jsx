import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/login`,
        { email, senha }
      );
      alert("Login realizado com sucesso!");
      navigate("/pedido");
    } catch (error) {
      alert("Erro ao fazer login: " + (error?.response?.data?.erro || error.message));
    }
  }

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1 style={{ color: "orange" }}>LOGIN</h1>
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
