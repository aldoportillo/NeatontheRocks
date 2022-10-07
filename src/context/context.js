import React from "react";
import { productData } from "../products/productData";

const Context = React.createContext()

function ContextProvider({children}) {
    const [allItems, setAllItems] = React.useState(productData)
    const [cart, setCart] = React.useState([])
    const [nutrition, setNutrition] = React.useState({
        calories: 200,
        fat: 6,
        carbs: 7,
        protein: 3,
        sugar: 2,
        ethanol: 4,
    })

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
    function removeFromCart (id){
        setCart(prevItems => prevItems.filter(item => item.id !== id))
    }

    function clearCart () {
        setCart([])
    }


    return(
        <Context.Provider value={{allItems, toggleFavorite, addToCart, removeFromCart, cart, clearCart, nutrition}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}