import React from "react";
import { DiFirebase, DiReact, DiZend, DiPython } from "react-icons/di";
import {GoGraph} from "react-icons/go"
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
      development. My focus is on analysing data sets, running
      machine learning algorithms and generating visual interpretations.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiPython size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Programming</ListTitle>
          <ListParagraph>
            Experiece with <br />
            <ExternalLinks>Python</ExternalLinks>
            <br />
            <ExternalLinks>R</ExternalLinks>
            <br />
            <ExternalLinks>R Shiny</ExternalLinks>
            <br />
            <ExternalLinks>SciPy</ExternalLinks>
            <br />
            <ExternalLinks>NumPy</ExternalLinks>
            <br />
            <ExternalLinks>Tensorflow</ExternalLinks>
            <br />
            <ExternalLinks>SQL</ExternalLinks>
            <br />
            <ExternalLinks>JavaScript</ExternalLinks>
            <br />
            <ExternalLinks>Ruby on Rails</ExternalLinks>
            <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Databases & Cloud Services</ListTitle>
          <ListParagraph>
            Experience with <br />
            <ExternalLinks>AWS</ExternalLinks>
            <br />
            <ExternalLinks>GCP</ExternalLinks>
            <br />
            <ExternalLinks>MySQL</ExternalLinks>
            <br />
            <ExternalLinks>MongoDB</ExternalLinks>
            <br />{" "}
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <GoGraph size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Data Visualization</ListTitle>
          <ListParagraph>
            Experience with <br />
            <ExternalLinks>Tableau</ExternalLinks>
            <br />
            <ExternalLinks>Looker</ExternalLinks>
            <br />
            <ExternalLinks>PowerBI</ExternalLinks>
            <br />
            <ExternalLinks>Matplotlib</ExternalLinks>
            <br />
            <ExternalLinks>ggplot2</ExternalLinks>
            <br />{" "}
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
