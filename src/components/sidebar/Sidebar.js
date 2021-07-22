import React from 'react'
import styles from './Sidebar.module.css';

export default function Sidebar() {
    return (
        <div className={styles.sidebar}>
           <div className={styles.sidebarItem}>
               <span className={styles.sidebarTitle}>ABOUT ME</span>
               <img 
               alt=""
               src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
               />
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
                   do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            </div> 

            <div className={styles.sidebarItem}>
               <span className={styles.sidebarTitle}>CATEGORIES</span>
              <ul className={styles.sidebarList}>
                  <li className={styles.sidebarListItem}>Life</li>
                  <li className={styles.sidebarListItem}>Music</li>
                  <li className={styles.sidebarListItem}>Style</li>
                  <li className={styles.sidebarListItem}>Sport</li>
                  <li className={styles.sidebarListItem}>Tech</li>
              </ul>
            </div>
             

        </div>
    )
}
