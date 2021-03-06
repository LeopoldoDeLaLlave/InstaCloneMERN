import React, { useContext, useRef, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../App';
import axios from 'axios';
import M from 'materialize-css';

const NavBar = () => {

    const searchModal = useRef(null);
    const [search, setSearch] = useState('');
    const [userDetails, setUserDetails] = useState([]);
    const { state, dispatch } = useContext(UserContext);
    const history = useHistory();


    useEffect(() => {
        M.Modal.init(searchModal.current);
    }, []);

    const renderList = () => {
        //Si hay algún valor (user) en el state se muestran los links de perfil y crrar post
        if (state) {
            return [
                <li key="1"><i data-target="modal1" className="large material-icons modal-trigger" style={{ color: "black" }}>search</i></li>,
                <li key="2"><Link to="/profile">Profile</Link></li>,
                <li key="3"><Link to="/create">Create Post</Link></li>,
                <li key="4"><Link to="/myfollowingpost">My following posts</Link></li>,
                <li key="5">
                    <button className="btn waves-effect waves-light #d50000 red accent-4"
                        onClick={() => {
                            localStorage.clear();
                            dispatch({ type: "CLEAR" });
                            history.push("/signin");
                        }}>
                        Logout
                    </button>
                </li>
            ];
            //Si no hay ningún valor (user) en el state se muestran los links de login y registro
        } else {
            return [
                <li key="6"><Link to="/signin">Login</Link></li>,
                <li key="7"><Link to="/signup">Signup</Link></li>
            ]
        }
    }

    const fetchUSers = async (query) => {
        setSearch(query);
        const results = await axios.post('http://localhost:5000/search-users', { query });
        console.log(results);
        setUserDetails(results.data.user);

    }
    return (
        <nav>
            <div className="nav-wrapper white" >
                <Link to={state ? "/" : "/signin"} className="brand-logo left">Sarzipi</Link>
                <ul id="nav-mobile" className="right">

                    {renderList()}

                </ul>
            </div>
            <div id="modal1" className="modal" ref={searchModal} style={{ color: "black" }}>
                <div className="modal-content">
                    <input type="text"
                        placeholder="Search user"
                        value={search}
                        onChange={(e) => fetchUSers(e.target.value)}
                        required />
                    <ul className="collection">
                        {userDetails.map(item => {
                            return <Link to={item._id !== state._id ? "/profile/" + item._id : '/profile'} onClick={() => {
                                M.Modal.getInstance(searchModal.current).close()
                                setSearch('')
                            }}><li key={item._id} className="collection-item">{item.email}</li></Link>
                        })}
                    </ul>
                </div>

                <div className="modal-footer">
                    <button className="modal-close waves-effect waves-green btn-flat" onClick={() => setSearch('')}>close</button>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
