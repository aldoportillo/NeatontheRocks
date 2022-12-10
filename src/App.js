import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Macro from "./pages/Macro";
import PageContainer from "./components/PageContainer";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<PageContainer children={<Home />}/>} />
        <Route path="/products" element={<PageContainer children={<Products />}/>} />
        <Route path="/cart" element={<PageContainer children={<Cart />}/>} />
        <Route path="/macro" element={<PageContainer children={<Macro />}/>} />
      </Routes>
    </div>
    
  );
}

export default App;
