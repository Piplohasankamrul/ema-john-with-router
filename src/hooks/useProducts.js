import { useEffect } from "react";
import { useState } from "react"

const useProducts = () => {
    const [products , setProducts] = useState([]);
    const [displayProducts, setDisplayProducts] = useState([]);
    useEffect(() => {
        fetch('./products.JSON')
        .then(res => res.json())
        .then(data => {
            setProducts(data)
            setDisplayProducts(data);
        })
    },[]);
    // Return neccesary things
    return [products , setProducts,displayProducts,setDisplayProducts];
}
export default useProducts;