import React from "react";
import { Container, Row, Col, Button, Tab, Table, Tabs } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCircle } from "@fortawesome/free-solid-svg-icons";

import "../views/Dashboard.scss"


const Dashboard = ({ name, account }) => {

    return (

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
                            <h4 class>{name}</h4>
                            <p className='text-muted'>{account}</p>
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

                <Col xs={12} lg={3} className="mt-lg-5 pt-lg-3">
                    <h3 className="my-4 py-4"><strong>Conta Corrente</strong></h3>
                    <h6><small><strong>Saldo em conta corrente</strong></small></h6>
                    <h4 className="text-success mb-4">
                        <small>R$</small>3.500<small>,00</small>
                    </h4>
                    <h6 className="mt-1"><small><strong>Cheque especial</strong></small></h6>
                    <p className="mt-3 mb-0">Limite disponível</p>
                    <p className="mb-4">R$ 5.000,00</p>
                    <Link to="/dashboard/history">
                        <Button variant="secondary">Ver extrato</Button>
                    </Link>
                </Col>

                <Col xs={12} lg={6} className="mt-lg-5 pt-lg-5" >
                    <Tabs className="mt-5 pt-lg-5" defaultActiveKey="latest" >
                        <Tab eventKey='latest' title="Últimos lançamentos">
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
                                        <td>22/07</td>
                                        <td>Saque 24 horas 012345</td>
                                        <td>300,00</td>
                                    </tr>
                                    <tr>
                                        <td>21/07</td>
                                        <td>Supermercado 415245</td>
                                        <td>275,90</td>
                                    </tr>
                                    <tr>
                                        <td>21/07</td>
                                        <td>Estacionamento 378905</td>
                                        <td>12,00</td>
                                    </tr>
                                    <tr>
                                        <td>21/07</td>
                                        <td>Pagamento Aluguel 143676</td>
                                        <td>1.500,00</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Tab>
                        <Tab eventKey='future' title='Lançamentos futuros'>
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
                                </tbody>
                            </Table>
                        </Tab>
                    </Tabs>
                </Col>
            </Row>
        </Container >


    )

};

export default Dashboard;