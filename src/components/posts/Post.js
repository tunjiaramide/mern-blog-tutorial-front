import React from 'react'
import PostItem from '../postItem/PostItem'
import styles from './Post.module.css'

export default function Post() {
    return (
        <div className={styles.posts}>
            <PostItem />
            <PostItem />
            <PostItem />
            <PostItem />
            <PostItem />
            <PostItem />
            <PostItem />
            <PostItem />
            <PostItem />
            <PostItem />
        </div>
    )
}
