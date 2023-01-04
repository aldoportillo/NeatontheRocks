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
import Product from "./pages/Product";


function App() {

  const [cocktailData, setCocktailData] = React.useState([])
  const [spiritData, setSpiritData] = React.useState([])
  const [loadingCocktails, setLoadingCocktails] = React.useState(true)
  const [loadingSpirits, setLoadingSpirits] = React.useState(true)
  

    React.useEffect(( ) => {
        axios
          .get(`https://neatontherocks-server.onrender.com/api/cocktails`)
          .then(res => {
            const cocktailData = res.data;
            setCocktailData(cocktailData)
            setLoadingCocktails(false)
          })
        axios
          .get('https://neatontherocks-server.onrender.com/api/spirits')
          .then(res => {
            const spiritData = res.data;
            setSpiritData(spiritData)
            setLoadingSpirits(false)
          })
    }, [])


  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<PageContainer children={<Home />}/>} />
        <Route path="/products" element={<PageContainer children={<Products/>}/>} />
        <Route path="/products/:id" element={<PageContainer children={<Product />} />} />
        <Route path="/cart" element={<PageContainer children={<Cart />}/>} />
        <Route path="/macro" element={<PageContainer children={<Macro spiritData={spiritData} loading={loadingSpirits}/>}/>} />
        <Route path="/cocktails" element={<PageContainer children={<Cocktails cocktailData={cocktailData} loading={loadingCocktails}/>} />} />
        <Route path="/cocktail/:id" element={<PageContainer children={<Cocktail />} />} />
      </Routes>
    </div>
    
  );
}

export default App;
