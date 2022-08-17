import React from 'react'
import { Link } from 'react-router-dom'

import styles from './../styles/Navigation.module.css'

const Navigation = () => {

    return (
        <div id="nav" className={styles.navi}>
            <p className={styles.link}><Link to='/' style={{color:'aliceblue', textDecoration:'none'} }>Home</Link></p>
            <p className={styles.link}><Link to='/catalog' style={{color:'aliceblue', textDecoration:'none'} }>Catalog</Link></p>
        </div>
    )
}

export default Navigation