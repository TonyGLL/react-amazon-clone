// MODULES
import React, { useState } from 'react';
import '../assets/Login.css';

// EXTERNAL PACKAGES
import { Link, useHistory } from 'react-router-dom';

// COMPONENTS
import { auth } from '../firebase';

function Login(props) {

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/');
            })
            .catch(error => alert(error));
    }

    const register = (e) => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/');
            })
            .catch(error => alert(error));
    }

    return (
        <div className="login">
            <Link>
                <img
                    className="login__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                    alt=""
                />
            </Link>
            <div className="login__container">
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        type="email"
                    />

                    <h5>Password</h5>
                    <input
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    />

                    <button
                        value={password}
                        onClick={login}
                        type="submit"
                        className="login__singInButton"
                    >Sign in
                    </button>
                </form>
                <p>
                    By signing-in you agree to Amazon's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies and Interest-Based Ads Notice.
                </p>
                <button
                    onClick={register}
                    className="login__registerButton"
                >Create you Amazon Account
                </button>
            </div>
        </div>
    );
}

export default Login;