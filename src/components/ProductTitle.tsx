import styles from '../styles/styles.module.css';
import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import React from 'react';

export interface Props{
    title?: string;
    className?: string;
    style?: React.CSSProperties;
}

export const ProductTitle = ({title, className, style}:Props) => {
    
    const {product} = useContext(ProductContext);
    let titleToShow: string;

    if(title){
        titleToShow = title;
    }else{
        titleToShow = product.title;
    }
    
    return(
        <span className={`${styles.productDescription} ${className}`} style={style}>{titleToShow}</span>
    )
}