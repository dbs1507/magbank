import React, { useState } from "react";
import { Modal, Button, Form, FormCheck } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const AccountModal = ({ show, handleClose, auth }) => {
    const history = useNavigate();
    const [name, setName] = useState();

    const handleSubmit = () => {
        auth.login(name, '12345', history("/dashboard"));
        handleClose();
    }


    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Abra sua conta</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Seu nome</Form.Label>
                        <Form.Control type="text" placeholder="Seu nome" value={name} onChange={(e) => setName(e.currentTarget.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Seu email</Form.Label>
                        <Form.Control type="email" placeholder="Seu email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicSenha">
                        <Form.Label>Sua cidade</Form.Label>
                        <Form.Control as="select">
                            <option value="1">Florianópolis - SC</option>
                            <option value="1">Curitiba - PR</option>
                            <option value="1">São Paulo - SP </option>
                        </Form.Control>
                    </Form.Group>

                    <FormCheck
                        type="switch"
                        id="custom-switch"
                        label="Eu li e concordo com os termos de uso"
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancelar
                </Button>
                <Button variant="primary" onClick={handleSubmit}>
                    Criar conta
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default AccountModal;