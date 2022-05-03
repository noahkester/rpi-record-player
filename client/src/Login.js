import React from 'react'
import "./style/Login.css"
import "./style/App.css"
const AUTH_URL  = "https://accounts.spotify.com/authorize?client_id=d4a9c4fe9d174e7fbb9c7e12d05bdd4b&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-read-playback-state%20user-modify-playback-state"

export default function Login() {
    return (
        <div className = "login-screen">
            <a href = {AUTH_URL} className = "button">
                Login with Spotify
            </a>
        </div>
    )
}