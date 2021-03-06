import React from "react";
import { Container, Row, Col, Button, Tab, Tabs, Form, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCircle } from "@fortawesome/free-solid-svg-icons";


const Payments = () => (

    <Container className="dashboard py-5">
        <Row>
            <Col xs={12} lg={3}>
                <Row>
                    <Col xs={4}>
                        <span className="fa-layers fa-fw mt-4">
                            <FontAwesomeIcon className="mx-1" icon={faCircle} size='5x' color="#f8f9fa" />
                            <FontAwesomeIcon className="mx-4" icon={faUser} size='3x' color="#7c7d7d" />
                        </span>
                    </Col>
                    <Col className="px-1" xs={8}>
                        <h4 class>Daniel Bloch</h4>
                        <p className='text-muted'>ag: 1234 c/c: 4321</p>
                    </Col>
                </Row>


                <div className="d-grid gap-2">
                    <Link to="/dashboard">
                        <Button className="mt-4 dashboard-button text-start" variant="link" size="lg" >
                            Minha conta
                        </Button>
                    </Link>

                    <Link to="/dashboard/payments">
                        <Button className="dashboard-button text-start" variant="link" size="lg" >
                            Pagamentos
                        </Button>
                    </Link>

                    <Link to="/dashboard/history">
                        <Button className="dashboard-button text-start" variant="link" size="lg" >
                            Extrato
                        </Button>
                    </Link>
                </div>

            </Col>

            <Col xs={12} lg={8} className="mt-lg-5 pt-lg-3">
                <Row>
                    <h3 className="my-4 py-4 mx-2"><strong>Pagamentos</strong></h3>
                </Row>
                <Tabs defaultActiveKey="latest">
                    <Tab className="" eventKey='boleto' title="Boleto">
                        <Form className="mt-4">
                            <Form.Group controlId="formBarCode" className="mb-3">
                                <Form.Label>C??digo de barras</Form.Label>
                                <Form.Control type="number" placeholder="Insira o c??digo de barras" />
                            </Form.Group>
                            <Form.Group controlId='formPaymentType' >

                                <Form.Label className="mt-3">Forma de Pagamamento</Form.Label>
                                <div className="d-flex mt-2">
                                    <Form.Check
                                        type="radio"
                                        id="debit"
                                        label="D??bito em Conta Corrente"
                                        name="paymentType"
                                    />
                                    <Form.Check
                                        className="mx-3"
                                        type="radio"
                                        id="credit"
                                        label="Cart??o de Cr??dito"
                                        name="paymentType"

                                    />
                                </div>
                            </Form.Group>
                            <Button className="mt-5" variant="success">Continuar</Button>
                        </Form>
                    </Tab>
                    <Tab eventKey='transfer' title="Transfer??ncia">

                        <Col xs={6} lg={12} className="mt-3">
                            <Row>
                                <Col className="mt-2">
                                    <Form.Group controlId="formBasicBank">
                                        <Form.Label>Banco</Form.Label>
                                        <Form.Control as="select">
                                            <option value="1">- Selecione -</option>
                                            <option value="1">Ita??</option>
                                            <option value="1">Bradesco</option>
                                            <option value="1">Banco do Brasil</option>
                                            <option value="1">Santander</option>
                                            <option value="1">Outros</option>
                                        </Form.Control>
                                    </Form.Group>
                                </Col>
                                <Col className="mt-2" >
                                    <Form.Group controlId="formBarAgencia" className="mb-3">
                                        <Form.Label>Ag??ncia</Form.Label>
                                        <Form.Control type="number" />
                                    </Form.Group>

                                </Col>
                                <Col className="" >
                                    <Form.Group controlId="formBarCode" className="mb-3 mt-2">
                                        <Form.Label>Conta Corrente</Form.Label>
                                        <Form.Control type="number" />
                                    </Form.Group>

                                </Col>
                            </Row>
                        </Col>

                        <Col xs={11} lg={15} className="mt-2">
                            <Row>
                                <Col>
                                    <Form.Group controlId="formBarTrans" className="mb-lg-3 mx-lg-5 d-none d-lg-inline">
                                        <Form.Label>Valor da Transfer??ncia</Form.Label>
                                        <Form.Control type="number" placeholder="R$" />
                                    </Form.Group>
                                    <Form.Group controlId="formBarTrans" className="mb-3 mt-4 d-lg-none">
                                        <Form.Label>Valor da Transfer??ncia</Form.Label>
                                        <Form.Control type="number" placeholder="R$" />
                                    </Form.Group>
                                    <div>
                                        <Button className="mt-3" variant='success'>Transferir</Button>
                                    </div>



                                </Col>
                                <Col className="px-lg-5" >
                                    <Form.Group controlId="formBarExtrato" className="mb-lg-3 mx-lg-5 d-none d-lg-inline">
                                        <Form.Label>Identifica????o nos extratos</Form.Label>
                                        <Form.Control type="number" />

                                    </Form.Group>
                                    <Form.Group controlId="formBarExtrato" className="mt-4 d-lg-none">
                                        <Form.Label>Identifica????o nos extratos</Form.Label>
                                        <Form.Control type="number" />

                                    </Form.Group>


                                </Col>
                            </Row>
                        </Col>


                    </Tab>
                </Tabs>


            </Col >

        </Row >
    </Container >

);

export default Payments;
