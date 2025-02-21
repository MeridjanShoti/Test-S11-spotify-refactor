import { Col, Row } from "react-bootstrap";
import { Link } from "react-router";

const MyUovoDiPasqua = () => {
  return (
    <>
      <h1 className="text-center text-white">SEI STATO BENEDETTO DAL VINCITORE DI EUROVISION 2025</h1>
      <Row className="justify-content-center">
        <Col className="d-flex flex-column">
          <iframe
            width="50%"
            className="mx-auto"
            style={{ aspectRatio: "16/9" }}
            src="https://www.youtube.com/embed/erKHlctYM8o?si=iAj7IIOTEplObKOK"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <Link to="/">
            <p className="text-center text-white fs-1">TORNA ALLA HOME</p>
          </Link>
        </Col>
      </Row>
    </>
  );
};
export default MyUovoDiPasqua;
