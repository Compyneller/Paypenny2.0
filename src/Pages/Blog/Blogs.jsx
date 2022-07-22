import React from "react";
import { Button, Card, Carousel, Col, Container, Row } from "react-bootstrap";
import "./Blog.scss";

const Blogs = () => {
  return (
    <div className="mainBlogContainer bg-light">
      <div className="blogContainer">
        <div className="blogBg"></div>
        <div className="BlogCarousel">
          <Container className="mx-auto">
            <Carousel controls={false} indicators={false}>
              <Carousel.Item className="blogCarouselItem">
                <div className="row g-0 ">
                  <div
                    className="col-12 col-lg-6 text-light d-flex align-items-center justify-content-center flex-column text-center"
                    style={{
                      background: "rgba(5, 20, 34, 0.682)",
                      minHeight: "50vh",
                    }}
                  >
                    <h1>
                      How to transfer money from Canada to India without any
                      charges? - Paypenny
                    </h1>
                    <p>
                      Money transfer from Canada to India | zero charges for
                      money transfer to India
                    </p>
                  </div>
                  <div className="col-12 col-lg-6  text-light "></div>
                </div>
              </Carousel.Item>
            </Carousel>
          </Container>
        </div>
      </div>
      <Container style={{ padding: "3rem" }}>
        <h5>
          Are you someone who is tired of doing long ID verifications on
          different applications proving yourself as a human? Or who is paying
          high charges for transferring even the minimum amount of money? <br />
          <br />
          We are living in the 21st century and even if at this time sending
          money overseas is troubling humankind then we need a revolution in the
          market for the betterment of society. Don’t worry we got you covered!
          <br />
          <br />
          We present you with a platform that is absolutely free of cost,
          completes KYC in under 5minutes, and gives you the highest exchange
          rates in the industry to transfer money to your loved ones that are
          living in India with no hidden charges. <br />
          <br />
          Let us read in detail about how you can send money to India using the{" "}
          <a
            className="text-info"
            href="http://www.paypenny.io/"
            target="_blank"
          >
            Paypenny
          </a>{" "}
          application.
        </h5>
      </Container>

      <div className="myPortfolioContainer">
        <Container style={{ padding: "3rem 0" }}>
          <Row className="g-3">
            <div className="col-12 col-lg-6 d-flex justify-content-around align-items-start flex-column">
              <div
                className=" d-flex justify-content-center align-items-center flex-column"
                style={{
                  width: "70px",
                  height: "70px",
                  borderRadius: "50%",
                  background: "#233140",
                }}
              >
                <img
                  src="https://img.icons8.com/material-rounded/344/inconsistency.png"
                  height={50}
                  width={50}
                  alt=""
                  style={{ filter: "invert(1)" }}
                />
              </div>
              <h1>How to send money from overseas to India using Paypenny?</h1>
            </div>
            <div className="col-12 col-lg-6">
              <img
                src="https://images.unsplash.com/photo-1497493292307-31c376b6e479?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
                alt=""
                className="w-100"
              />
            </div>
          </Row>
          <br />
          <br />
          <p>
            Paypenny is serving thousands of customers on a daily basis. We have
            covered millions of transactions and maintained appropriateness
            since then. That’s the reason our services are making us stand out
            in the market. Following are the steps to use for sending money.
          </p>
          <br />
          <br />
          <Row className="g-3">
            <Col sm={12} md={6} lg={3}>
              <Card>
                <Card.Body>
                  <h3>1</h3>
                  <br />

                  <h3 style={{ fontWeight: "500" }}>
                    {" "}
                    Download the Paypenny App
                  </h3>

                  <p>
                    The Paypenny app is available on the Android & iOS
                    platforms. A user can download the app from the app store &
                    play store.
                  </p>
                  <div className="row g-4">
                    <div className="col-6">
                      <a
                        target="_blank"
                        href="https://apps.apple.com/in/app/paypenny/id1545140323"
                      >
                        <Button
                          variant="outline-info"
                          style={{ fontSize: "12px" }}
                        >
                          Download iOS
                        </Button>
                      </a>
                    </div>
                    <div className="col-6">
                      <a
                        target="_blank"
                        href="https://play.google.com/store/apps/details?id=com.bhanguz.Paypenny&&hl=en_IN&&gl=US"
                      >
                        <Button
                          variant="outline-info"
                          style={{ fontSize: "12px" }}
                        >
                          Download Android
                        </Button>
                      </a>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={6} lg={3}>
              <Card>
                <Card.Body>
                  <h3>2</h3>
                  <br />

                  <h3 style={{ fontWeight: "500" }}>Register yourself</h3>

                  <p>
                    After downloading the Paypenny app, signup by entering your
                    number and login into the app for{" "}
                    <a
                      className="text-info"
                      href="https://medium.com/@admin_17494/how-to-set-up-create-a-profile-in-the-paypenny-app-ebe3e1c889e"
                    >
                      creating your profile.
                    </a>
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={6} lg={3}>
              <Card>
                <Card.Body>
                  <h3>3</h3>
                  <br />

                  <h3 style={{ fontWeight: "500" }}>KYC Verification</h3>

                  <p>
                    Now after completely setting up your profile you can do your
                    KYC. The KYC section takes not more than 5 minutes. All you
                    have to do is to submit the live images of your ID & your
                    selfie.{" "}
                    <a
                      className="text-info"
                      href="https://medium.com/@admin_17494/how-to-complete-your-kyc-fa1b2ea70cf8"
                    >
                      How to do KYC in the Paypenny app?
                    </a>
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={6} lg={3}>
              <Card>
                <Card.Body>
                  <h3>4</h3>
                  <br />

                  <h3 style={{ fontWeight: "500" }}>Send Money to home</h3>

                  <p>
                    Congrats! After the successful verification, you have become
                    a Paypenny eligible customer. Now you can{" "}
                    <a
                      className="text-info"
                      href="https://medium.com/@admin_17494/how-to-add-cad-into-your-paypenny-wallet-36f4c94c2538"
                    >
                      add money
                    </a>{" "}
                    to your wallet and{" "}
                    <a
                      className="text-info"
                      href="https://medium.com/@admin_17494/how-to-send-inr-d-from-paypenny-app-5cd1b17266"
                    >
                      send it to your family
                    </a>
                    .
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <br />
          <br />
          <p>
            That’s all you have to do to send money from abroad to India easily.
            Download the Paypenny app now.{" "}
          </p>
        </Container>
      </div>
      <Container style={{ padding: "3rem 0" }}>
        <Row className="g-5">
          <Col sm={12} lg={6}>
            <img
              src="https://images.unsplash.com/photo-1558655146-364adaf1fcc9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw2MzQ2fDB8MXxzZWFyY2h8NXx8YXBwfGVufDB8fHx8MTYzNzA3ODYwNg&ixlib=rb-1.2.1&q=80&w=1080"
              className="w-100"
              alt=""
              height={600}
              style={{ objectFit: "cover" }}
            />
          </Col>
          <Col
            sm={12}
            lg={6}
            className="d-flex flex-column align-items-center justify-content-center"
          >
            <h1>
              How long does it take to transfer money from Canada to India? -
              Paypenny
            </h1>
            <p>
              Paypenny is providing exceptional services to all our customers to
              become their favorite money remittance application.{" "}
              <strong>
                It will hardly take 15 minutes to send money from Canada to
                Indian Banks with Paypenny.
              </strong>{" "}
              Following are the services of the Paypenny app that helps users to
              send money faster.
            </p>
          </Col>
        </Row>
      </Container>
      <div style={{ background: "#051422" }}>
        <Container className="text-light" style={{ padding: "3rem 0" }}>
          <Row className="g-3">
            <Col sm={12} md={6} lg={3}>
              <Card>
                <Card.Body>
                  <h3 style={{ fontWeight: "500" }}> FINTRAC Registered</h3>

                  <p>
                    The Paypenny app is registered and regulated with FINTRAC.
                    That’s the reason we are the safe & secure platform in the
                    money remittance industry.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={6} lg={3}>
              <Card>
                <Card.Body>
                  <h3 style={{ fontWeight: "500" }}> Highest Exchange Rate</h3>

                  <p>
                    Higher exchange rates in the market are guaranteed with
                    Paypenny. Believe in yourself by using our application &
                    compare it with others.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={6} lg={3}>
              <Card>
                <Card.Body>
                  <h3 style={{ fontWeight: "500" }}> Zero Transaction Fee</h3>

                  <p>
                    Send money to India without any charges by using the
                    Paypenny app services. We charge no hidden fee or additional
                    fee on your transaction.
                  </p>
                  <ul>
                    <li>
                      <strong>
                        {" "}
                        Send $10 amount to India (without paying any charges)
                      </strong>
                    </li>
                    <li>
                      <strong>
                        Send $50,000 amount to India (without paying any
                        charges)
                      </strong>
                    </li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={6} lg={3}>
              <Card>
                <Card.Body>
                  <h3 style={{ fontWeight: "500" }}>24/7 Customer Support</h3>

                  <p>
                    We are providing you services even on weekends. Paypenny is
                    available round the clock so that you can easily transfer
                    dollars to Indian banks.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <Container style={{ padding: "3rem 0" }}>
        <h1>About Paypenny</h1>
        <p>
          Paypenny is a digital money remittance service provider where you can
          easily transfer INR(D) to your family members & friends worldwide.
          Leading with millions of transactions & thousands of customers in
          Canada, we have expanded our business in the United Kingdom and the
          European Union in 2022. What makes us stand out in the market is the
          trust of our customers & remarkable services of the Paypenny that is
          accessible every second of the clock!
        </p>
        <h5>
          To learn more about Paypenny visit our{" "}
          <a className="text-info" href="http://www.paypenny.io/">
            website
          </a>{" "}
          or download the Paypenny app!
        </h5>
      </Container>
    </div>
  );
};

export default Blogs;
