import React from "react";

import {
  Container,
  ContactContent,
  ButtonContainer,
  TitleContainer,
  Line,
  FormContainer,
  Form,
  NameContainer,
  TextArea,
} from "./styles";

export default function Contact() {
  return (
    <Container>
      <ContactContent>
        <TitleContainer>
          <h1>Contact Me</h1>
          <h2>
            Choose your best email, and let me a message. Thank you for
            appreciate my work
          </h2>
        </TitleContainer>
        <Line />
        <FormContainer>
          <Form>
            <NameContainer>
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
            </NameContainer>
            <input type="email" placeholder="E-Mail" />
            <TextArea>
              <input type="text-area" placeholder="Message" />
            </TextArea>
          </Form>

          <ButtonContainer>
            <button>Send</button>
          </ButtonContainer>
        </FormContainer>
      </ContactContent>
    </Container>
  );
}
