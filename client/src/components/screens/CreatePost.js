import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import materialize from 'materialize-css';

const CreatePost = (e) => {

    const history = useHistory();

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [image, setImage] = useState("");
    const [photo, setPhoto] = useState("");

    const postDetails = (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append("file", image);
        data.append("upload_preset", "insta-clone");
        data.append("cloud_name", "dniykkyhc");

        axios.post('https://api.cloudinary.com/v1_1/dniykkyhc/image/upload', data).then((response) => {
            setPhoto(response.data.url);
        }, (error) => {
            console.log(error);
        });;

        const newPost = {
            title,
            body,
            photo
        };
        axios.post('http://localhost:5000/createpost', newPost).then((response) => {
            materialize.toast({ html: "Created post", classes: "##69f0ae green accent-2" });
            history.push('/');
        }, (error) => {
            materialize.toast({ html: error.response.data.error, classes: "#b71c1c red darken-4" });

        });;
    }
    return (
        <div className="card input-file" style={{
            margin: "30px auto",
            maxWidth: "500px",
            padding: "20px",
            textAlign: "center"
        }}>

            <form onSubmit={(e) => postDetails(e)}>
                <input type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required/>
                <input type="text"
                    placeholder="Body"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                required/>
                <div className="file-field input-field">
                    <div className="btn #64b5f6 blue darken-1">
                        <span>Upload photo</span>
                        <input type="file" onChange={(e) => setImage(e.target.files[0])} required/>
                    </div>
                    <div className="file-path-wrapper">
                        <input className="file-path validate" type="text" />
                    </div>
                </div>
                <button className="btn waves-effect waves-light #64b5f6 blue darken-1" >Submit post </button>
            </form>

        </div>
    )
}

export default CreatePost