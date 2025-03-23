import React, { useState, useEffect, useRef } from 'react';

const MusicPlayer = ({ selectedTrack, trackList, currentTrackIndex, onTrackChange }) => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isShuffle, setIsShuffle] = useState(false);
    const [isRepeat, setIsRepeat] = useState(false);
    const [shuffledTrackList, setShuffledTrackList] = useState([]);
    const [shuffledIndex, setShuffledIndex] = useState(0);
    const [volume, setVolume] = useState(1);
    const [audioError, setAudioError] = useState(null); // Track audio errors

    useEffect(() => {
        console.log("Selected Track:", selectedTrack);

        if (selectedTrack && selectedTrack.preview_url && audioRef.current) {
            audioRef.current.src = selectedTrack.preview_url;
            audioRef.current.load();

            audioRef.current.onplay = () => console.log("Audio started playing");
            audioRef.current.onpause = () => console.log("Audio paused");
            audioRef.current.onerror = (error) => {
                console.error("Audio playback error:", error);
                setAudioError("Playback error. Skipping track.");
                setIsPlaying(false);
                setCurrentTime(0);
                setTimeout(() => handleNext(), 2000); 
            };

            if (isPlaying) {
                audioRef.current.play().catch(error => {
                    console.error("Playback error:", error);
                    setAudioError("Playback error. Skipping track.");
                    setIsPlaying(false);
                    setCurrentTime(0);
                    setTimeout(() => handleNext(), 2000);
                });
            }
        } else if (selectedTrack && !selectedTrack.preview_url) {
            console.log("Preview URL not available.");
            // setAudioError("Preview URL not available.");
            setIsPlaying(false);
            setCurrentTime(0);
            setTimeout(() => {
                if (typeof onTrackChange === 'function') {
                            onTrackChange(trackList[currentTrackIndex + 1]);
                        }
                    }, 2000);
        }
    }, [selectedTrack, isPlaying]);

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play().catch(error => {
                console.error("Playback error:", error);
                setAudioError("Playback error. Skipping track.");
                setIsPlaying(false);
                setCurrentTime(0);
                setTimeout(() => handleNext(), 2000); // Skip after 2 seconds
            });
        }
        setIsPlaying(!isPlaying);
    }

    const handleTimeUpdate = () => {
        setCurrentTime(audioRef.current.currentTime);
        setDuration(audioRef.current.duration);
    };

    const handleProgressChange = (e) => {
        const newTime = (e.target.value * audioRef.current.duration) / 100;
        audioRef.current.currentTime = newTime;
    };

    const formatTime = (time) => {
        if (isNaN(time)) return '00:00';
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    const handleShuffle = () => {
        const newShuffleState = !isShuffle;
        setIsShuffle(newShuffleState);
        if (newShuffleState && trackList) {
            const shuffled = [...trackList].sort(() => Math.random() - 0.5);
            setShuffledTrackList(shuffled);
            setShuffledIndex(0);
            onTrackChange(shuffled[0]);
        }
    };

    const handlePrevious = () => {
        if (trackList) {
            let newIndex;
            if (isShuffle) {
                newIndex = shuffledIndex > 0 ? shuffledIndex - 1 : shuffledTrackList.length - 1;
                setShuffledIndex(newIndex);
                onTrackChange(shuffledTrackList[newIndex]);
            } else {
                newIndex = currentTrackIndex > 0 ? currentTrackIndex - 1 : trackList.length - 1;
                onTrackChange(trackList[newIndex]);
            }
        }
    };

    const handleNext = () => {
        if (trackList) {
            let newIndex;
            if (isShuffle) {
                newIndex = shuffledIndex < shuffledTrackList.length - 1 ? shuffledIndex + 1 : 0;
                setShuffledIndex(newIndex);
                onTrackChange(shuffledTrackList[newIndex]);
            } else {
                newIndex = currentTrackIndex < trackList.length - 1 ? currentTrackIndex + 1 : 0;
                if (typeof onTrackChange === 'function') {
                    onTrackChange(trackList[newIndex]);
                }
            }
        }
    };

    const handleRepeat = () => {
        setIsRepeat(!isRepeat);
        audioRef.current.loop = !isRepeat;
    };

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = volume;
        }
    }, [volume]);

    const handleVolumeChange = (e) => {
        const newVolume = parseFloat(e.target.value);
        setVolume(newVolume);
    };

    return (
        <div className="music-player">
            <div className="player">
                <h2><span className="pink">Ray Mel</span> Player </h2>
            </div>

            <div className="audio-player">
                <div className="music-info">
                    <div className="song-img">
                        <img src={selectedTrack ? selectedTrack.album?.images[2]?.url : "/music-note.png"} alt="Music Note" className="song-pic" />
                    </div>
                    <div className="music-details">
                        <p className="song-title">{selectedTrack ? `${selectedTrack.name} - ${selectedTrack.artists[0]?.name}` : "No song selected"}</p>
                        {audioError && <p className="error-message">{audioError}</p>}
                    </div>
                </div>
                <div className="progress-bar">
                    <span className="current-time">{formatTime(currentTime)}</span>
                        <input
                            type="range"
                            min="0"
                            max="100"
                            value={isNaN(duration) || duration === 0 ? 0 : (currentTime / duration) * 100}
                            onChange={handleProgressChange}
                            className="progress"
                        />
                    <span className="duration">{formatTime(duration)}</span>
                </div>
                <div className="controls">
                    <button className="shuffle" onClick={handleShuffle}>
                        <i className={`fas fa-shuffle ${isShuffle ? 'active' : ''}`}></i>
                    </button>
                    <button className="previous" onClick={handlePrevious}>
                        <i className="fas fa-step-backward"></i>
                    </button>
                    <button className="play-pause" onClick={togglePlay}>
                        <i className={isPlaying ? "fas fa-pause" : "fas fa-play"}></i>
                    </button>
                    <button className="next" onClick={handleNext}>
                        <i className="fas fa-step-forward"></i>
                    </button>
                    <button className="repeat" onClick={handleRepeat}>
                        <i className={`fas fa-repeat ${isRepeat ? 'active' : ''}`}></i>
                    </button>

                    {volume === 0 ? <i className="fa-solid fa-volume-off"></i> : <i className="fa-solid fa-volume-high"></i>}

                    <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.01"
                        value={volume}
                        onChange={handleVolumeChange}
                        className="volume-slider"
                    />
                </div>
                <audio
                    ref={audioRef}
                    onTimeUpdate={handleTimeUpdate}
                    onLoadedMetadata={handleTimeUpdate}
                    onEnded={() => {
                        if (isRepeat) {
                            audioRef.current.play().catch(error => console.error("Playback error:", error));
                        } else {
                            setIsPlaying(false);
                            setCurrentTime(0);
                            handleNext()
                        }
                    }}
                />
            </div>
        </div>
    );
};

export default MusicPlayer;