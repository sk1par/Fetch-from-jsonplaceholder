import axios from 'axios';
import React, { useState } from 'react'
import { useHistory } from 'react-router';

const Register = () => {
    const history = useHistory();
    const [registerUsername, setRegisterUsername] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');

    const register = (e: any) => {
        e.preventDefault();
        axios({
            method: 'post',
            data: {
                username: registerUsername,
                password: registerPassword
            },
            withCredentials: true,
            url: 'http://localhost:4000/register'
        }).then(() => {
            history.push('/login');
        });
    }
    

    return (
        <div className='container'>
            <div className="row justify-content-center mb-3">
                <h4>Register</h4>
                </div>
            <div className="row justify-content-center">
            <form>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input onChange={e => setRegisterUsername(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input onChange={e => setRegisterPassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <button onClick={register} type="submit" className="btn btn-primary">Register</button>
            </form>
        </div>
        </div>
    )
}

export default Register
