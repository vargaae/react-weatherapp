import { navigation } from "../../constants";

import logo from "../../assets/logo.svg";

import {
  FooterContainer,
  Heading,
  ButtonContainer,
  LinksContainer,
  LinksLogoContainer,
  LinksDivContainer,
  FooterLink,
  IconsContainer,
  IconContainer,
  CopyrightContainer,
} from "./Footer.styles";

const Footer = () => {
  return (
    <FooterContainer className="gradient__bg">
      <LinksContainer>
        <LinksLogoContainer>
          <img src={logo} alt="Weather App logo" />
          <h3>WEATHER APP</h3>
          <p>Your trusted weather app</p>
        </LinksLogoContainer>
        <LinksDivContainer>
          <h4>NAVIGATION</h4>
          {navigation.map((list) => {
            return (
              <FooterLink key={list.id} to={list.url}>
                <p>{list.title}</p>
              </FooterLink>
            );
          })}
        </LinksDivContainer>
        <LinksDivContainer>
          <h4>Get in touch</h4>
          <p>Budapest HU</p>
        </LinksDivContainer>
        <IconsContainer>
          <FooterLink
            to="mailto:vargaae@hotmail.com"
            target="_blank"
            rel="noopener"
          >
            <IconContainer>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                focusable="false"
                viewBox="0 0 24 24"
                color="rgb(255, 255, 255)"
              >
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"></path>
              </svg>
            </IconContainer>
          </FooterLink>
        </IconsContainer>
      </LinksContainer>

      <CopyrightContainer>
        <p>@2024 Andras Varga. All rights reserved.</p>
      </CopyrightContainer>
    </FooterContainer>
  );
};

export default Footer;
