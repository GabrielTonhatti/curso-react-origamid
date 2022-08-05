import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Produtos from "./Components/Produtos";
import "./App.css";
import Contato from "./Components/Contato";

const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Produtos />} />
                        <Route path="/contato" element={<Contato />} />
                    </Routes>
                </div>
                <Footer />
            </BrowserRouter>
        </div>
    );
};

export default App;
