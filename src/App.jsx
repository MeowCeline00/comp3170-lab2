import React from 'react';
import { artists } from './best-selling-music-artists';

function App() {
  return (
    <div className="app">
      <header>
        <h1>Best-selling music artists</h1>
      </header>
      <div>
        {artists.map(artist => (
          <ArtistInfo key={artist.name} artist={artist} />
        ))}
      </div>
    </div>
  );
}

function ArtistInfo({ artist }) {
  return (
    <div className="artist-card">
      <div className="artist-image">
        <img src={artist.photo_url} alt={artist.name} />
      </div>
      <div className="artist-details">
        <h2>{artist.name}</h2>
        <p>Country: {artist.country}</p>
        <p>Years active: {artist.years_active}</p>
      </div>
    </div>
  );
}

export default App;
