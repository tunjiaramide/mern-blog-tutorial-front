import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import SinglePost from '../../components/singlepost/SinglePost'
import styles from './Single.module.css'

export default function Single() {
    return (
        <div className={styles.single}>
            <SinglePost />
            <Sidebar />
        </div>
    )
}
