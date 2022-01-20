import React from "react";
import Typist from "react-typist";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <Typist>
          <SectionTitle main center>
            Hi there, <br />
            <Typist.Delay ms={800} />
            My name is Steve
            <Typist.Backspace count={5} delay={1000} />
            Saif
          </SectionTitle>
          <SectionText>
            I am a freelance python developer specialized in data analysis and
            machine learning.
          </SectionText>
        </Typist>
        {/* <Button onClick={props.handleClick}>Learn More</Button> */}
      </LeftSection>
    </Section>
  </>
);

export default Hero;
