import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { DiChrome } from "react-icons/di";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Logo,
} from "./HeaderStyles";

import {SocialContainer} from "../Footer/FooterStyles"

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: "white" , height: "40px"}}>
          {/* <DiChrome size="3rem" /> */}
          <a>
            <img alt="saifm.dev" src="/images/saifm.svg" width="150" height="70" />            
          </a>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About Me</NavLink>
        </Link>
      </li>
    </Div2>
    <SocialContainer>
      <SocialIcons href="https://github.com/iamsaifmustaf" target={"_blank"}>
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/saifmdev/" target={"_blank"}>
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      {/* <SocialIcons href="https://google.com">
        <AiFillInstagram size="3rem" />
      </SocialIcons> */}
    </SocialContainer>
  </Container>
);

export default Header;