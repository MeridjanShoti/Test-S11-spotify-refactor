import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";

const ArtistSongs = (props) => {
  const [artist, setArtist] = useState(null);
  const fillMusicSection = async (artistName) => {
    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + artistName);
      if (response.ok) {
        let { data } = await response.json();
        setArtist(data);
      } else {
        throw new Error("Error in fetching songs");
      }
    } catch (err) {
      console.log("error", err);
    }
  };
  useEffect(() => {
    fillMusicSection(props.artistName);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {artist ? (
        artist.slice(0, 4).map((song) => (
          <div className="col text-center" key={song.id}>
            <img className="img-fluid" src={song.album.cover_medium} alt="track" />
            <p>
              Track: {song.title}
              <br />
              Artist: {song.artist.name}
            </p>
          </div>
        ))
      ) : (
        <Spinner animation="border" variant="primary" />
      )}
    </>
  );
};
export default ArtistSongs;
