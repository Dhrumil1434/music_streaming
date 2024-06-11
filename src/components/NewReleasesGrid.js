// src/components/NewReleasesGrid.js

import React from 'react';
import './NewReleasesGrid.css';

function NewReleasesGrid({ newReleases }) {
  return (
    <div className="new-releases-grid">
      {newReleases.map((element) => (
        <div key={element.id} className="release-card">
          <img src={element.images[0].url} alt={element.name} className="release-image" />
          <div className="release-info">
            <h3 className="release-title">{element.name}</h3>
            <p className="release-artist">{element.artists.map(artist => artist.name).join(', ')}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default NewReleasesGrid;
