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
            <Typist.Delay ms={600} />
            My name is Saif
            <Typist.Delay ms={400} />
          </SectionTitle>
        </Typist>
        <SectionText>
          I am a freelance python developer specialized in data analysis and
          machine learning.
        </SectionText>
        {/* <Button onClick={props.handleClick}>Learn More</Button> */}
      </LeftSection>
    </Section>
  </>
);

export default Hero;
