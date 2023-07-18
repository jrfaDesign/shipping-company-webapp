import { useState } from "react";
import ContentContainer from "~/shared/components/ContentContainer";

import Section from "~/shared/components/Section";
import ContactsDetails from "./components/ContactsDetails";

import Form from "./components/Form";

const Contacts = () => {
  return (
    <>
      <Section>
        <ContentContainer>
          <ContactsDetails />
        </ContentContainer>
      </Section>
      <Section accent>
        <ContentContainer>
          <Form />
        </ContentContainer>
      </Section>
    </>
  );
};

export default Contacts;
