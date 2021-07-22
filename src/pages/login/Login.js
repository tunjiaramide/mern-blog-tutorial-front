import React from 'react'
import styles from './Login.module.css'
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

export default function Login() {
    const { register, handleSubmit, watch } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("example")); // watch input value by passing the name of it

    return (
        <div className={styles.login}>
            <span className={styles.loginTitle}>Login</span>
            <form className={styles.loginForm} onSubmit={handleSubmit(onSubmit)}>
                
            <label>Email</label>
            <input className={styles.loginInput} type="text" placeholder="Enter your email" {...register("email")} />
            <label>Password</label>
            <input className={styles.loginInput} type="password" placeholder="Enter your password" {...register("password")} />
            <button className={styles.loginButton}><Link to="/login">Login</Link></button>
            <button className={styles.loginRegisterButton}><Link to="/register">Register</Link></button>
            </form>
        </div>
    )
}
