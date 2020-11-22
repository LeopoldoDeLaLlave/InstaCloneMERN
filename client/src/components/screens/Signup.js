import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import materialize from 'materialize-css';

const Signup = () => {
    
    const history = useHistory();

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const postData = async (e) => {
        e.preventDefault();
        const newUser = {
            name,
            email,
            password
        };
        axios.post('http://localhost:5000/signup', newUser).then((response) => {
            materialize.toast({html:response.data.message, classes:"##69f0ae green accent-2"});
            history.push('/signin');
          }, (error) => {
            materialize.toast({html:error.response.data.error, classes:"#b71c1c red darken-4"});
            
          });;
    }

    return (
        <div className="myCard">
            <div className="card auth-card input-field">
                <h2>Instagram</h2>
                <form onSubmit={(e)=>postData(e)}>
                    <input type="text"
                        placeholder="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)} 
                        required/>
                    <input type="email"
                        placeholder="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} 
                        required/>
                    <input type="password"
                        placeholder="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} 
                        required/>
                    <button className="btn waves-effect waves-light #64b5f6 blue darken-1">
                        SignUp
                    </button>
                </form>

                <h5>
                    <Link to="/signin">Don't have an account?</Link>
                </h5>
            </div>
        </div>
    );
};

export default Signup;