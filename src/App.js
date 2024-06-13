// src/App.js

import { useState, useEffect } from 'react';
import './App.css';
import SongCard from './components/SongCard';
import NewReleasesGrid from './components/NewReleasesGrid';

function App() {
  const [tracks, setTracks] = useState([]);
  const [newReleases, setNewReleases] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [showNewReleases, setShowNewReleases] = useState(true);

  useEffect(() => {
    
    const fetchNewReleases = async () => {
      try {
        const response = await fetch('https://v1.nocodeapi.com/dmeeel/spotify/jIgdIWYOyIMDExyl/browse/new?country=IN');
        const data = await response.json();

        setNewReleases(data.albums.items);
      } catch (error) {
        console.error('Error fetching new releases:', error);
      }
    };

    fetchNewReleases();
  }, []);

  const getTracks = async (event) => {
    event.preventDefault();
    if (searchText.trim() === '') return;
    try {
      const response = await fetch(`https://v1.nocodeapi.com/dmeeel/spotify/jIgdIWYOyIMDExyl/search?q=${searchText}&type=track`);
      const data = await response.json();

     
      setTracks(data.tracks.items);
      setShowNewReleases(false); // Hide new releases when search is performed
    } catch (error) {
      console.error('Error fetching tracks:', error);
    }
  };

  return (
    <>
      <nav className="navbar">
        <div className="container">
          <span className="navbar-brand">Music Player</span>
          <form className="search-form" onSubmit={getTracks}>
            <input
              className="search-input"
              type="search"
              placeholder="Search for a song"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button className="search-button" type="submit">Search</button>
          </form>
        </div>
      </nav>
      <div className='container'>
        {showNewReleases ? (
          <>
            <h2 className="title">New Releases</h2>
            <NewReleasesGrid newReleases={newReleases} />
          </>
        ) : (
          <>
            <h2 className="title">Search Results</h2>
            <div className='song-list'>
              {tracks.map((element) => (
                <div key={element.id} className='song-card'>
                  <SongCard
                    image={element.album.images[0].url}
                    songName={element.name}
                    artist={element.album.artists[0].name}
                    description={element.album.release_date}
                    preview_url={element.preview_url}
                  />
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
