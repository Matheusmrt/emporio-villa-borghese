
import { useState } from "react";
import api from "@/services/api";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setMensagem("");
    try {
      const res = await api.post("/auth/login", { email, senha });
      localStorage.setItem("token", res.data.token);
      navigate("/pedidos");
    } catch (err) {
      setMensagem("Login inválido.");
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF9F5] dark:bg-[#1E1E1E] flex items-center justify-center p-6">
      <form
        onSubmit={handleLogin}
        className="bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-md border border-orange-200 dark:border-orange-500 max-w-md w-full"
      >
        <h2 className="text-2xl font-bold text-center text-orange-600 dark:text-orange-400 mb-6">Login</h2>

        {mensagem && <p className="text-center text-red-500 mb-4">{mensagem}</p>}

        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-4 border rounded-lg dark:bg-zinc-800"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Senha"
          className="w-full p-2 mb-4 border rounded-lg dark:bg-zinc-800"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg transition"
        >
          Entrar
        </button>
      </form>
    </div>
  );
}
