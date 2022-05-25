import React from "react";
import "../components/institutional.scss"
import { Container, Col, Row, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMobileAlt,
    faMobile,
    faShieldAlt,
    faGlobe

} from '@fortawesome/free-solid-svg-icons'

const Institutional = ({ onClick }) => (
    <section>
        <Container className="institutional text-light px-5 py-5">
            <Row>
                <Col xs={12} lg={5} />
                <Col xs={12} lg={7}>
                    <h2 className="institutional-title-desk d-none d-lg-inline-block">JÁ NASCEMOS DIGITAL</h2>
                    <p className="institutional-text-desk d-none d-lg-inline-block">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis rem eius dolorem consectetur nulla voluptas accusamus dolores, delectus et repellendus quo quos ratione optio excepturi voluptate id culpa quibusdam ullam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis rem eius dolorem consectetur nulla voluptas accusamus dolores, delectus et repellendus quo quos ratione optio excepturi voluptate id culpa quibusdam ullam.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis rem eius dolorem consectetur nulla voluptas accusamus dolores, delectus et repellendus quo quos ratione optio excepturi voluptate id culpa quibusdam ullam.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis rem eius dolorem consectetur nulla voluptas accusamus dolores, delectus et repellendus quo quos ratione optio excepturi voluptate id culpa quibusdam ullam.
                    </p>

                    <h2 className="institutional-title-mobile d-lg-none d-lg-inline-block">JÁ NASCEMOS DIGITAL</h2>
                    <p className="institutional-text-mobile d-lg-none">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis rem eius dolorem consectetur nulla voluptas accusamus dolores, delectus et repellendus quo quos ratione optio excepturi voluptate id culpa quibusdam ullam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis rem eius dolorem consectetur nulla voluptas accusamus dolores, delectus et repellendus quo quos ratione optio excepturi voluptate id culpa quibusdam ullam.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis rem eius dolorem consectetur nulla voluptas accusamus dolores, delectus et repellendus quo quos ratione optio excepturi voluptate id culpa quibusdam ullam.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis rem eius dolorem consectetur nulla voluptas accusamus dolores, delectus et repellendus quo quos ratione optio excepturi voluptate id culpa quibusdam ullam.
                    </p>

                    <p className="icon-institutional d-none d-lg-block">
                        <div className="py-2">
                            <FontAwesomeIcon className="icon"
                                icon={faMobileAlt}
                                size="lg"
                                color='#fff'
                            />
                            Sem fila e sem burocracia
                        </div>

                    </p>

                    <p className="icon-institutional d-none d-lg-block">
                        <div className="py-2">
                            <FontAwesomeIcon className="icon"
                                icon={faMobile}
                                size="lg"
                                color='#fff'
                            />
                            Simples e prático
                        </div>

                    </p>

                    <p className="icon-institutional d-none d-lg-block">
                        <div className="py-2">
                            <FontAwesomeIcon className="icon"
                                icon={faShieldAlt}
                                size="lg"
                                color='#fff'
                            />
                            Abertura de conta 100% Online
                        </div>

                    </p>

                    <p className="icon-institutional d-none d-lg-block">
                        <div className="py-2">
                            <FontAwesomeIcon className="icon"
                                icon={faGlobe}
                                size="lg"
                                color='#fff'
                            />
                            Abertura de conta 100% Online
                        </div>

                    </p>


                    <p className="icon-institutional d-lg-none ">
                        <div className="py-2">
                            <FontAwesomeIcon className="icon"
                                icon={faMobileAlt}
                                size="lg"
                                color='#fff'
                            />
                            Sem fila e sem burocracia
                        </div>

                    </p>

                    <p className="icon-institutional d-lg-none ">
                        <div className="py-2">
                            <FontAwesomeIcon className="icon"
                                icon={faMobile}
                                size="lg"
                                color='#fff'
                            />
                            Simples e prático
                        </div>

                    </p>

                    <p className="icon-institutional d-lg-none ">
                        <div className="py-2">
                            <FontAwesomeIcon className="icon"
                                icon={faShieldAlt}
                                size="lg"
                                color='#fff'
                            />
                            Abertura de conta 100% Online
                        </div>

                    </p>

                    <p className="icon-institutional d-lg-none ">
                        <div className="py-2">
                            <FontAwesomeIcon className="icon"
                                icon={faGlobe}
                                size="lg"
                                color='#fff'
                            />
                            Abertura de conta 100% Online
                        </div>

                    </p>

                    <Button variant="outline-light my-5" onClick={onClick}>Abra sua conta</Button>
                </Col>
            </Row>

        </Container>

    </section>

);

export default Institutional;