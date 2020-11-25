import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import {UserContext} from '../../App';

const Profile = () => {


    const [myPics, setMyPics] = useState([]);
    const {state, dispatch}= useContext(UserContext);

    useEffect(() => {


        const fetch = async () => {
            const result = await axios.get('http://localhost:5000/mypost', {
                headers: {
                    //le quitamos las comillas al token
                    'Authorization': "Bearer " + localStorage.getItem("jwt").slice(1, -1)
                },
            })
            setMyPics(result.data.myPosts);
        }

        fetch();
    }, [])
    return (
        <div style={{ maxWidth: "550px", margin: "0px auto" }}>
            <div style={{
                display: "flex",
                justifyContent: "space-around",
                margin: "18px 0px",
                borderBottom: "1px solid grey"
            }}>
                <div>
                    <img style={{ width: "160px", height: "160px", borderRadius: "80px" }} src="https://images.unsplash.com/photo-1569466896818-335b1bedfcce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" />

                </div>
                <div>
                    <h4>{state?state.name:"Loading..."}</h4>
                    <div style={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "108%"
                    }}>
                        <h6>40 posts</h6>
                        <h6>40 followers</h6>
                        <h6>40 following</h6>
                    </div>
                </div>
            </div>

            <div className="gallery">
                {
                    myPics.map(item=>{
                        return(
                            <img className="item" src={item.photo} alt={item.title+item.body} />
                        )
                    })
                }

            </div>
        </div>
    );
};

export default Profile;
