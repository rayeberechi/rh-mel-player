import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchSpotify } from '../spotifyService';

const NavBar = ({ setSelectedTrack }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = async (e) => {
        e.preventDefault();
        try {
            const data = await fetchSpotify(`/search?q=${searchTerm}&type=track`);
            setSearchResults(data.tracks.items);
        } catch (error) {
            console.error('Error searching tracks:', error);
        }
    };

    const handleSearchResultClick = (track) => {
        setSelectedTrack(track);
        setSearchResults([]);
        setSearchTerm('');
    };

    return (
        <div className="dark">
            <nav className="navbar">
                <div className="service">
                    <div className="search-box">
                        <form onSubmit={handleSearch}>
                            <input
                                type="text"
                                placeholder="Search for Great Music"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <button type="submit"><i className="fa fa-search"></i></button>
                            {searchResults.length > 0 && (
                                <ul className="search-results">
                                    {searchResults.map((track) => (
                                        <li key={track.id} onClick={() => handleSearchResultClick(track)}>
                                            {track.name} - {track.artists[0].name}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </form>
                    </div>
                    <ul className="menu">
                        <div className="top-menu">
                            <li><Link to="/">Join Our Community</Link></li>
                            <li><Link to="/weekly">Weekly Chart</Link></li>
                            <li><Link to="/playlist">Playlist</Link></li>
                            <li><Link to="/musiclist">Music List</Link></li>
                        </div>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;