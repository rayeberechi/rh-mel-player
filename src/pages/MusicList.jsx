import React, { useState, useEffect } from 'react';
import { fetchSpotify } from '../spotifyService';

const MusicList = ({ setSelectedTrack, setTrackList }) => {
    const [musicList, setMusicList] = useState([]);

    useEffect(() => {
        fetchSpotify('/browse/new-releases?limit=50')
            .then((data) => {
                const tracks = data.albums.items.flatMap(album => album.tracks.items.map(track => ({
                    ...track,
                    album: { images: album.images }
                })));
                setMusicList(tracks);
                setTrackList(tracks);
            })
            .catch(error => console.error('Error fetching music list:', error));
    }, []);

    return (
        <div className="dark music-list">
            <div className="all-list">
                <ol>
                    {musicList.map((track) => (
                        <li key={track.id} onClick={() => setSelectedTrack(track)} style={{ cursor: 'pointer' }}>
                            <div className="list-song">
                                <img src={track.album.images[0]?.url} alt="album-cover" className="album-cover" />
                                <div className="song-details">
                                    <h6>{track.name}</h6>
                                    <p>{track.artists[0].name}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
};

export default MusicList;
