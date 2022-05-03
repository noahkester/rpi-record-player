import React, { useEffect, useState } from "react"
import useAuth from "./useAuth"
import SpotifyWebApi from 'spotify-web-api-node'
import TrackDisplay from './TrackDisplay'
import Player from "./Player"
import "./style/App.css"
import "./style/Dashboard.css"

const spotifyApi = new SpotifyWebApi({
    clientId: "d4a9c4fe9d174e7fbb9c7e12d05bdd4b"
})


export default function Dashboard({code}) {
    const accessToken = useAuth(code)
    const [song_name, setSongName] = useState("Vienna");
    const [song, setSong] = useState({});
    
    useEffect(() => {
        if (!accessToken) return
        spotifyApi.setAccessToken(accessToken)
    }, [accessToken])

    function playSong() {
        spotifyApi.searchTracks(song_name).then(res => {
            let track = res.body.tracks.items[0];
            const largestAlbumImage = track.album.images.reduce(
                (largest, image) => {
                    if (image.height > largest.height) return image
                    return largest
            }, track.album.images[0])
            setSong({
                artist: track.artists[0].name,
                title: track.name,
                uri: track.uri,
                albumUrl: largestAlbumImage.url
            })
        })
    }
    return(
        <div className = "Dashboard">
            <div id = "dashboard-id"></div>
            <div className = "button" onClick = {() => playSong()}>Scan Card...</div>
            <img src = {require("./a-mixtape.png")} style = {{width: "80%"}}/>
            <div className = "Footer" id = "footer-id">
                <div>
                    {<TrackDisplay song = {song} key = {song.uri} />}
                </div>
                <div><Player accessToken = {accessToken} trackUri = {song?.uri}/></div>
            </div>
        </div>
    )
}