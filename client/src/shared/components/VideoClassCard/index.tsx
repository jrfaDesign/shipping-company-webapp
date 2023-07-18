import React from "react";
import { useNavigate } from "react-router-dom";
import { toUrlString } from "~/hooks/globalHooks";

import { CourseClass as VideoClassProps } from "~/types/app";

import { CardComponent, ImageContainer } from "./styles";

interface Props {
  videoClass: VideoClassProps;
}

const VideoClassCard = ({ videoClass }: Props) => {
  const { title, imgTag, description } = videoClass;

  const navigate = useNavigate();

  const handleCardClick = (title: string) => {
    navigate(`/produtos/cursos/${toUrlString(title)}`);
  };

  const limitDescription =
    description.length > 85 ? `${description.substring(0, 85)}...` : description;
  return (
    <CardComponent onClick={() => handleCardClick(title)}>
      <h4>{title}</h4>
      <ImageContainer className="image">
        <img src={imgTag} />
      </ImageContainer>
      <div>
        <p>{limitDescription}</p>
      </div>
    </CardComponent>
  );
};

export default VideoClassCard;
