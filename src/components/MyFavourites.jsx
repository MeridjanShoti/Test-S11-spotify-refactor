import { Col, Row, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addToFavourites, removeFromFavourites, selectSong } from "../redux/actions";
import MyPlayer from "./MyPlayer";

const MyFavourites = () => {
  const favouriteSongs = useSelector((state) => state.favourites.content);
  const dispatch = useDispatch();
  return (
    <>
      <h1 className="text-center text-white">PREFERITI</h1>
      <Row>
        {favouriteSongs ? (
          favouriteSongs.map((song) => (
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
                    ❤
                  </span>
                </Col>
              </div>
            </Col>
          ))
        ) : (
          <Spinner animation="border" variant="primary" />
        )}
      </Row>
      <MyPlayer />
    </>
  );
};
export default MyFavourites;
