import shuffle from "../assets/shuffle.png";
import prev from "../assets/prev.png";
import play from "../assets/play.png";
import next from "../assets/next.png";
import repeat from "../assets/repeat.png";
import { useSelector } from "react-redux";
import musicPlaceholder from "../assets/musicPlaceholder.jpg";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router";
const MyPlayer = () => {
  const playingSong = useSelector((state) => state.selectedSong.content);
  return (
    <>
      <Container fluid className="fixed-bottom bg-container pt-1">
        <Row className="h-100">
          <Col lg={10} className="offset-lg-2">
            <Row className="h-100 justify-content-start align-items-center">
              <Col xs={4} className="d-flex align-items-center justify-content-center gap-5">
                <img
                  src={playingSong ? playingSong.album.cover : musicPlaceholder}
                  alt={playingSong && playingSong.title}
                  height={"50px"}
                />
                <div>
                  {playingSong && <p className="text-white">{playingSong.title}</p>}
                  {playingSong && <p className="text-white">{playingSong.artist.name}</p>}
                </div>
              </Col>
              <Col xs={6} md={4} className="playerControls">
                <div className="d-flex">
                  <Link>
                    <img src={shuffle} alt="shuffle" />
                  </Link>
                  <Link>
                    <img src={prev} alt="prev" />
                  </Link>
                  <Link>
                    <img src={play} alt="play" />
                  </Link>
                  <Link>
                    <img src={next} alt="next" />
                  </Link>
                  <Link>
                    <img src={repeat} alt="repeat" />
                  </Link>
                </div>
                <div className="progress mt-3">
                  <div role="progressbar"></div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default MyPlayer;
