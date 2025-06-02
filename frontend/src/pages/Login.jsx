import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";

export default function Login() {
  const [form, setForm] = useState({ email: '', senha: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/login', form);
      alert('Bem-vindo, ' + res.data.user.nome);
      navigate('/pedido');
    } catch {
      alert('Credenciais inválidas.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-orange-50">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-96">
        <h1 className="text-2xl font-bold text-orange-600 mb-4">Login</h1>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input type="email" name="email" placeholder="Email" className="border p-2 rounded" onChange={handleChange} />
          <input type="password" name="senha" placeholder="Senha" className="border p-2 rounded" onChange={handleChange} />
          <button className="bg-orange-500 text-white py-2 rounded">Entrar</button>
        </form>
        <p className="mt-4 text-sm text-center">
          Não tem uma conta? <Link to="/register" className="text-orange-600 font-semibold">Cadastre-se</Link>
        </p>
      </div>
    </div>
  );
}
