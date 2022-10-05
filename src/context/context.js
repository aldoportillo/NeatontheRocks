import React from "react";
import { productData } from "../products/productData";

const Context = React.createContext()

function ContextProvider({children}) {
    const [allItems, setAllItems] = React.useState(productData)
    const [cart, setCart] = React.useState([])

    function toggleFavorite(id) {
        const updatedArr = allItems.map(item => {
            if (item.id === id){
                return{
                    ...item,
                    isFavorited: !item.isFavorited,
                }
            }
            return item
        })
        setAllItems(updatedArr)
    }

    function addToCart (obj) {
        setCart(prevCart => {
            return [
                ...prevCart,
                obj
            ]
        })
    }

    console.log(cart)
    return(
        <Context.Provider value={{allItems, toggleFavorite, addToCart}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}