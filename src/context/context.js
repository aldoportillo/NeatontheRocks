import React from "react";
import { productData } from "../products/productData";

const Context = React.createContext()

function ContextProvider({children}) {
    const [allItems, setAllItems] = React.useState(productData)

    return(
        <Context.Provider value={{allItems}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}