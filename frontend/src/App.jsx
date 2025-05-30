
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Pedidos from "./pages/Pedidos";
import Relatorios from "./pages/Relatorios";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/cadastro' element={<Cadastro />} />
          <Route path='/pedidos' element={<Pedidos />} />
          <Route path='/relatorios' element={<Relatorios />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
