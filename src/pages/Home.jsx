import React from "react";

import ListFoods from "../components/ListFoods";
import ProductSlider from "../components/ProductSlider";
import Header from "../components/Header";

const Home = () => {
    return (
        <div>
            <Header />
            <ListFoods />
            {/* <ProductSlider /> */}
        </div>
    );
};

export default Home;
