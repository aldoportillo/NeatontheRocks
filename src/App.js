import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Macro from "./pages/Macro";
import PageContainer from "./components/PageContainer";
import Cocktails from "./pages/Cocktails";
import Cocktail from "./pages/Cocktail";
import React from "react";
import axios from "axios";


function App() {

  const [cocktailData, setCocktailData] = React.useState([])
  const [spiritData, setSpiritData] = React.useState([])

    React.useEffect(( ) => {
        axios
          .get(`https://neatontherocks-server.onrender.com/api/cocktails`)
          .then(res => {
            const cocktailData = res.data;
            setCocktailData(cocktailData)
          })
        axios
          .get('http://localhost:5000/api/spirits')
          .then(res => {
            const spiritData = res.data;
            setSpiritData(spiritData)
          })
    }, [])


  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<PageContainer children={<Home />}/>} />
        <Route path="/products" element={<PageContainer children={<Products />}/>} />
        <Route path="/cart" element={<PageContainer children={<Cart />}/>} />
        <Route path="/macro" element={<PageContainer children={<Macro spiritData={spiritData}/>}/>} />
        <Route path="/cocktails" element={<PageContainer children={<Cocktails cocktailData={cocktailData}/>} />} />
        <Route path="/cocktail/:id" element={<PageContainer children={<Cocktail />} />} />
      </Routes>
    </div>
    
  );
}

export default App;
