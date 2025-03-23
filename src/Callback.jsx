import { useEffect, useState } from 'react'; // added useState
import { useSearchParams, useNavigate } from 'react-router-dom';
import { getToken, setAccessToken, setRefreshToken } from './spotifyService';

function Callback() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const [tokenProcessed, setTokenProcessed] = useState(false); // added state

    useEffect(() => {
        const code = searchParams.get('code');
        console.log('Callback: Authorization code:', code);
        if (code && !tokenProcessed) { // added condition
            getToken(code)
                .then((data) => {
                    console.log('Callback: Tokens received:', data);
                    setAccessToken(data.access_token);
                    setRefreshToken(data.refresh_token);
                    navigate('/');
                    setTokenProcessed(true); // set state to true
                })
                .catch((error) => {
                    console.error('Callback: Error during token exchange:', error);
                });
        }
    }, [searchParams, navigate, tokenProcessed]); // added tokenProcessed to dependency array

    return <div>Authenticating...</div>;
}

export default Callback;