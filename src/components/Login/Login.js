import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import './Login.css'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error]
        = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate()
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }

    if (user) {
        navigate(from, { replace: true });
    }


    const handleSignInWithEmailAndPassword = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password)
    }


    return (
        <div className='form-container'>
            <div>
                <h1 className='form-title'>Login</h1>
                <form onSubmit={handleSignInWithEmailAndPassword}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" />
                    </div>
                    <p style={{ color: 'red' }}>{error && error.message}</p>
                    {
                        loading && <p>Loading...</p>
                    }

                    <input className='form-submit' type="submit" value="Login" required />
                </form>
                <p>New to Ema-John??? <Link className='form-link' to='/signUp'> Create an Account</Link></p>
            </div>
        </div>
    );
};

export default Login;