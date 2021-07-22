import React from 'react'
import Header from '../../components/header/Header'
import Post from '../../components/posts/Post'
import Sidebar from '../../components/sidebar/Sidebar'
import styles from './Home.module.css'

export default function Home() {
    return (
        <>
        <Header /> 
        <div className={styles.home}>
           <Post /> 
           <Sidebar /> 
        </div> 
        </>
        
    )
}
