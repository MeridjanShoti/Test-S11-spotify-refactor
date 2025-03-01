import { Col, Row } from "react-bootstrap";
import ArtistSongs from "./ArtistSongs";
import { useSelector } from "react-redux";
import { Link } from "react-router";

const MyMainsSection = () => {
  const searchResults = useSelector((state) => state.searchedResults.content);
  return (
    <>
      <Col xs={12} md={9} className="offset-md-3 mainPage">
        <Row>
          <Col xs={9} lg={11} className="mainLinks d-none d-md-flex">
            <Link to="/">TRENDING</Link>
            <Link to="/">PODCAST</Link>
            <Link to="/">MOODS AND GENRES</Link>
            <Link to="/">NEW RELEASES</Link>
            <Link to="/">DISCOVER</Link>
          </Col>
        </Row>
        {searchResults && (
          <Row>
            <Col xs={10}>
              <h2 className="text-white pt-4">RISULTATI RICERCA</h2>

              <Row xs={1} sm={2} lg={3} xl={4} className="imgLinks py-3">
                <ArtistSongs artistName={searchResults} />
              </Row>
            </Col>
          </Row>
        )}
        <Row>
          <Col xs={10}>
            <div id="rock">
              <h2>Master Boot Record</h2>
              <Row xs={1} sm={2} lg={3} xl={4} className="imgLinks py-3" id="rockSection">
                <ArtistSongs artistName="master boot record" />
              </Row>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={10}>
            <div id="pop">
              <h2>Igorrr</h2>
              <Row xs={1} sm={2} lg={3} xl={4} className="imgLinks py-3" id="popSection">
                <ArtistSongs artistName="igorrr" />
              </Row>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={10}>
            <div id="hiphop">
              <h2>Leprous</h2>
              <Row xs={1} sm={2} lg={3} xl={4} className="imgLinks py-3" id="hipHopSection">
                <ArtistSongs artistName="leprous" />
              </Row>
            </div>
          </Col>
        </Row>
      </Col>
    </>
  );
};
export default MyMainsSection;
