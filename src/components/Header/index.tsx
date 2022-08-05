import { useEffect, useState } from "react";

import HomeIcon from "@material-ui/icons/Home";
import ProjectsIcon from "@material-ui/icons/Reorder";
import Skills from "@material-ui/icons/BorderColor";
import ContactIcon from "@material-ui/icons/Send";

import { Container, Menu } from "./styles";

type SectionList = {
  name: string;
  id: string;
  icon: JSX.Element;
}[];

export default function Header() {
  const [isNavVisibility, setNavVisibility] = useState(false);

  const sectionList: SectionList = [
    {
      name: "Início",
      id: "s-welcome",
      icon: <HomeIcon />,
    },
    {
      name: "Projetos",
      id: "s-projects",
      icon: <ProjectsIcon />,
    },
    {
      name: "Habilidades",
      id: "s-skills",
      icon: <Skills />,
    },
    {
      name: "Entre em contato",
      id: "s-contact-me",
      icon: <ContactIcon />,
    },
  ];

  function scrollTo(id?: string) {
    if (!id) {
      return;
    }

    let el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
      });
    } else {
      console.error("Seção não existe.");
    }
  }

  useEffect(() => {
    const scrollListener = () => {
      window.scrollY > 70 ? setNavVisibility(true) : setNavVisibility(false);
    };

    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <Container>
      <Menu>
        <div>
          <h1>Portfolio</h1>
        </div>

        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </Menu>
    </Container>
  );
}
