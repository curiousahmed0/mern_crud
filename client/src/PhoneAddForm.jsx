import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";

const PhoneAddForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });
  const [validated, setValidated] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }

    console.log(formData);
    try {
      const response = await axios.post("http://localhost:3000/addPhone", {
        name: formData.name,
        phone: formData.phone,
      });
      if (response.data.status === 201) {
        console.log("success", response.data);
      } else {
        console.log(response.data);
      }
    } catch (error) {
      console.log(error);
    }
    setFormData({
      name: "",
      phone: "",
    });
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <Form.Control.Feedback type="invalid">
          Name field cannot be empty
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control
          type="Number"
          placeholder="Phone Number"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <Form.Control.Feedback type="invalid">
          Phone field cannot be empty
        </Form.Control.Feedback>
      </Form.Group>

      <Button variant="primary" type="submit">
        Save
      </Button>
    </Form>
  );
};

export default PhoneAddForm;
