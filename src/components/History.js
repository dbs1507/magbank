import React from "react";
import { Container, Row, Col, Button, Tab, Table, Tabs } from "react-bootstrap";
import { Route, Routes, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCircle } from "@fortawesome/free-solid-svg-icons";


const History = () => (

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

            <Col xs={12} lg={9} className="mt-lg-5 pt-lg-3">
                <Row>
                    <h3 className="my-4 py-4"><strong>Extrato</strong></h3>
                </Row>
                <Tabs className="" defaultActiveKey="all-extrato">
                    <Tab eventKey='all-extrato' active>
                        <Table striped borderless>
                            <thead>
                                <tr>
                                    <th>Data</th>
                                    <th>Descrisão</th>
                                    <th>Valor (R$)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>05/08</td>
                                    <td>Salário 203902</td>
                                    <td>8000,00</td>
                                </tr>
                                <tr>
                                    <td>10/08</td>
                                    <td>Faculdade </td>
                                    <td>2750,00</td>
                                </tr>
                                <tr>
                                    <td>05/08</td>
                                    <td>Salário 203902</td>
                                    <td>8000,00</td>
                                </tr>
                                <tr>
                                    <td>10/08</td>
                                    <td>Faculdade </td>
                                    <td>2750,00</td>
                                </tr>
                                <tr>
                                    <td>05/08</td>
                                    <td>Salário 203902</td>
                                    <td>8000,00</td>
                                </tr>
                                <tr>
                                    <td>10/08</td>
                                    <td>Faculdade </td>
                                    <td>2750,00</td>
                                </tr>
                                <tr>
                                    <td>05/08</td>
                                    <td>Salário 203902</td>
                                    <td>8000,00</td>
                                </tr>
                                <tr>
                                    <td>10/08</td>
                                    <td>Faculdade </td>
                                    <td>2750,00</td>
                                </tr>
                                <tr>
                                    <td>05/08</td>
                                    <td>Salário 203902</td>
                                    <td>8000,00</td>
                                </tr>
                                <tr>
                                    <td>10/08</td>
                                    <td>Faculdade </td>
                                    <td>2750,00</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Tab>
                </Tabs>
            </Col>
        </Row>
    </Container>

);

export default History;
