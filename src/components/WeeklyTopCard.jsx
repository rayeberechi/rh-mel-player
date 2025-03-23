import React, { useState, useEffect } from 'react';
import { fetchSpotify } from '../spotifyService';

function WeeklyTopCard({ setSelectedTrack, setTrackList }) {
    const [topTracks, setTopTracks] = useState([]);

    useEffect(() => {
        fetchSpotify('/me/top/tracks?limit=10')
            .then((data) => {
                const tracks = data.items.map((item) => item.track);
                setTopTracks(tracks);
                setTrackList(tracks);
            })
            .catch((error) => console.error('Error fetching top tracks:', error));
    }, []);

    return (
        <div className='dark weekly'>
            <div className="weekly-info">
                <h2>🔥 This Week’s <span className='pink'>Hottest</span> Tracks</h2>
                <p>Stay updated with the latest trending hits. Find out what’s topping the charts! 🥳</p>
            </div>

            <div className="top-songs">
                {topTracks.length > 0 ? (
                    topTracks.map((track, index) => (
                        <div key={track.id} className="song-item" onClick={() => setSelectedTrack(track)}>
                            <img src={track.album.images[0]?.url} alt={track.name} />
                            <p>{track.name} - {track.artists[0].name}</p>
                        </div>
                    ))
                ) : (
                    <p>No tracks available</p>
                )}
            </div>
        </div>
    );
}

export default WeeklyTopCard;
