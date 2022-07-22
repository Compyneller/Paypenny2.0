import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const BlogComp = () => {
  return (
    <Container>
      <Row className="g-3">
        <Col
          sm={12}
          lg={6}
          className="d-flex flex-column justify-content-center"
        >
          <h1>
            How to transfer money from Canada to India without any charges? -
            Paypenny
          </h1>
          <p>
            Money transfer from Canada to India | zero charges for money
            transfer to India
          </p>
          <Link style={{ textDecoration: "none" }} to="/blog" target="_blank">
            Read More
          </Link>
        </Col>
        <Col sm={12} lg={6}>
          <img
            src="https://images.unsplash.com/photo-1483389127117-b6a2102724ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
            alt=""
            className="w-100"
            style={{ borderRadius: "20px" }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default BlogComp;
