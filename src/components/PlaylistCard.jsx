import React, { useState, useEffect } from 'react';
import { fetchSpotify } from '../spotifyService';

const PlaylistCard = ({ setSelectedTrack, setTrackList }) => {
    const [playlists, setPlaylists] = useState([]);
    const [playlistTracks, setPlaylistTracks] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetchSpotify('/me/playlists')
            .then((data) => {
                setPlaylists(data.items);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching playlists:', error);
                setLoading(false);
            });
    }, []);

    const fetchPlaylistTracks = async (playlistId) => {
        try {
            const data = await fetchSpotify(`/playlists/${playlistId}/tracks?limit=5`);
            return data.items.map(item => item.track);
        } catch (error) {
            console.error('Error fetching playlist tracks:', error);
            return [];
        }
    };

    const handlePlaylistClick = async (playlistId) => {
        if (!playlistTracks[playlistId]) {
            const tracks = await fetchPlaylistTracks(playlistId);
            setPlaylistTracks(prev => ({ ...prev, [playlistId]: tracks }));
            setTrackList(tracks);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="dark play-list" id='playlist'>
            <section>
                <div className="play-list-grid">
                    <h1>
                        <span className="pink">🎧 Your Personalized</span> Playlist
                    </h1>
                    <p>Enjoy a handpicked selection of your favorite songs, curated just for you! 😎</p>
                </div>
                <div className="song-container">
                    {playlists.map((playlist) => (
                        <div key={playlist.id} className="card">
                            <img src={playlist.images[0]?.url} alt="biz-card" className="album-cover" />
                            <h4>{playlist.name}</h4>
                            <p>{playlist.owner.display_name}</p>
                            <button onClick={() => handlePlaylistClick(playlist.id)}>Load Tracks</button>
                            {playlistTracks[playlist.id]?.map((track) => (
                                <div className='track-dropdown' key={track.id} onClick={() => setSelectedTrack(track)}>
                                    {track.name} - {track.artists[0].name}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default PlaylistCard;
