import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { selectedProduct } from '../redux/actions.js/productActions';
import { useSelector } from 'react-redux';
export default function ProductDetail() {
    const productID = useParams('procductId')
    const dispatch = useDispatch()
    const product = useSelector((state)=>state.selectedProduct)
    console.log("profict", product);
    const fetchProductDetail = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${productID.productId}`).catch((error)=>{
            console.log(error);
        })
        console.log(response);
        dispatch(selectedProduct(response.data))
    }
    console.log(productID.productId);
    
    // useEffect(() => {
    //     fetchProductDetail()
    // }, [])
    return (
        <div>
            This is Product Detail
        </div>
    )
}
