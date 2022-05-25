import React from 'react';
import { Container, Row, Col, Card, Carousel, Image } from 'react-bootstrap';
import './CardList.scss';
import image1 from "../assets/cliente_1.jpg"
import image2 from "../assets/cliente_2.jfif"
import image3 from "../assets/cliente_4.jfif"

const CardList = () => (
    <Container>
        <h2 className='title-cardlist-desk mb-5 d-none d-lg-block '><strong>NOSSOS CLIENTES</strong></h2>
        <h2 className='title-cardlist-mobile my-2 mb-3  d-lg-none'>NOSSOS CLIENTES</h2>
        <Row>
            <Carousel className='mb-5 d-none d-lg-block'>
                <Carousel.Item>
                    <img
                        bo
                        class="rounded-circle border border-light"
                        src={image1}
                        alt="First slide"
                        width="370px"

                    />

                    <Carousel.Caption>

                        <h5 className='text-desc'>'Muito satisfeito com proposta do banco. É tudo simples, rápido e justo. Praticidade na palma da mão'</h5>
                    </Carousel.Caption>
                    <h6 className='name-carrosel'>Fábio Lima, 40 anos</h6>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        class="rounded-circle border border-light"
                        src={image2}
                        alt="Second slide"
                        width="370px"


                    />


                    <Carousel.Caption>

                        <h5 className=' text-desc'>'Realmente a propagada é verdadeira. O que o MagBank propõe é algo incrível'</h5>

                    </Carousel.Caption>
                    <h6 className='name-carrosel'>Gabriel Ramos, 35 anos</h6>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        class="rounded-circle border border-light"
                        src={image3}
                        alt="Third slide"
                        width="370px"
                    />


                    <Carousel.Caption>

                        <h5 className=' text-desc'>'Melhor banco da atualidade. Sem burocracia e enrolação, parece mágica'</h5>

                        <h5>Marcos</h5>
                    </Carousel.Caption>
                    <h6 className='name-carrosel'>Marcos Almeida, 37 anos</h6>
                </Carousel.Item>
            </Carousel>










            <Carousel className='mb-5 mt-4 d-lg-none'>
                <Carousel.Item>
                    <img
                        class="rounded-circle"
                        src={image1}
                        alt="First slide"
                        width="170px"

                    />
                    <h6 className='text-align-center text-desc-mobile mt-4'>'Muito satisfeito com proposta do banco.'</h6>
                    <p className='name-carrosel-mobile'>Samuel Oliveira, 40 anos</p>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        class="rounded-circle"
                        src={image2}
                        alt="Second slide"
                        width="170px"


                    />
                    <h6 className='text-align-center text-desc-mobile mt-4'>'O que o MagBank propõe é algo incrível'</h6>
                    <p className='name-carrosel-mobile'>Gabriel Ramos, 35 anos</p>
                </Carousel.Item>
                <Carousel.Item>

                    <img
                        class="rounded-circle"
                        src={image3}
                        alt="Third slide"
                        width="170px"
                    />
                    <h6 className=' text-align-center text-desc-mobile mt-4'>'Sem burocracia e enrolação. MagBank cumpre o que promete'</h6>
                    <p className='name-carrosel-mobile'>Marcos Almeida, 37 anos</p>
                </Carousel.Item>
            </Carousel>
        </Row>
    </Container>
);

export default CardList;
