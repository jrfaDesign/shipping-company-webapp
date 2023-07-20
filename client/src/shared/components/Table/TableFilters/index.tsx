import React, { Dispatch, SetStateAction } from "react";

import { useScreenWidth } from "~/hooks/globalHooks";

import SearchInput from "~/shared/components/SearchInput";

import { Orders, RegisteredUser } from "~/types/app";
import OptionsButtons from "./components/OptionsButtons";

import { Container, TextOptionsContainer, SearchInputContainer, TotalText } from "./styles";
interface Props {
  data: (Orders | RegisteredUser)[];
  setSelectedData: Dispatch<SetStateAction<(Orders | RegisteredUser)[]>>;
}

const Filters = ({ data, setSelectedData }: Props) => {
  const screenWidth = useScreenWidth();
  return (
    <Container>
      <TextOptionsContainer>
        <TotalText>Total : {data.length}</TotalText>
        {screenWidth < 769 && <OptionsButtons />}
      </TextOptionsContainer>
      <SearchInputContainer>
        <SearchInput type="search" placeholder="Procurar por morada ou cliente destino" />
      </SearchInputContainer>
      {screenWidth >= 769 && <OptionsButtons />}
    </Container>
  );
};

export default Filters;
