import React, { useState } from "react";
import { Container, Row, Col, Accordion, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./components/FAQ.scss"
import {
    faCreditCard,
    faWallet,
    faShieldAlt,
    faUserTie

} from '@fortawesome/free-solid-svg-icons'


const Faq = () => {

    const options = [
        { icon: faCreditCard, text: 'Cartão de crédito' },
        { icon: faWallet, text: 'Conta e abertura' },
        { icon: faShieldAlt, text: 'Token digital' },
        { icon: faUserTie, text: 'Produtos e serviços' }

    ];

    const [index, setIndex] = useState(0);

    const handleClick = (key) => {
        setIndex(key);
    };

    return (
        <section className="text-light">
            <Container className="py-5 faq">
                <Row className="d-lg-none d-flex align-items-center justify-items-center">
                    <h2 className="faq-title-mobile d-lg-none text-light mb-5">Dúvidas frequentes</h2>
                </Row>
                <Row className="d-flex align-items-center justify-items-center">
                    <Col className="d-lg-none mb-5" xs={12}>
                        <Row>
                            {options.map(({ icon }, key) => (
                                <Col className='d-flex justify-content-center' key={key}>
                                    <FontAwesomeIcon
                                        icon={icon}
                                        size='2x'
                                        color={key === index ? '#FFF' : '#BBB'}
                                        onClick={() => handleClick(key)}
                                        cursor='pointer'
                                    />
                                </Col>
                            ))}
                        </Row>
                        <Row className='justify-content-center mt-5'>
                            <p className='lead'>{options[index].text}</p>
                        </Row>
                    </Col>
                </Row>


                <h2 className="faq-title-desk d-none d-lg-block text-light">Dúvidas frequentes</h2>
                <Col className="d-none d-lg-block mb-5">
                    <Row>
                        {options.map(({ icon }, key) => (
                            <Col className='d-flex justify-content-center' key={key}>
                                <FontAwesomeIcon
                                    icon={icon}
                                    size='3x'
                                    color={key === index ? '#FFF' : '#BBB'}
                                    onClick={() => handleClick(key)}
                                    cursor='pointer'
                                />
                            </Col>
                        ))}
                    </Row>
                    <Row className='justify-content-center mt-5'>
                        <p className='lead'>{options[index].text}</p>
                    </Row>
                </Col>






                <Col className="py-2 text-light">
                    <Accordion className="faq-color" defaultActiveKey='0' activeKey={`${index}`}>

                        <Accordion.Item className="faq_accordion" eventKey="0">
                            <Accordion.Header>Lorem</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                est laborum.
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item className="faq_accordion" eventKey="1">
                            <Accordion.Header>Ipsum</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                est laborum.
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item className="faq_accordion" eventKey="2">
                            <Accordion.Header>Dolor</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                est laborum.
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item className="faq_accordion" eventKey="3">
                            <Accordion.Header> Amet</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                est laborum.
                            </Accordion.Body>
                        </Accordion.Item>

                    </Accordion>
                </Col>
            </Container>
        </section >

    )
};

export default Faq;
