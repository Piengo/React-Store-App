import "./App.css";
import Navbar from "./components/Navbar";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";
import NoPage from "./components/NoPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Catalog from "./components/Catalog";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Catalog />} />
          <Route path="/detail" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
