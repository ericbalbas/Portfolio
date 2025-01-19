import React, { useState, forwardRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ConnectImg from "../asset/connectimg.png";
import Swal from "sweetalert2";

export const Contact = forwardRef((props, ref) => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");

  const validateFormDetails = (details) => {
    for (let key in details) {
      if (!details[key]) {
        return false;
      }
    }
    return true;
  };

  const onFormUpdate = (caterogry, value) => {
    setFormDetails({
      ...formDetails,
      [caterogry]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validator = validateFormDetails(formDetails);
    if(!validator){
      Swal.fire({
        // position: "top-end",
        icon: "error",
        title: "Please fill all fields!",
        showConfirmButton: true,
        timer: 1500,
      });

      return false;
    }

    setButtonText("Sending...");
    try {
      let response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json;charset=utf-8" },
        body: JSON.stringify(formDetails),
      });

      if (!response.ok) {
        Swal.fire({
          title: "The Internet?",
          text: "That thing is still around?",
          icon: "question",
          timer: 1500,
        });
        throw new Error("Network response was not ok");
      }

      let { code } = await response.json();
      setFormDetails(formInitialDetails);

      if (code === 200) {
        Swal.fire({
          // position: "top-end",
          icon: "success",
          title: "Message sent successfully!",
          showConfirmButton: true,
          timer: 1500,
        });
      } else {
        Swal.fire({
          // position: "top-end",
          icon: "error",
          title: "Something went wrong, Please try again later!",
          showConfirmButton: true,
          timer: 1500,
        });
      }
    } catch (error) {
      console.error("❌ Error:", error.message);
      Swal.fire({
        // position: "top-end",
        icon: "error",
        title: "Something went wrong, Please try again later!",
        showConfirmButton: true,
        timer: 1500,
      });
    }
    setButtonText("Send");
  };

  return (
    <section className="contact" id="connect" ref={ref}>
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={ConnectImg} alt="Connect Img" />
          </Col>
          <Col md={6}>
            <h2 className="text-dark">Get in touch.</h2>
            <form onSubmit={handleSubmit}>
              <Row>
                <Col sm={6} className="px-l">
                  <input
                    type="text"
                    value={formDetails.firstName}
                    placeholder="First Name"
                    onChange={(e) => onFormUpdate("firstName", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-l">
                  <input
                    type="text"
                    value={formDetails.lastName}
                    placeholder="Last Name"
                    onChange={(e) => onFormUpdate("lastName", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-l">
                  <input
                    type="email"
                    value={formDetails.email}
                    placeholder="Email"
                    onChange={(e) => onFormUpdate("email", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-l">
                  <input
                    type="number"
                    value={formDetails.phone}
                    placeholder="Phone #"
                    onChange={(e) => onFormUpdate("phone", e.target.value)}
                  />
                </Col>
                {/* <hr/> */}
                <Col>
                  <textarea
                    rows={6}
                    value={formDetails.message}
                    placeholder="Type your message..."
                    onChange={(e) => onFormUpdate("message", e.target.value)}
                  />
                  <button type="submit" style={{ width: "100%" }}>
                    <span>{buttonText}</span>
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
});
