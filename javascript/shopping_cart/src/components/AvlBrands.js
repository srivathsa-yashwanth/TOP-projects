import React from 'react'

import styles from './../styles/AvlBrands.module.css'

const AvlBrands  = () => {

    return (
        <div id='avl_brands' className={styles.avl_brands}>
            <div className={styles.smallTile}>
                <img src={require("./../assets/honda.png")} alt="honda" />
            </div>
            <div className={styles.smallTile}>
                <img src={require("./../assets/ducati.png")} alt="ducati" />
            </div>
            <div className={styles.smallTile}>
                <img src={require("./../assets/yamaha.png")} alt="yamaha" />
            </div>
            <div className={styles.smallTile}>
                <img src={require("./../assets/suzuki.png")} alt="suzuki" />
            </div>
            <div className={styles.smallTile}>
                <img src={require("./../assets/royalEnfield.png")} alt="royalenfield" />
            </div>
            <div className={styles.smallTile}>
                <img src={require("./../assets/triumph.png")} alt="triumph" />
            </div>
            <div className={styles.smallTile}>
                <img src={require("./../assets/bmw.jpeg")} alt="bmw" />
            </div>
            <div className={styles.smallTile}>
                <img src={require("./../assets/ktm.png")} alt="ktm" />
            </div>
            <div className={styles.smallTile}>
                <img src={require("./../assets/tvs.png")} alt="tvs" />
            </div>
            <div className={styles.smallTile}>
                <img src={require("./../assets/husqvarna.png")} alt="husqvarna" />
            </div>
            <div className={styles.smallTile}>
                <img src={require("./../assets/kawasaki.png")} alt="kawasaki" />
            </div>
            <div className={styles.smallTile}>
                <img src={require("./../assets/jawa.jpeg")} alt="jawa" />
            </div>
            <div className={styles.smallTile}>
                <img src={require("./../assets/benelli.jpeg")} alt="benelli" />
            </div>
            <div className={styles.smallTile}>
                <img src={require("./../assets/bajaj.png")} alt="bajaj" />
            </div>
            <div className={styles.smallTile}>
                <img src={require("./../assets/cfmoto.png")}  alt="cfmoto" />
                
            </div>


        </div>
    )
}

export default AvlBrands