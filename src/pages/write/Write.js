 import React from 'react'
 import styles from './Write.module.css'
 
 export default function Write() {
     return (
         <div className={styles.write}>
             <img 
             className={styles.writeImg}
             src="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
            <form className={styles.writeForm}>
                <div className={styles.writeFormGroup}>
                    <label htmlFor="fileInput">
                        <i className={`${styles.writeIcon} fas fa-plus`}></i>
                    </label>
                    <input type="file" id="fileInput"  style={{display:"none"}}/>
                    <input type="text" placeholder="Enter title" className={styles.writeInput} 
                    autoFocus={true}
                    />
                </div>

                <div className={styles.writeFormGroup}>
                    <textarea 
                    placeholder="Tell your story" 
                    type="text" 
                    className={`${styles.writeInput} ${styles.writeText}`}
                    >
                    </textarea>
                </div>

                <button className={styles.writeSubmit}>Publish</button>

            </form>
         </div>
     )
 }
 