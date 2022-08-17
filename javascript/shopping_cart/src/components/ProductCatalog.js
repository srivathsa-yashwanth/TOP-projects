import React from "react";

import ProductTile from "./ProductTile";
import styles from './../styles/ProductCatalog.module.css'

const ProductCatalog = (props) => {

    return (
        <div className={styles.productCatalog}>
            {/* ProductTile ->  brand model cc hp weight price */}
            <ProductTile array={props.array} func={props.func} brand='Ducati' model='Panigale V4' cc='1103' hp='211' weight='198' price='2350000' />
            <ProductTile array={props.array} func={props.func} brand='BMW' model='S1000RR' cc='999' hp='209' weight='192' price='4200000' />
            <ProductTile array={props.array} func={props.func} brand='Kawasaki' model='Ninja H2R' cc='998' hp='305' weight='216' price='7990000' />
            <ProductTile array={props.array} func={props.func} brand='Suzuki' model='Hayabusa' cc='1340' hp='187' weight='266' price='1650000' />
            <ProductTile array={props.array} func={props.func} brand='Ducati' model='Streetfigher V4' cc='1103' hp='205' weight='201' price='2215000' />
            <ProductTile array={props.array} func={props.func} brand='Triumph' model='Rocket' cc='2458' hp='165' weight='304' price='1990000' />
            <ProductTile array={props.array} func={props.func} brand='Honda' model='CBR 1000RR' cc='1000' hp='215' weight='201' price='2372000' />
            <ProductTile array={props.array} func={props.func} brand='Ducati' model='Diavel' cc='1262' hp='160' weight='249' price='2049000' />
            <ProductTile array={props.array} func={props.func} brand='Triumph' model='Tiger 1200' cc='1160' hp='148' weight='245' price='1930000' />
        </div>
    )
}

export default ProductCatalog