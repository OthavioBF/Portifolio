import React from "react";

import { Container, ProjectsContent, CardsContainer, Card } from "./styles";
import Medic from "../../assets/Images/medic.jpeg";

export default function ProjectsCards() {
  return (
    <Container>
      <ProjectsContent>
        <h1>Projects</h1>

        <CardsContainer>
          <Card>
            <img src={Medic} />
            <div>
              <h2>Medic</h2>
              <h3>React Native</h3>
              <p>
                This was an application developed by me and my girlfriend at
                college, for the dicipline "interdisciplinary project 2", we did
                an app to control patients medicines, what and when they have to
                take their medicine. In the app we can register all the personal
                information of the patient. Our main target was rehabilitation
                clinics.
              </p>
              <a href="https://github.com/mauriani/PI-2" target="_blank">
                See More
              </a>
            </div>
          </Card>
          <Card>
            <img src="" />
            <div>
              <h2>ToDo List</h2>
              <h3>Javascript</h3>
              <p>
                A vantagem de usar Lorem Ipsum é que ele tem uma distribuição
                normal de letras, ao contrário de "Conteúdo aqui, conteúdo
                aqui", fazendo com que ele tenha uma aparência similar a de um
                texto legível.
              </p>
              <a>Saiba Mais</a>
            </div>
          </Card>
          <Card>
            <img src="" />
            <div>
              <h2>ToDo List</h2>
              <h3>Javascript</h3>
              <p>
                A vantagem de usar Lorem Ipsum é que ele tem uma distribuição
                normal de letras, ao contrário de "Conteúdo aqui, conteúdo
                aqui", fazendo com que ele tenha uma aparência similar a de um
                texto legível.
              </p>
              <a>Saiba Mais</a>
            </div>
          </Card>
          <Card>
            <img src="" />
            <div>
              <h2>ToDo List</h2>
              <h3>Javascript</h3>
              <p>
                A vantagem de usar Lorem Ipsum é que ele tem uma distribuição
                normal de letras, ao contrário de "Conteúdo aqui, conteúdo
                aqui", fazendo com que ele tenha uma aparência similar a de um
                texto legível.
              </p>
              <a>Saiba Mais</a>
            </div>
          </Card>
        </CardsContainer>

        <h2>
          Find more projects on my{" "}
          <a target="blank" href="https://github.com/OthavioBF">
            GitHub
          </a>
          , enjoy!{" "}
        </h2>
      </ProjectsContent>
    </Container>
  );
}
