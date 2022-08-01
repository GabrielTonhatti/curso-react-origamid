import React from "react";
import Links from "../Links/Links";

const Home = (props) => {
    return (
        <div>
            <Links />

            <h1 style={props.cor}>{props.texto}</h1>
            <p>Essa é a home do site</p>
        </div>
    );
};

export default Home;
