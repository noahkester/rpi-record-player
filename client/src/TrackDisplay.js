import React from "react"
import "./style/TrackDisplay.css"
export default function TrackDisplay({ song }) {
    return (
        <div className = "control-pad">
            <div className = "album-cover-con">
                <img src = {song.albumUrl} style = {{height: "300px", width: "300px"}}/>
            </div>
            <div style = {{padding: "50px"}}>
                <div>{song.title}</div>
                <div>{song.artist}</div>
            </div>
        </div>   
    )
}