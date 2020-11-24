import React, {useContext} from 'react';
import {Link } from 'react-router-dom';
import {UserContext} from '../App';

const NavBar = () => {
    const {state, dispatch} = useContext(UserContext);

    const renderList = ()=>{
        //Si hay algún valor (user) en el state se muestran los links de perfil y crrar post
        if(state){
            return[
                <li><Link to="/profile">Profile</Link></li>,
                <li><Link to="/create">Create Post</Link></li>
            ];
            //Si no hay ningún valor (user) en el state se muestran los links de login y registro
        }else{
            return[
                <li><Link to="/signin">Login</Link></li>,
                <li><Link to="/signup">Signup</Link></li>
            ]
        }
    }

    return (
        <nav>
            <div className="nav-wrapper white" >
                <Link to={state?"/":"/signin"} className="brand-logo left">Instagram</Link>
                <ul id="nav-mobile" className="right">
                    
                    {renderList()}

                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
