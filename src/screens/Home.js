import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Carousel from "../components/Carousel";

export default function Home(){
    return(
        <div>
            <div> <Navbar/> </div>
            <div> <Carousel/></div>

            <div class="m-3 pb-4"> <Card/> </div> 

            <div class="m-5 pt-5"> <Footer /> </div>
        </div>
    )
}