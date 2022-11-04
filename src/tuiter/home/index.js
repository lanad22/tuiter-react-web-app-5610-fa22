import React from "react";
import TuitList from "../tuits/TuitList";
import WhatsHappening from "./whats-happening";
const HomeComponent = () => {
    return(
        <>
            <div>
                <h4>Home</h4>
                <WhatsHappening/>
                <TuitList/>
            </div>
        </>
    );
};
export default HomeComponent;

