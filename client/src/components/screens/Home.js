import React from 'react';

const Home = () => {

    return (
        <div className="home">
            <div className="card home-card">
                <h5>Javier</h5>
                <div className="card-image">
                    <img src="https://images.unsplash.com/photo-1571458837028-f73e8bce31df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80" />

                </div>
                <div className="card-content">
                    <i className="material-icons" style={{color:"red"}}>favorite</i>
                    <h6>title</h6>
                    <p>This is my amazing post</p>
                    <input type="text" placeholder="Add a comment" />
                </div>
            </div>
            <div className="card home-card">
                <h5>Javier</h5>
                <div className="card-image">
                    <img src="https://images.unsplash.com/photo-1571458837028-f73e8bce31df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80" />

                </div>
                <div className="card-content">
                    <i className="material-icons" style={{color:"red"}}>favorite</i>
                    <h6>title</h6>
                    <p>This is my amazing post</p>
                    <input type="text" placeholder="Add a comment" />
                </div>
            </div>

        </div>
    );
};

export default Home;


