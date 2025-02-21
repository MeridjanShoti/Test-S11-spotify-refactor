import { Col, Row } from "react-bootstrap";
import ArtistSongs from "./ArtistSongs";
import { useSelector } from "react-redux";
import { Link } from "react-router";

const MyMainsSection = () => {
  const searchResults = useSelector((state) => state.searchedResults.content);
  return (
    <>
      <main className="col-12 col-md-9 offset-md-3 mainPage">
        <div className="row">
          <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
            <Link to="/">TRENDING</Link>
            <Link to="/">PODCAST</Link>
            <Link to="/">MOODS AND GENRES</Link>
            <Link to="/">NEW RELEASES</Link>
            <Link to="/">DISCOVER</Link>
          </div>
        </div>
        {searchResults && (
          <Row>
            <Col xs={10}>
              <h2 className="text-white">RISULTATI RICERCA</h2>

              <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
                <ArtistSongs artistName={searchResults} />
              </div>
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
      </main>
    </>
  );
};
export default MyMainsSection;
