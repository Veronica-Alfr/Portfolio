import React from "react";
import Header from "../../components/Header/Header";
// import Footer from "../../components/Footer/Footer";
import { dataProjects } from "./Data/DataProjects";

const Projects = () => {
    return (
        <section className="projects">
            <Header />
            <div>
                {dataProjects?.map((project) => {
                    <h3>{project.title}</h3>;
                    <img
                        src={project.img}
                        alt={`Project Image: ${project.title}`}
                    />;
                })}
            </div>
            {/* <Footer /> */}
        </section>
    );
};

export default Projects;
