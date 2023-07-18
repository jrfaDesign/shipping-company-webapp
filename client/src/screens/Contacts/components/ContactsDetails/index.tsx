import React from "react";

import { Container, ContactWrapper, ContactWrapperHeader } from "./styles";

import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

const allContacts = [
  {
    type: "Morada",
    data: "Casa do Pessoal do HUC, Praceta Prof Dr Mota Pinto, 3000-075 Coimbra",
    icon: <PlaceOutlinedIcon />
  },
  {
    type: "Telemóvel",
    data: "910 973 279",
    icon: <LocalPhoneIcon />
  },
  {
    type: "Email",
    data: "beatrizgsantosnutri@gmail.com",
    icon: <EmailOutlinedIcon />
  }
];

const ContactsDetails = () => {
  return (
    <Container>
      {allContacts.map((contact) => {
        return (
          <ContactWrapper key={contact.type} className="contact-container">
            {contact.icon}
            <ContactWrapperHeader>
              <h5>{contact.type}</h5>
              <p>{contact.data}</p>
            </ContactWrapperHeader>
          </ContactWrapper>
        );
      })}
    </Container>
  );
};

export default ContactsDetails;
