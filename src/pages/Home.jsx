import React from "react";
import Navbar from "../components/Navbar";
import ListFoods from "../components/ListFoods";
import ProductSlider from "../components/ProductSlider";

const Home = () => {
    return (
        <div>
            <Navbar />
            <ListFoods />
            {/* <ProductSlider /> */}
        </div>
    );
};

export default Home;
