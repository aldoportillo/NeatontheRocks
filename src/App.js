import Header from "./components/Header";
import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Macro from "./pages/Macro";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <Header />
      
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/macro" element={<Macro />} />
      </Routes>

      <Footer />
    </div>
    
  );
}

export default App;
