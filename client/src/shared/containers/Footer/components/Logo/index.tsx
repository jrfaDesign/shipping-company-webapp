import React from "react";

import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

import LogoImage from "~/assets/images/imgs/logo.png";

import { LogoContainer, ContactsContainer, ContactInfo, SocialLinks } from "./styles";

const openLink = (link: string) => {
  window.open(link);
};

const Logo = () => {
  return (
    <LogoContainer>
      <img src={LogoImage} />
      <ContactsContainer>
        <ContactInfo>
          <LocalPhoneIcon /> <span>910 973 279</span>
        </ContactInfo>
        <ContactInfo>
          <EmailOutlinedIcon /> <span>beatrizgsantosnutri@gmail.com</span>
        </ContactInfo>
      </ContactsContainer>
      <ContactsContainer>
        <SocialLinks>
          <ContactInfo onClick={() => openLink("https://www.instagram.com/bsnutrition__/")}>
            <InstagramIcon /> <span>@bsnutrition__</span>
          </ContactInfo>
        </SocialLinks>
      </ContactsContainer>
    </LogoContainer>
  );
};

export default Logo;
