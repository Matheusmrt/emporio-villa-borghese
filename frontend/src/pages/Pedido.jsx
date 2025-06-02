import React from "react";
import Header from "../components/Header";

export default function Pedido() {
  return (
    <>
      <Header />
      <div className="p-6 bg-orange-50 min-h-screen">
        <h1 className="text-3xl text-orange-600 font-bold mb-4">Pedido - Marmita Diária</h1>
        <div className="bg-white rounded-xl p-4 shadow-md">
          <p className="text-lg font-semibold mb-2">Escolha os dias:</p>
          <div className="grid grid-cols-2 gap-2">
            {["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"].map(
              (dia) => (
                <label key={dia} className="flex items-center gap-2">
                  <input type="checkbox" /> {dia}
                </label>
              )
            )}
          </div>
          <div className="mt-6">
            <h2 className="text-xl font-bold text-orange-600 mb-2">Cardápio da Semana</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Segunda: Arroz, feijão, frango grelhado</li>
              <li>Terça: Arroz, feijão, carne moída</li>
              <li>Quarta: Macarrão com molho branco</li>
              <li>Quinta: Estrogonofe de frango</li>
              <li>Sexta: Peixe empanado</li>
              <li>Sábado: Feijoada</li>
              <li>Domingo: Lasanha</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
