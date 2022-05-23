import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import "../components/Footer.scss"
import logo from "../assets/footer-logo.png"
import applestore from "../assets/applestore.png"
import googleplay from "../assets/googleplay.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

const Footer = () => (
    <footer className="footer">
        <Container>
            <Row className="text-center py-5">
                <Col xs={12} lg={6} className="text-align-left">
                    <Image className="" src={logo} />
                </Col>

                <Col className="d-none d-lg-inline-block">
                    <Image src={applestore} className="mx-2" />
                    <Image src={googleplay} className="mx-2" />
                </Col>

                <Col className="d-lg-none py-5">
                    <Image src={applestore} className="mx-2" />
                    <Image src={googleplay} className="mx-2" />
                </Col>

                <Col xs={12} lg={2} className="d-flex align-Items-center justify-content-center mt-2">
                    <FontAwesomeIcon icon={faFacebookSquare} color='#7c7c7c' size="2x" className="mx-2" />
                    <FontAwesomeIcon icon={faTwitter} color='#7c7c7c' size="2x" className="mx-2" />
                    <FontAwesomeIcon icon={faYoutube} color='#7c7c7c' size="2x" className="mx-2" />

                </Col>

            </Row>
        </Container>
    </footer>

);

export default Footer;