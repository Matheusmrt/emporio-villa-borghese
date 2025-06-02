import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";

export default function Register() {
  const [form, setForm] = useState({ nome: '', setor: '', email: '', senha: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/register', form);
      alert('Usuário cadastrado!');
      navigate('/login');
    } catch {
      alert('Erro ao cadastrar. Email pode já estar em uso.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-orange-100">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-96">
        <h1 className="text-2xl font-bold text-orange-600 mb-4">Cadastro</h1>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input type="text" name="nome" placeholder="Nome" className="border p-2 rounded" onChange={handleChange} />
          <input type="text" name="setor" placeholder="Setor" className="border p-2 rounded" onChange={handleChange} />
          <input type="email" name="email" placeholder="Email" className="border p-2 rounded" onChange={handleChange} />
          <input type="password" name="senha" placeholder="Senha" className="border p-2 rounded" onChange={handleChange} />
          <button className="bg-orange-500 text-white py-2 rounded">Cadastrar</button>
        </form>
        <p className="mt-4 text-sm text-center">
          Já tem uma conta? <Link to="/login" className="text-orange-600 font-semibold">Entrar</Link>
        </p>
      </div>
    </div>
  );
}
