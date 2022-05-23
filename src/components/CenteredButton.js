import React from "react";
import { Container, Row, Button } from "react-bootstrap";
import './CenteredButton.scss'

const CenteredButton = ({ children, onClick }) => (
    <Container>
        <Row className="btn-row-mobile d-lg-none">
            <Button
                variant="success"  /*botao verde */
                onClick={onClick}
            >



                {children} {/*tudo que vai no meio dos elementos dentro do App.js quando se renderiza o código */}
            </Button>
        </Row>
        <Row className="row-desk align-self-center d-none d-lg-inline ">
            <Button className='btn-row-desk my-lg-5 px-lg-5'
                variant="success"
                size='lg'  /*botao verde */
                onClick={onClick}
            >

                {children} {/*tudo que vai no meio dos elementos dentro do App.js quando se renderiza o código */}
            </Button>
        </Row>
    </Container>

)

export default CenteredButton;