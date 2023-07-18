import React, { useRef, useState } from "react";

import { Wrapper, ContentContainer } from "./styles";

interface Props {
  width?: string;
  children: any;
  padding?: string;
  border?: boolean;
  noGap?: boolean;
}

const HorizontalScrollContainer = ({ children, width, padding, border, noGap }: Props) => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setIsDragging(true);
    setStartX(e.pageX - ref.current!.offsetLeft);
    setScrollLeft(ref.current!.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - ref.current!.offsetLeft;
    const walk = (x - startX) * 3; // control the drag speed
    ref.current!.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };
  return (
    <Wrapper width={width ? width : "100%"} border={border}>
      <ContentContainer
        ref={ref}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        padding={padding}
        gap={noGap}
      >
        {children}
      </ContentContainer>
    </Wrapper>
  );
};

export default HorizontalScrollContainer;
