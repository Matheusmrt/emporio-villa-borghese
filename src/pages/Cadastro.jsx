
import { useState } from "react";
import api from "@/services/api";
import { useNavigate } from "react-router-dom";

export default function Cadastro() {
  const [nome, setNome] = useState("");
  const [setor, setSetor] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");
  const navigate = useNavigate();

  const handleCadastro = async (e) => {
    e.preventDefault();
    setMensagem("");
    try {
      await api.post("/auth/register", { nome, setor, email, senha });
      setMensagem("Cadastro realizado com sucesso!");
      navigate("/login");
    } catch (err) {
      setMensagem("Erro ao cadastrar.");
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF9F5] dark:bg-[#1E1E1E] flex items-center justify-center p-6">
      <form
        onSubmit={handleCadastro}
        className="bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-md border border-orange-200 dark:border-orange-500 max-w-md w-full"
      >
        <h2 className="text-2xl font-bold text-center text-orange-600 dark:text-orange-400 mb-6">Cadastro</h2>

        {mensagem && <p className="text-center text-orange-600 mb-4">{mensagem}</p>}

        <input
          type="text"
          placeholder="Nome"
          className="w-full p-2 mb-4 border rounded-lg dark:bg-zinc-800"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Setor"
          className="w-full p-2 mb-4 border rounded-lg dark:bg-zinc-800"
          value={setor}
          onChange={(e) => setSetor(e.target.value)}
          required
        />

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
          Cadastrar
        </button>
      </form>
    </div>
  );
}
