import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import WeeklyTopCard from './components/WeeklyTopCard';
import PlaylistCard from './components/PlaylistCard';
import MusicList from './pages/MusicList';
import JoinHere from './components/JoinHere';
import MusicPlayer from './pages/MusicPlayer';
import Callback from './Callback';
import Footer from './components/Footer';
import './styles.css';

function App() {
    const [selectedTrack, setSelectedTrack] = useState(null);
    const [trackList, setTrackList] = useState([]);
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

    // Filter trackList when it is initially set.
    const handleSetTrackList = (newTrackList) => {
        setTrackList(newTrackList.filter(track => track.preview_url));
    }

    return (
        <div className="body">
            <Router>
                <Login />
                <header>
                    <NavBar setSelectedTrack={setSelectedTrack} />
                    <Hero />
                </header>
                <Routes>
                    <Route path="/" element={<JoinHere />} />
                    <Route path="/weekly" element={<WeeklyTopCard setSelectedTrack={setSelectedTrack} setTrackList={handleSetTrackList} />} />
                    <Route path="/playlist" element={<PlaylistCard setSelectedTrack={setSelectedTrack} setTrackList={handleSetTrackList} />} />
                    <Route path="/musiclist" element={<MusicList setSelectedTrack={setSelectedTrack} setTrackList={handleSetTrackList} />} />
                    <Route path="/callback" element={<Callback />} />
                </Routes>

                <MusicPlayer
                    selectedTrack={selectedTrack}
                    trackList={trackList}
                    currentTrackIndex={currentTrackIndex}
                    setCurrentTrackIndex={setCurrentTrackIndex}
                />

                <footer>
                    <Footer />
                </footer>
            </Router>
        </div>
    );
}

export default App;