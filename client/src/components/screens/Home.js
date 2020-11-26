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


        //Nos devuelve un objeto indicando si ese usuario ya ha dado like a la foto
        const presente = await axios.put('http://localhost:5000/checklikes', postInfo, {
            headers: {
                //le quitamos las comillas al token
                'Authorization': "Bearer " + localStorage.getItem("jwt").slice(1, -1)
            },
        });
        //Si el usuario no ha dado like al pulsar le da like, si ya le ha dado like le da dislike
        if (!presente.data.presente) {
            const result = await axios.put('http://localhost:5000/like', postInfo, {
                headers: {
                    //le quitamos las comillas al token
                    'Authorization': "Bearer " + localStorage.getItem("jwt").slice(1, -1)
                },
            });
            const newData = data.map(item => {

                if (item._id == result.data._id) {
                    return result.data;
                } else {
                    return item;
                }
            }
            )
            setData(newData);
        } else {
            const unlikeResult = await axios.put('http://localhost:5000/unlike', postInfo, {
                headers: {
                    //le quitamos las comillas al token
                    'Authorization': "Bearer " + localStorage.getItem("jwt").slice(1, -1)
                },
            });
            const newData = data.map(item => {

                if (item._id == unlikeResult.data._id) {
                    return unlikeResult.data;
                } else {
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
                                <i className="material-icons" 
                                style={{ color: "red" ,cursor: "pointer"}}
                                onClick={() => likePost(item._id)}>favorite</i>
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


