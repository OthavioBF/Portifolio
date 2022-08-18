import { useEffect, useState } from "react";
import { Link } from "react-scroll";

import { Container, Menu } from "./styles";

type SectionList = {
  name: string;
  id: string;
  icon: JSX.Element;
}[];

export default function Header() {
  return (
    <Container>
      <Menu>
        <div>
          <h1>Portfolio</h1>
        </div>

        <ul>
          <li>
            <Link activeClass="active" smooth spy to="home">
              Home
            </Link>
          </li>
          <li>
            <Link activeClass="active" smooth spy to="skillForm">
              Skills
            </Link>
          </li>
          <li>
            <Link activeClass="active" smooth spy to="projectsCards">
              Projects
            </Link>
          </li>
          <li>
            <Link activeClass="active" smooth spy to="contact">
              Contact
            </Link>
          </li>
        </ul>
      </Menu>
    </Container>
  );
}
