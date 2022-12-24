import axios from "axios";
import React from "react";

const Context = React.createContext()
    

function ContextProvider({children}) {
    const [allItems, setAllItems] = React.useState()
    const [cart, setCart] = React.useState([])
    const [loadingProducts, setLoadingProducts] = React.useState(true)

    React.useEffect(() => {
        axios
            .get('https://neatontherocks-server.onrender.com/api/products')
            .then(res => {
            const productData = res.data;
                setAllItems(productData)
                setLoadingProducts(false)
            })
    },[])

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
        setCart(prevItems => prevItems.filter(item => item._id !== id))
    }

    function clearCart () {
        setCart([])
    }


    return(
        <Context.Provider value={{allItems, toggleFavorite, addToCart, removeFromCart, cart, clearCart, loadingProducts }}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}