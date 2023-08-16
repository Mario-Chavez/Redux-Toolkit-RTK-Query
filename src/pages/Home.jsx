import React from "react";

import ListFoods from "../components/ListFoods";
import ProductSlider from "../components/ProductSlider";
import Header from "../components/Header";
import BannerHome from "../components/BannerHome";
import AbautMe from "../components/AbautMe";
import ClientsBanner from "../components/ClientsBanner";

const Home = () => {
    return (
        <div>
            <BannerHome />
            <ListFoods />
            <AbautMe />
            <ClientsBanner />
        </div>
    );
};

export default Home;
