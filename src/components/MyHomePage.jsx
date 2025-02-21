import { Col, Row } from "react-bootstrap";
import MySidebar from "./MySidebar";
import MyMainsSection from "./MyMainSection";
import MyPlayer from "./MyPlayer";

const MyHomePage = () => {
  return (
    <>
      <Row>
        <Col xs={2}>
          <MySidebar />
        </Col>
        <Col>
          <MyMainsSection />
          <MyPlayer />
        </Col>
      </Row>
    </>
  );
};
export default MyHomePage;
