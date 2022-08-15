import React from 'react'

import Navigation from './Navigation'
import AvlBrands from './AvlBrands'
import styles from './../styles/Home.module.css'

const Home = () => {

    return(
        <div className={styles.whole}>
            <Navigation />
            <h1 className={styles.bigText}>The Motorcycle Heaven</h1>
            <p className={styles.mediumText}>Order high end motorcycles to fill out your high end dealership</p>
            <p>Available Brands</p>
            <AvlBrands/>
        </div>
    )
}

export default Home