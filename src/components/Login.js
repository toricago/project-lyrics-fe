import React from "react"

const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=10d707619ffb4c42965555b5bb95bcd2&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

export default function Login() {
  return <a href={AUTH_URL}>Login With Spotify</a>
}
