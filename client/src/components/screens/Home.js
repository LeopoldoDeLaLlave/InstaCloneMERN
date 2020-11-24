import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {

    const [data, setData] = useState([]);

    useEffect( () => {

        const fetchData = async () => {
            const result = await axios.get('http://localhost:5000/allpost', {
                headers: {
                    //le quitamos las comillas al token
                    'Authorization': "Bearer " + localStorage.getItem("jwt").slice(1, -1)
                },
            })

            setData(result.data.posts);
        }

        fetchData();
    }, [])

    return (
        <div className="home">
            {
                data.map(item => {
                    return (
                        <div className="card home-card" key={item._id}>
                            <h5>{item.postedBy.name}</h5>
                            <div className="card-image">
                                <img src={item.photo} alt={"postedBy:"+item.postedBy.name + item.title}/>

                            </div>
                            <div className="card-content">
                                <i className="material-icons" style={{ color: "red" }}>favorite</i>
                                <h6>{item.title}</h6>
                                <p>{item.body}</p>
                                <input type="text" placeholder="Add a comment" />
                            </div>
                        </div>
                    )
                })
            }


        </div>
    );
};

export default Home;


