import React from 'react'
import styles from './TopBar.module.css';
import { Link } from 'react-router-dom';


export default function TopBar() {
    const user = false;
    return (
        <div className={styles.top}>
           <div className={styles.topLeft}>
             <i className={`fab fa-facebook-square ${styles.topIcon}`}></i>
             <i className={`fab fa-twitter-square ${styles.topIcon}`}></i>
           </div>
           <div className={styles.topCenter}>
               <ul className={styles.topList}>
                   <li className={styles.topListItem}><Link to="/">Home</Link></li>
                   <li className={styles.topListItem}><Link to="/about">About</Link></li>
                   <li className={styles.topListItem}><Link to="/contact">Contact</Link></li>
                   <li className={styles.topListItem}><Link to="/write">Write</Link></li>
                   <li className={styles.topListItem}>
                       {user && 'LOGOUT'}</li>

               </ul>
           </div>
           <div className={styles.topRight}>
               {
                   user ? (
                    <img 
                    className={styles.topImg}
                    src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt="" />
                   ) : (
                    <>
                    <ul className={styles.topList}>
                    <li className={styles.topListItem}><Link to="/login">Login</Link></li>
                    <li className={styles.topListItem}><Link to="/register">Register</Link></li>
                    </ul>
                    </>
                   )
               }
               <i className={`fas fa-search ${styles.topSearchIcon}`}></i>
           </div>
        </div>
    )
}
