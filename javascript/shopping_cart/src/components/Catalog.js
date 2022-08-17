import React, {useState, useEffect} from "react";

import Navigation from './Navigation'
import ProductCatalog from './ProductCatalog'
import CartItem from './CartItem'

import styles from './../styles/Catalog.module.css'

const Catalog = () => {

    const [CartArray, setCartArray] = useState([]);
    const [TotalCost, setTotalCost] = useState(0);

    // useEffect(()=>{
    //     console.log(CartArray)
    // })

    function closeCart() {
        const cart = document.querySelector('#cart')
        cart.style.display = 'none';
    }

    function openCart() {
        const cart = document.querySelector('#cart')
        cart.style.display = 'flex';
    }


    return(
        <div id='catalog' className={styles.catalog}>
            <Navigation/>
            <button className={styles.openCart} onClick={openCart} >Cart</button>
            <ProductCatalog array={CartArray} func={setCartArray}/>
            <div id='cart' className={styles.cartContainer}>
                <h1 className={styles.cartTitle} >Cart</h1>
                <button onClick={closeCart} className={styles.cartClose} >X</button>
                {CartArray.map( info => <CartItem key={info.model} info={info} total={TotalCost} setTotal={setTotalCost} />)}
                <p className={styles.totalCost} >Total = {TotalCost} </p>
                <button className={styles.checkoutButton} >Proceed</button>
            </div>

        </div> 
    )
}

export default Catalog