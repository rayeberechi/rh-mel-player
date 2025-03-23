// spotifyService.js
const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const clientSecret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;
const redirectUri = import.meta.env.VITE_SPOTIFY_REDIRECT_URI;
const apiUrl = import.meta.env.VITE_SPOTIFY_API_URL;
const accountsUrl = 'https://accounts.spotify.com/api/token';

const getToken = async (code) => {
    const params = new URLSearchParams();
    params.append('grant_type', 'authorization_code');
    params.append('code', code);
    params.append('redirect_uri', redirectUri);

    const basicAuth = btoa(`${clientId}:${clientSecret}`);
    console.log("basicAuth:", basicAuth);

    const response = await fetch(accountsUrl, {
        method: 'POST',
        headers: {
            'Authorization': `Basic ${basicAuth}`,
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: params,
    });

    if (!response.ok) {
        console.error('getToken failed:', response.status, await response.text());
        throw new Error(`Failed to get token: ${response.status}`);
    }

    return response.json();
};

const getAccessToken = () => {
    return localStorage.getItem('access_token');
};

const setAccessToken = (token) => {
    localStorage.setItem('access_token', token);
};

const setRefreshToken = (token) => {
    localStorage.setItem('refresh_token', token);
};

const getRefreshToken = () => {
    return localStorage.getItem('refresh_token');
};

const refreshToken = async () => {
    const refreshTokenValue = getRefreshToken();
    if (!refreshTokenValue) {
        throw new Error('No refresh token available');
    }
    const params = new URLSearchParams();
    params.append('grant_type', 'refresh_token');
    params.append('refresh_token', refreshTokenValue);

    const basicAuth = btoa(`${clientId}:${clientSecret}`);

    const response = await fetch(accountsUrl, {
        method: 'POST',
        headers: {
            'Authorization': `Basic ${basicAuth}`,
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: params,
    });

    if (!response.ok) {
        console.error('refreshToken failed:', response.status, await response.text());
        throw new Error(`Failed to refresh token: ${response.status}`);
    }

    const data = await response.json();
    setAccessToken(data.access_token);
    if (data.refresh_token) {
        setRefreshToken(data.refresh_token);
    }
    return data.access_token;
};

const fetchSpotify = async (endpoint, options = {}) => {
    const accessToken = getAccessToken();
    if (!accessToken) {
        await refreshToken();
    }
    const updatedAccessToken = getAccessToken();

    const response = await fetch(`${apiUrl}${endpoint}`, { // corrected line.
        headers: {
            'Authorization': `Bearer ${updatedAccessToken}`,
            'Content-Type': 'application/json',
            ...options.headers,
        },
        ...options,
    });

    if (!response.ok) {
        console.error('fetchSpotify failed:', response.status, await response.text());

        if (response.status === 401) {
            await refreshToken();
            return fetchSpotify(endpoint, options);
        }
        throw new Error(`Spotify API error: ${response.status}`);
    }

    return response.json();
};

export { getToken, fetchSpotify, getAccessToken, setAccessToken, setRefreshToken, getRefreshToken };