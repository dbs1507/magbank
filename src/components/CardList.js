import React from 'react';
import { Container, Row, Col, Card, Carousel, Image } from 'react-bootstrap';
import './CardList.scss';
import image1 from "../assets/cliente_1.jpg"
import image2 from "../assets/cliente_2.jfif"
import image3 from "../assets/cliente_4.jfif"

const CardList = () => (
    <Container>
        <h2 className='title-cardlist-desk mb-5 d-none d-lg-block '>Nossos clientes</h2>
        <h2 className='title-cardlist-mobile mb-3 d-lg-none'>Nossos clientes</h2>
        <Row>
            <Carousel className='mb-5 d-none d-lg-block'>
                <Carousel.Item>
                    <img
                        class="rounded-circle"
                        src={image1}
                        alt="First slide"
                        width="350px"

                    />

                    <Carousel.Caption>

                        <h5 className='text-desc'>'Muito satisfeito com proposta do banco. É tudo simples, rápido e justo. Praticidade na palma da mão'</h5>
                    </Carousel.Caption>
                    <h6 className='name-carrosel'>Fábio Lima, 40 anos</h6>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        class="rounded-circle"
                        src={image2}
                        alt="Second slide"
                        width="350px"


                    />


                    <Carousel.Caption>

                        <h5 className=' text-desc'>'Realmente a propagada é verdadeira. O que o MagBank propõe é algo incrível'</h5>

                    </Carousel.Caption>
                    <h6 className='name-carrosel'>Gabriel Ramos, 35 anos</h6>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        class="rounded-circle"
                        src={image3}
                        alt="Third slide"
                        width="350px"
                    />


                    <Carousel.Caption>

                        <h5 className=' text-desc'>'Melhor banco da atualidade. Sem burocracia e enrolação, parece mágica'</h5>

                        <h5>Marcos</h5>
                    </Carousel.Caption>
                    <h6 className='name-carrosel'>Marcos Almeida, 37 anos</h6>
                </Carousel.Item>
            </Carousel>










            <Carousel className='mb-5 d-lg-none'>
                <Carousel.Item>
                    <img
                        class="rounded-circle"
                        src={image1}
                        alt="First slide"
                        width="150px"

                    />

                    <h6 className='name-carrosel-mobile'>Fábio Lima, 40 anos</h6>
                    <p className='text-desc-mobile'>'Muito satisfeito com proposta do banco. É tudo simples, rápido e justo. Praticidade na palma da mão'</p>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        class="rounded-circle"
                        src={image2}
                        alt="Second slide"
                        width="150px"


                    />

                    <h6 className='name-carrosel-mobile'>Gabriel Ramos, 35 anos</h6>
                    <p className=' text-desc-mobile'>'Realmente a propagada é verdadeira. O que o MagBank propõe é algo incrível'</p>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        class="rounded-circle"
                        src={image3}
                        alt="Third slide"
                        width="150px"
                    />

                    <h6 className='name-carrosel-mobile'>Marcos Almeida, 37 anos</h6>
                    <p className=' text-desc-mobile'>'Melhor banco da atualidade. Sem burocracia e enrolação, parece mágica'</p>
                </Carousel.Item>
            </Carousel>
        </Row>
    </Container>
);

export default CardList;
