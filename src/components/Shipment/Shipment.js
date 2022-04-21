import React, { useState } from 'react';
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';


const Shipment = () => {
    const [user] = useAuthState(auth);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [error, setError] = useState('')

    // const navigate = useNavigate()

    const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth)



    const handleNameBlur = event => {
        setName(event.target.value)
    }

    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }

    const handleAddressBlur = event => {
        setAddress(event.target.value)
    }

    const handlePhoneBlur = event => {
        setPhoneNumber(event.target.value)
    }




    // if (user) {
    //     navigate('/shop')
    // }

    const handleCreateUserWithEmailAndPassword = (event) => {
        event.preventDefault();

        const shipping = { name, email, address, phoneNumber }
        console.log(shipping);


    }


    return (
        <div className='form-container'>
            <div>
                <h1 className='form-title'>Shipping Information</h1>
                <form onSubmit={handleCreateUserWithEmailAndPassword}>
                    <div className="input-group">
                        <label htmlFor="name">Your Name</label>
                        <input onBlur={handleNameBlur} type="text" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input value={user?.email} readOnly type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="address">Address</label>
                        <input onBlur={handleAddressBlur} type="text" name="address" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="phone-number">Phone Number</label>
                        <input onBlur={handlePhoneBlur} type="text" name="Phone" id="" required />
                    </div>

                    <input className='form-submit' type="submit" value="Add Shipping" required />
                </form>

            </div>
        </div>
    );
};

export default Shipment;