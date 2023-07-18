import React from "react";
import { useNavigate } from "react-router-dom";
import { toUrlString } from "~/hooks/globalHooks";
import { EbookClass } from "~/types/app";

import {
  EbookContainer,
  ImageContainer,
  EbookTitle,
  PriceContainer,
  Price,
  PromoPrice
} from "./styles";

interface Props {
  ebook: EbookClass;
}

const EbookCard = ({ ebook }: Props) => {
  const { title, image, price, promo } = ebook;

  const navigate = useNavigate();

  const handleCardClick = (title: string) => {
    navigate(`/produtos/ebooks/${toUrlString(title)}`);
  };

  return (
    <EbookContainer onClick={() => handleCardClick(title)}>
      <ImageContainer className="image">
        <img src={image} />
      </ImageContainer>
      <EbookTitle>{title}</EbookTitle>
      <PriceContainer>
        {promo && <PromoPrice>{promo.toFixed(2)}€</PromoPrice>}
        {promo && <Price>{price.toFixed(2)}€</Price>}
        {!promo && <PromoPrice>{price.toFixed(2)}€</PromoPrice>}
      </PriceContainer>
    </EbookContainer>
  );
};

export default EbookCard;
