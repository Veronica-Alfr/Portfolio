import React from "react";
import linkedinIcon from "../../assets/icons/icons-linkedin.png";
import githubIcon from "../../assets/icons/icons-github.png";
import IconsStyled from "./Icons.styled";

const Icons = () => {
    return (
        <IconsStyled>
            <a
                className="icons"
                href="https://www.linkedin.com/in/vealves/"
                target="_blank"
                aria-label="Linkedin Profile"
                rel="noreferrer"
            >
                <img src={linkedinIcon} alt="Icone do LinkedIn" />
            </a>
            <a
                className="icons"
                href="https://github.com/Veronica-Alfr"
                target="_blank"
                aria-label="Github Profile"
                rel="noreferrer"
            >
                <img src={githubIcon} alt="Icone do GitHub" />
            </a>
        </IconsStyled>
    );
};

export default Icons;
