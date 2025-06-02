import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-orange-500 p-4 flex items-center justify-between shadow-md">
      <div className="flex items-center gap-3">
        <img src="/logo.png" alt="Villa Borghese" className="h-12" />
        <h1 className="text-white font-bold text-lg">Empório Villa Borghese</h1>
      </div>
      <nav className="text-white space-x-4">
        <Link to="/pedido" className="hover:underline">Pedidos</Link>
        <Link to="/relatorio" className="hover:underline">Relatórios</Link>
      </nav>
    </header>
  );
}
