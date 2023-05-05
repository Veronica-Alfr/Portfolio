import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import AppStyled from "./App.styled";
import Projects from "./pages/Projects/Projects";

const App = () => {
    return (
        <AppStyled>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                </Routes>
            </BrowserRouter>
        </AppStyled>
    );
};

export default App;
