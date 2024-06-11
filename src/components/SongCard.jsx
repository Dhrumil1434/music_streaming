
import './SongCard.css'
function SongCard({ image, songName, artist, description, preview_url}) {
  
 

  return (
    <div className="card">
      <img src={image} className="card-img-top" alt="Album" />
      <div className="card-body">
        <h5 className="card-title">{songName}</h5>
        <p className="card-text">Artist: {artist}</p>
        <p className="card-text">{description}</p>
        <div className="audio-player">
            <audio controls>
              <source src={preview_url} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
        
        </div>
      </div>
    </div>
  );
}

export default SongCard;
