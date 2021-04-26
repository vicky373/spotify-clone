import React from 'react';
import './login.css';
import {loginUrl} from "./spotify";

function Login() {
    return (
        <div className="login">
            {/* <p>Hi! you can login from here.</p> */}
            <img
                src="https://music-b26f.kxcdn.com/wp-content/uploads/2017/06/635963274692858859903160895_spotify-logo-horizontal-black.jpg"
                alt="Spotify logo"
            />
            <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
        </div>
    );
}

export default Login
