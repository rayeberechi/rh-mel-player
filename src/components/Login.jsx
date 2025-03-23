import React from 'react';

const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const redirectUri = import.meta.env.VITE_SPOTIFY_REDIRECT_URI;
const scopes = 'user-read-private user-read-email user-top-read playlist-read-private playlist-read-collaborative'; // Add scopes

const generateSpotifyAuthUrl = () => {
    const authUrl = new URL('https://accounts.spotify.com/authorize');
    authUrl.searchParams.append('client_id', clientId);
    authUrl.searchParams.append('response_type', 'code');
    authUrl.searchParams.append('redirect_uri', redirectUri);
    authUrl.searchParams.append('scope', scopes);
    return authUrl.toString();
};

const Login = () => {
    const handleLogin = () => {
        window.location.href = generateSpotifyAuthUrl();
    };

    return (
        <div className='spotify-btn'>
            <button onClick={handleLogin}>Login with Spotify</button>
        </div>
    );
};

export default Login;