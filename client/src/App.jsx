import PhoneTable from "./PhoneTable";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import PhoneModal from "./PhoneModal";
import { useState } from "react";

const App = () => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center w-100 full-height flex-column "
    >
      <PhoneModal show={modalShow} onHide={() => setModalShow(false)} />
      <Row className="w-100 mb-3">
        <Col md={6}></Col>
        <Col
          md={6}
          className="d-flex justify-content-center align-items-center"
        >
          <Button
            variant="success"
            size="lg"
            onClick={() => setModalShow(true)}
          >
            Add
          </Button>
        </Col>
      </Row>
      <Container>
        <PhoneTable />
      </Container>
    </Container>
  );
};

export default App;
