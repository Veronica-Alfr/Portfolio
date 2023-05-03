import React from "react";
import Header from "../../components/Header/Header";
import meAnimated from "../../assets/images/me_animated-v2.png";
import HomeStyled from "./Home.styled";
import Footer from "../../components/Footer/Footer";

const Home = () => {
    return (
        <section className="home">
            <Header />
            <HomeStyled>
                <section className="content-home">
                    <h1>
                        Olá, sou <span>Verônica Alves</span>!
                    </h1>
                    <h3>Desenvolvedora Web Full-Stack</h3>
                    <div className="content-about">
                        <p>
                            Tecnologia é minha paixão e aqui é o espaço para
                            alguns dos meus projetos que são recheados de
                            criatividade e lógica.
                        </p>
                        <p>
                            Quer me conhecer melhor? Leia{" "}
                            <a href="/about">sobre mim</a>.
                        </p>
                    </div>
                    <img src={meAnimated} alt="Foto de Verônica Alves" />
                </section>
            </HomeStyled>
            <Footer />
        </section>
    );
};

export default Home;
