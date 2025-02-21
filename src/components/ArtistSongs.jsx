import { useEffect, useState } from "react";
import { Col, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addToFavourites, removeFromFavourites, selectSong } from "../redux/actions";
import { Heart, HeartFill } from "react-bootstrap-icons";

const ArtistSongs = (props) => {
  const favouriteSongs = useSelector((state) => state.favourites.content);
  const dispatch = useDispatch();
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
  }, [props]);
  return (
    <>
      {artist ? (
        artist.slice(0, 4).map((song) => (
          <Col className="text-center" key={song.id}>
            <img className="img-fluid" src={song.album.cover_medium} alt="track" />
            <div className="d-flex align-items-center">
              <Col xs={10}>
                <p onClick={() => dispatch(selectSong(song))}>
                  Track: {song.title}
                  <br />
                  Artist: {song.artist.name}
                </p>
              </Col>
              <Col xs={2}>
                <span
                  onClick={() => {
                    if (!favouriteSongs.find((favouriteSong) => favouriteSong.id === song.id)) {
                      dispatch(addToFavourites(song));
                    } else {
                      dispatch(removeFromFavourites(song));
                    }
                  }}
                >
                  {favouriteSongs.find((favouriteSong) => favouriteSong.id === song.id) ? <HeartFill /> : <Heart />}
                </span>
              </Col>
            </div>
          </Col>
        ))
      ) : (
        <Spinner animation="border" variant="primary" />
      )}
    </>
  );
};
export default ArtistSongs;
