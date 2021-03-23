import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { setAuth } from '../../actions';

const Login = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [loginUsername, setLoginUsername] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    useEffect(() => {
        isAuthenticated();
    }, []);

    const register = (e: any) => {
        e.preventDefault();
        login();
    }

    const login = async () => {
        try {
            await axios({
                method: 'post',
                data: {
                    username: loginUsername,
                    password: loginPassword
                },
                withCredentials: true,
                url: 'http://localhost:4000/login'
            });
            await isAuthenticated();
        } catch (err) {
            console.log(err);
        }
    }

    const isAuthenticated = () => {
        axios({
            method: 'get',
            withCredentials: true,
            url: 'http://localhost:4000/user'
        }).then((res) => {
            if (res.data.username) {
                history.push('/home');
                dispatch(setAuth(true));
            } else {
                dispatch(setAuth(false));
            }
        });
    }

    return (
        <div className='container'>
            <div className="row justify-content-center mb-3">
                <h4>Login</h4>
            </div>
            <div className="row justify-content-center">

                <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input onChange={e => setLoginUsername(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input onChange={e => setLoginPassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <button onClick={register} type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login
