import React, { useState } from "react";
import Hero from "../components/Hero"
import CardList from "../components/CardList";
import "../App.scss";
import CreditCard from "../components/CreditCard";
import CenteredButton from "../components/CenteredButton";
import Institutional from "../components/Institutional";
import Faq from "../FAQ";
import AccountModal from "../components/AccountModal";


const Home = ({ handleClick }) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <Hero onClick={handleClick} />

            <CreditCard />
            <CardList />
            <CenteredButton onClick={handleClick}>Abra sua conta</CenteredButton>

            <Institutional onClick={handleClick} />
            <Faq />
            <AccountModal show={showModal} handleClose={() => setShowModal(false)} />

        </>

    )
};


export default Home;
