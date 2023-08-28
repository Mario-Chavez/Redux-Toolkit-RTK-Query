import React from "react";
import ListFoods from "../components/ListFoods";
import BannerHome from "../components/BannerHome";
import AboutMe from "../components/AboutMe";
import ClientsBanner from "../components/ClientsBanner";
import Customers from "../components/Customers";

const Home = () => {
    return (
        <div>
            <BannerHome />
            <ListFoods />
            <AboutMe />
            <ClientsBanner />
            <Customers />
        </div>
    );
};

export default Home;
