import React from "react";
import { Row, Col, Button, Image } from 'react-bootstrap';
import "../components/Hero.scss"
import logo from '../assets/logo__magic-pay--mobile.png';
import logoDesktop from '../assets/logo__magic-pay.png';


const Hero = ({ onClick }) => (
    <div className='Jumbotron text-center text-light hero'>
        <Row className="my-lg-5">
            <Col lg className="text-lg-end my-lg-5 "> {/*lg so aplica para desk, text-lg-end coloca mais a direita, my-lg-5 -> margin para y que sera refletido no lg */}
                <Image className="d-lg-none" src={logo} /> {/*logo que ser visto somente no mobile */}
                <Image className="d-none d-lg-inline-block" src={logoDesktop} />{/*somente visto no desktop*/}
            </Col>

            <Col lg className="text-lg-start my-lg-5 ">
                <p >Pague suas contas pelo nosso APP</p>
                <Button variant='outline-light' onClick={onClick}>Abra sua conta</Button>
            </Col>
        </Row>

    </div >

);



export default Hero;