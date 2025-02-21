import { Col, Container, Row, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addToFavourites, removeFromFavourites, selectSong } from "../redux/actions";
import MyPlayer from "./MyPlayer";
import { Heart, HeartFill } from "react-bootstrap-icons";
import MySidebar from "./MySidebar";

const MyFavourites = () => {
  const favouriteSongs = useSelector((state) => state.favourites.content);
  const dispatch = useDispatch();
  return (
    <>
      <Row>
        <Col>
          <MySidebar />
        </Col>
        <Col xs={12} lg={10}>
          <Container className="w-75">
            <h1 className="text-center text-white">PREFERITI</h1>
            <Row className="justify-content-center">
              {favouriteSongs ? (
                favouriteSongs.map((song) => (
                  <Col xs={4} md={3} lg={2} className="text-center" key={song.id}>
                    <img className="img-fluid" src={song.album.cover_medium} alt="track" />
                    <div className="d-flex align-items-center">
                      <Col xs={10}>
                        <p className="text-white text-center" onClick={() => dispatch(selectSong(song))}>
                          Track: {song.title}
                          <br />
                          Artist: {song.artist.name}
                        </p>
                      </Col>
                      <Col xs={2}>
                        <span
                          className="text-white"
                          onClick={() => {
                            if (!favouriteSongs.find((favouriteSong) => favouriteSong.id === song.id)) {
                              dispatch(addToFavourites(song));
                            } else {
                              dispatch(removeFromFavourites(song));
                            }
                          }}
                        >
                          {favouriteSongs.find((favouriteSong) => favouriteSong.id === song.id) ? (
                            <HeartFill />
                          ) : (
                            <Heart />
                          )}
                        </span>
                      </Col>
                    </div>
                  </Col>
                ))
              ) : (
                <Spinner animation="border" variant="primary" />
              )}
            </Row>
          </Container>
          <MyPlayer />
        </Col>
      </Row>
    </>
  );
};
export default MyFavourites;
