import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png"; // Certifique-se de ter o logo.png na pasta assets

export default function Layout({ children }) {
  const location = useLocation();
  const rotasProtegidas = ["/pedidos", "/relatorios"];

  if (!rotasProtegidas.includes(location.pathname)) {
    return <div>{children}</div>;
  }

  return (
    <div className="min-h-screen bg-[#FFF9F5] dark:bg-[#1E1E1E] text-[#2D2D2D] dark:text-white transition-colors">
      <header className="bg-white dark:bg-zinc-900 border-b border-orange-200 dark:border-orange-500 p-4 flex justify-between items-center shadow-md">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="h-10" />
          <h1 className="text-xl font-bold text-orange-600 dark:text-orange-400">Empório Villa Borghese</h1>
        </div>
        <nav className="flex gap-4">
          <Link to="/pedidos" className="text-sm text-orange-600 hover:underline">Pedidos</Link>
          <Link to="/relatorios" className="text-sm text-orange-600 hover:underline">Relatórios</Link>
        </nav>
      </header>
      <main className="p-6">{children}</main>
    </div>
  );
}