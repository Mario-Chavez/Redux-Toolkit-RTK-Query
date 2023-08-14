import React from "react";

import ListFoods from "../components/ListFoods";
import ProductSlider from "../components/ProductSlider";
import Header from "../components/Header";
import BannerHome from "../components/BannerHome";

const Home = () => {
    return (
        <div>
            <Header />
            <BannerHome />
            <ListFoods />
            {/* <ProductSlider /> */}
        </div>
    );
};

export default Home;
