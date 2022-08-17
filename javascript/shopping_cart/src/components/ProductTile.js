import React, { useEffect } from "react";

import styles from './../styles/ProductTile.module.css'

const ProductTile = (props) => {

    function addToCartArray(event) {

        let info = {};
        info['brand'] = props.brand
        info['model'] = props.model
        info['cc'] = props.cc
        info['hp'] = props.hp
        info['weight'] = props.weight
        info['price'] = props.price

        props.func(props.array.concat([info]))
    }

    function process(string) {
        return string.toLowerCase().replaceAll(' ','')
    }

    
    return (
        <div className={styles.productTile}>
            <img className={styles.productImage} src={require(`./../assets/${process(props.brand)}/${process(props.model)}.webp`)} alt={props.model} />
            <p className={styles.productName}>{props.brand} {props.model}</p>
            <p className={styles.productSpecs}>
                <p>{props.cc} CC</p>
                <p>{props.hp} Bhp</p>
                <p>{props.weight} Kg</p>
            </p>  
            <p className={styles.productPrice}>{props.price}</p>
            <button onClick={addToCartArray} className={styles.addCartButton}>Add to Cart</button>
        </div>
    )
}

export default ProductTile