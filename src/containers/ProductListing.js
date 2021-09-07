import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import ProductComponents from "./ProductComponents";
import { SetProducts } from "../redux/actions/productActions";

const ProductListing = () => {
    const products = useSelector((state) => state);
    const dispatch = useDispatch();


    const fetchProducts = async () => {
        const response = await axios 
        .get('https://fakestoreapi.com/products')
            .catch((err) => {
                console.log("error",err);
            })
            console.log(response)
           dispatch(SetProducts(response.data));
    }


    useEffect(() => {
        fetchProducts();
    }, []);


    return (
        <div className="ui grid container">
           <ProductComponents/>
        </div>
    )
}

export default ProductListing;