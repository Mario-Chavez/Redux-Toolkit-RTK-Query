import React from "react";

import ListFoods from "../components/ListFoods";
import ProductSlider from "../components/ProductSlider";
import Header from "../components/Header";
import BannerHome from "../components/BannerHome";
import AbautMe from "../components/AbautMe";

const Home = () => {
    return (
        <div>
            <Header />
            <BannerHome />
            <ListFoods />
            <AbautMe />
        </div>
    );
};

export default Home;
