import axios from "axios";
import React from "react";

const Context = React.createContext()
    

function ContextProvider({children}) {
    const [productData, setProductData] = React.useState()
    const [cart, setCart] = React.useState([])
    const [loadingProducts, setLoadingProducts] = React.useState(true)

    React.useEffect(() => {
        axios
            .get('https://neatontherocks-server.onrender.com/api/products')
            .then(res => {
            const productData = res.data;
                setProductData(productData)
                setLoadingProducts(false)
            })
    },[])

    function toggleFavorite(id) {
        const updatedArr = productData.map(item => {
            if (item.id === id){
                return{
                    ...item,
                    isFavorited: !item.isFavorited,
                }
            }
            return item
        })
        setProductData(updatedArr)
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
        <Context.Provider value={{productData, toggleFavorite, addToCart, removeFromCart, cart, clearCart, loadingProducts }}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}