
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import Login from "./pages/Login.jsx";
import Cadastro from "./pages/Cadastro.jsx";
import Pedidos from "./pages/Pedidos.jsx";
import Relatorios from "./pages/Relatorios.jsx";

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
