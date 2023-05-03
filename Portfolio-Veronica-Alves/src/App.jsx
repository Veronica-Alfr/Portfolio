import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import AppStyled from "./App.styled";

const App = () => {
    return (
        <AppStyled>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </AppStyled>
    );
};

export default App;
