import React from "react";
import "../components/CreditCard.scss"
import { Row, Col, Image } from 'react-bootstrap';
import cartao from '../assets/card-mobile.png';
import cartaoDesktop from '../assets/card.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCreditCard,
    faMobile,
    faShoppingCart,
    faWallet,
} from '@fortawesome/free-solid-svg-icons'


const CreditCard = () => (
    <div className='Jumbotron text-center text-light'>
        <Row className="my-lg-5">
            <Col lg className="text-lg-end my-lg-5 px-lg-5"> {/*lg so aplica a coluna no desktop, quando for mobile, deixa um em baixo do outro */}
                <p className="mid-font-mobile d-lg-none mt-5">Cartão de crédito</p>
                <p className="mid-font d-none d-lg-inline-block my-lg-5 px-lg-5">Cartão de crédito</p>
                <Row>
                    <Col className="text-start d-lg-none mx-5 px-4">
                        <p className="mid-mobile-text d-lg-none d-flex">
                            <div className="px-2 mx-2">
                                <FontAwesomeIcon
                                    icon={faCreditCard}
                                    size='2px'
                                    color='#f05656'
                                />
                            </div>
                            Crédito pessoal
                        </p>
                        <p className="mid-mobile-text d-lg-none d-flex px-1">
                            <div className="px-2 mx-2">
                                <FontAwesomeIcon
                                    icon={faMobile}
                                    size='2px'
                                    color='#f05656'
                                />
                            </div>
                            APP
                        </p>
                        <p className="mid-mobile-text d-lg-none d-flex">
                            <div className="px-2 mx-2">
                                <FontAwesomeIcon
                                    icon={faShoppingCart}
                                    size='2px'
                                    color='#f05656'
                                />
                            </div>
                            Pagamentos Online
                        </p>
                        <p className="mid-mobile-text d-lg-none d-flex">
                            <div className="px-2 mx-2">
                                <FontAwesomeIcon
                                    icon={faWallet}
                                    size='2px'
                                    color='#f05656'
                                />
                            </div>
                            Carteira Digital
                        </p>
                    </Col>
                    <Col className="text-start mx-5 px-5">
                        <p className="mid-desktop-text d-none d-lg-inline-block">
                            <div className="px-2">
                                <FontAwesomeIcon className="icon"
                                    icon={faCreditCard}
                                    size='2px'
                                    color='#f05656'
                                />
                                Crédito pessoal
                            </div>

                        </p>

                        <p className="mid-desktop-text d-none d-lg-block ">
                            <div className="px-3">
                                <FontAwesomeIcon className="icon"
                                    icon={faMobile}
                                    size='2px'
                                    color='#f05656'
                                />
                                APP
                            </div>

                        </p>

                        <p className="mid-desktop-text d-none d-lg-block">
                            <div className="px-2">
                                <FontAwesomeIcon className="icon"
                                    icon={faShoppingCart}
                                    size='2px'
                                    color='#f05656'
                                />
                                Pagamentos Online
                            </div>
                        </p>

                        <p className="mid-desktop-text d-none d-lg-block">
                            <div className="px-2">
                                <FontAwesomeIcon className="icon"
                                    icon={faWallet}
                                    size='2px'
                                    color='#f05656'
                                />
                                Carteira Digital
                            </div>
                        </p>
                    </Col>
                </Row>
            </Col>

            <Col lg className="text-lg-start my-lg-5 px-lg-5" >
                <Image className="d-lg-none my-5" src={cartao} />
                <Image className="d-none d-lg-inline-block" src={cartaoDesktop} />

            </Col>

        </Row>

        <Row>
            <Col>

            </Col>
        </Row>

    </div >

);

export default CreditCard;