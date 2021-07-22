import React from 'react'
import styles from './PostItem.module.css'

export default function PostItem() {
    return (
        <div className={styles.post}>
            <img 
            className={styles.postImg}
            src="https://images.pexels.com/photos/1595387/pexels-photo-1595387.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
            alt="" 
            />
            <div className={styles.postInfo}>
                <div className={styles.postCats}>
                    <span className={styles.postCat}>Music</span>
                    <span className={styles.postCat}>Life</span>
                </div>
                <span className={styles.postTitle}>
                    Lorem ipsum dolor sit amnet
                </span>
                <hr />
                <span className={styles.postDate}>1 hour ago</span>
                <p className={styles.postDesc}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
                do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat.

                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
                do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
        </div>
    )
}
