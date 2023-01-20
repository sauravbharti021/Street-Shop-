
import { createContext, useState, useEffect } from "react";

// import PRODUCTS from '../shop-data.json';
import SHOP_DATA from "../shop-data";

import { getCategoriesAndDocuments } from "../util/firebase/firebase.util";

export const CategoriesContext = createContext({
    categoriesMap : {},

});

export const CategoryProvider =({children}) =>{

    const [categoriesMap, setCategoriesMap] =useState({});

    useEffect(()=>{
        const getCategories= async() =>{  
            const categoryMap = await   getCategoriesAndDocuments();
            console.log(categoryMap);
            setCategoriesMap(categoryMap);
         }
         getCategories();
        }, [])

    const value= {categoriesMap};
    return (
        <CategoriesContext.Provider value={value}>{children} </CategoriesContext.Provider>
    )

}