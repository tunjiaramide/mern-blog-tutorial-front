import React from 'react'
import styles from './Register.module.css'
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

export default function Register() {
    const { register, handleSubmit, watch } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("example")); // watch input value by passing the name of it

    return (
        <div className={styles.register}>
            <span className={styles.registerTitle}>Register</span>
            <form className={styles.registerForm} onSubmit={handleSubmit(onSubmit)}>
                <label>Username</label>
                <input className={styles.registerInput} type="text" placeholder="Enter your username" {...register("username")} />
                <label>Email</label>
                <input className={styles.registerInput} type="text" placeholder="Enter your email" {...register("email")} />
                <label>Password</label>
                <input className={styles.registerInput} type="password" placeholder="Enter your password" {...register("password")} />
                <button className={styles.registerButton}><Link to="/register">Register</Link></button>
                <button className={styles.registerLoginButton}><Link to="/login">Login</Link></button>
            </form>
        </div>
    )
}
