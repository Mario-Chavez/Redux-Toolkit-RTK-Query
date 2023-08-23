import React from "react";
import ListFoods from "../components/ListFoods";
import BannerHome from "../components/BannerHome";
import AbautMe from "../components/AbautMe";
import ClientsBanner from "../components/ClientsBanner";
import Customers from "../components/Customers";

const Home = () => {
    return (
        <div>
            <BannerHome />
            <ListFoods />
            <AbautMe />
            <ClientsBanner />
            <Customers />
        </div>
    );
};

export default Home;
