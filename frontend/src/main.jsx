import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

try {
  const root = document.getElementById("root");
  ReactDOM.createRoot(root).render(<App />);
} catch (e) {
  document.body.innerHTML += `<pre style='color:red; padding: 1rem; text-align:center;'>Erro ao carregar App: ${e.message}</pre>`;
}
