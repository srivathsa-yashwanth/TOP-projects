import React, {useState, useEffect} from "react";

import styles from './../styles/CartItem.module.css'

const CartItem = (props) => {
    
    // props -> brand model cc hp weight price

    const [Quantity, setQuantity] = useState(1);

    useEffect(()=>{
        props.setTotal(props.total + Number(props.info.price))
    },[])

    function process(string) {
        return string.toLowerCase().replaceAll(' ','')
    }


    return (
        <div className={styles.CartItem}>
            <img className={styles.ItemImage} src={require(`./../assets/${process(props.info.brand)}/${process(props.info.model)}.webp`)} alt={props.info.model} />
            <p className={styles.ItemTitle} >{props.info.brand} {props.info.model}</p>
            <div className={styles.ItemSpecs} >
                <p>{props.info.cc} CC</p>
                <p>{props.info.hp} bhp</p>
                <p>{props.info.weight} Kg</p>
            </div>
            <p className={styles.ItemPrice} >{props.info.price}</p>
            <div>
                <button className={styles.ItemButton} onClick={() => {setQuantity(Quantity-1); props.setTotal(props.total - Number(props.info.price))} }>-</button>
                <p className={styles.ItemQuantity} >{Quantity}</p>
                <button className={styles.ItemButton} onClick={() => {setQuantity(Quantity+1);  props.setTotal(props.total + Number(props.info.price))}}>+</button>
            </div>
            <p className={styles.ItemFinalPrice} > {props.info.price*Quantity}</p>
        </div>
    )
}

export default CartItem