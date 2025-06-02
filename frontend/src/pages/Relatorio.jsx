import React from "react";
import Header from "../components/Header";

export default function Relatorio() {
  return (
    <>
      <Header />
      <div className="p-6 bg-orange-50 min-h-screen">
        <h1 className="text-3xl text-orange-600 font-bold mb-4">Relatórios</h1>
        <div className="bg-white rounded-xl p-4 shadow-md">
          <label className="block text-lg font-semibold mb-2">Filtrar por data:</label>
          <input
            type="date"
            className="border p-2 rounded mb-4 w-full max-w-xs"
          />
          <div className="mt-4">
            <h2 className="text-xl font-bold text-orange-600 mb-2">Resultados</h2>
            <table className="w-full border text-left">
              <thead>
                <tr className="bg-orange-100">
                  <th className="p-2">Data</th>
                  <th className="p-2">Nome</th>
                  <th className="p-2">Quantidade</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2">2025-06-01</td>
                  <td className="p-2">João Silva</td>
                  <td className="p-2">3</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
