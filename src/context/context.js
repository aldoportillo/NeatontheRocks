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

    return(
        <Context.Provider value={{allItems, toggleFavorite, addToCart, cart}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}