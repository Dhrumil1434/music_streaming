// src/components/SearchResultsPage.js

import React from 'react';
import SongCard from './SongCard';

function SearchResultsPage({ tracks, searchText, setSearchText, getTracks }) {
  return (
    <>
      <nav className="navbar">
        <div className="container">
          <span className="navbar-brand" style={{color:'darkred'}}>Music Player</span>
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
        <h2>Search Results</h2>
        <div className='song-list'>
          {tracks.map((element) => (
            <div key={element.id} className='song-card'>
              <SongCard
                image={element.album.images[0].url}
                songName={element.name}
                artist={element.album.artists[0].name}
                description="Some demo text here"
                preview_url={element.preview_url}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default SearchResultsPage;
