import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')


    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }

    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value)
    }

    const createUserWithEmailAndPassword = (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError('Your Passwords did not match!!! Try Again')
            return;
        }
    }



    return (
        <div className='form-container'>
            <div>
                <h1 className='form-title'>Sign up</h1>
                <form onSubmit={createUserWithEmailAndPassword}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirmPassword">confirmPassword</label>
                        <input onBlur={handleConfirmPasswordBlur} type="password" name="confirmPassword" id="" />
                    </div>
                    <p style={{ color: 'red' }}>{error}</p>
                    <input className='form-submit' type="submit" value="Sign Up" required />
                </form>
                <p>Already Have an Account??? <Link className='form-link' to='/login'> Login</Link></p>
            </div>
        </div>
    );
};

export default SignUp;