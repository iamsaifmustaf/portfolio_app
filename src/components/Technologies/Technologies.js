import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
  ExternalLinks,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in both data analysis and web
      development. From fullstack development to analysing data sets, running
      machine learning algorithms and generating visual interpretations.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experiece with <br />
            <ExternalLinks>React.js</ExternalLinks>
            <br />
            <ExternalLinks>React.js</ExternalLinks>
            <br />
            <ExternalLinks>React.js</ExternalLinks>
            <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            <ExternalLinks>React.js</ExternalLinks>
            <br />
            <ExternalLinks>React.js</ExternalLinks>
            <br />
            <ExternalLinks>React.js</ExternalLinks>
            <br />{" "}
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with <br />
            <ExternalLinks>React.js</ExternalLinks>
            <br />
            <ExternalLinks>React.js</ExternalLinks>
            <br />
            <ExternalLinks>React.js</ExternalLinks>
            <br />{" "}
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with <br />
            <ExternalLinks>React.js</ExternalLinks>
            <br />
            <ExternalLinks>React.js</ExternalLinks>
            <br />
            <ExternalLinks>React.js</ExternalLinks>
            <br />{" "}
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with <br />
            <ExternalLinks>React.js</ExternalLinks>
            <br />
            <ExternalLinks>React.js</ExternalLinks>
            <br />
            <ExternalLinks>React.js</ExternalLinks>
            <br />{" "}
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with <br />
            <ExternalLinks>React.js</ExternalLinks>
            <br />
            <ExternalLinks>React.js</ExternalLinks>
            <br />
            <ExternalLinks>React.js</ExternalLinks>
            <br />{" "}
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
