import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import PhoneUpdateModal from "./PhoneUpdateModal";

const PhoneTable = () => {
  const [formData, setFormData] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const fetchPhoneBook = useCallback(async () => {
    try {
      const response = await axios.get("http://localhost:3000/addPhone");
      setFormData(response.data.data.phoneBook);
    } catch (error) {
      console.error("Error fetching phone book:", error);
    }
  }, []);
  const handleDelete = useCallback(
    async (id) => {
      try {
        const response = await axios.delete(
          `http://localhost:3000/addPhone/${id}`
        );
        console.log(response.data);

        fetchPhoneBook();
      } catch (error) {
        console.error("Error deleting item:", error);
      }
    },
    [fetchPhoneBook]
  );

  useEffect(() => {
    fetchPhoneBook();
  }, [fetchPhoneBook]);

  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Phone Number</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {formData.map((fd) => (
          <tr key={fd._id}>
            <td className="bg-dark">{fd._id}</td>
            <td>{fd.name}</td>
            <td>{fd.phone}</td>
            <td className="custom-width">
              <Row>
                <Col className="d-flex justify-content-center">
                  <Button variant="danger" onClick={() => handleDelete(fd._id)}>
                    Delete
                  </Button>
                </Col>
                <Col className="d-flex justify-content-center">
                  <Button variant="warning" onClick={() => setModalShow(true)}>
                    Update
                  </Button>
                </Col>
              </Row>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default PhoneTable;
