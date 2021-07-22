import React from 'react'
import styles from './TopBar.module.css';


export default function TopBar() {
    return (
        <div className={styles.top}>
           <div className={styles.topLeft}>
             <i className={`fab fa-facebook-square ${styles.topIcon}`}></i>
             <i className={`fab fa-twitter-square ${styles.topIcon}`}></i>
           </div>
           <div className={styles.topCenter}>
               <ul className={styles.topList}>
                   <li className={styles.topListItem}>Home</li>
                   <li className={styles.topListItem}>About</li>
                   <li className={styles.topListItem}>Contact</li>
                   <li className={styles.topListItem}>Write</li>
                   <li className={styles.topListItem}>Logout</li>

               </ul>
           </div>
           <div className={styles.topRight}>
               <img 
               className={styles.topImg}
               src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
               alt="" />
               <i className={`fas fa-search ${styles.topSearchIcon}`}></i>
           </div>
        </div>
    )
}
