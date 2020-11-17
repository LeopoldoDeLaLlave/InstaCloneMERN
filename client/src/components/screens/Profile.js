import React from 'react';

const Profile = () => {

    return (
        <div style={{maxWidth:"550px", margin:"0px auto"}}>
            <div style={{
                display: "flex",
                justifyContent: "space-around",
                margin: "18px 0px",
                borderBottom: "1px solid grey"}}>
                <div>
                    <img style={{ width: "160px", height: "160px", borderRadius: "80px" }} src="https://images.unsplash.com/photo-1569466896818-335b1bedfcce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" />

                </div>
                <div>
                    <h4>Javier Casas</h4>
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
                <img className="item" src="https://images.unsplash.com/photo-1593373986890-ea50b4dda788?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=835&q=80" />
                <img className="item" src="https://images.unsplash.com/photo-1593373986890-ea50b4dda788?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=835&q=80" />
                <img className="item" src="https://images.unsplash.com/photo-1593373986890-ea50b4dda788?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=835&q=80" />
                <img className="item" src="https://images.unsplash.com/photo-1593373986890-ea50b4dda788?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=835&q=80" />
                <img className="item" src="https://images.unsplash.com/photo-1593373986890-ea50b4dda788?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=835&q=80" />
                <img className="item" src="https://images.unsplash.com/photo-1593373986890-ea50b4dda788?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=835&q=80" />
                <img className="item" src="https://images.unsplash.com/photo-1593373986890-ea50b4dda788?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=835&q=80" />
            </div>
        </div>
    );
};

export default Profile;
