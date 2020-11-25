import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {

    const [data, setData] = useState([]);

    useEffect(() => {

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

    const likePost = async (id) => {


        const postInfo = { postId: id }


        const presente = await axios.put('http://localhost:5000/checklikes', postInfo, {
            headers: {
                //le quitamos las comillas al token
                'Authorization': "Bearer " + localStorage.getItem("jwt").slice(1, -1)
            },
        });
        //Solo le puede dar like si no le ha dado like algún
        if (!presente.data.presente) {
            const result = await axios.put('http://localhost:5000/like', postInfo, {
                headers: {
                    //le quitamos las comillas al token
                    'Authorization': "Bearer " + localStorage.getItem("jwt").slice(1, -1)
                },
            });
            const newData = data.map(item=>{

                if(item._id==result.data._id){
                    return result.data;
                }else{
                    return item;
                }
            }  
            )
            setData(newData);
        }


    }



    return (
        <div className="home">
            {
                data.map(item => {
                    return (
                        <div className="card home-card" key={item._id}>
                            <h5>{item.postedBy.name}</h5>
                            <div className="card-image">
                                <img src={item.photo} alt={"postedBy:" + item.postedBy.name + item.title} />

                            </div>
                            <div className="card-content">
                                <i className="material-icons" style={{ color: "red" }}>favorite</i>
                                <i className="material-icons"
                                    onClick={() => likePost(item._id)}
                                >thumb_up</i>
                                <h6>{item.likes.length} likes</h6>
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


