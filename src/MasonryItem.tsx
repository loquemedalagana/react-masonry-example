import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { BORDER_RADIUS, GRID_GAP, DEFAULT_ROW_HEIGHT } from "./constant";

const MasonryItemBox = styled.li<{ imageHeight: number }>`
  padding-left: 0;
  list-style: none;
  position: relative;
  grid-row-end: span
    ${({ imageHeight }): string => {
      return `${Math.ceil(
        (imageHeight + GRID_GAP) / (GRID_GAP + DEFAULT_ROW_HEIGHT)
      )}`;
    }};

  overflow: hidden;
  transform: rotate(0deg);

  display: flex;
  align-items: center;
  justify-content: center;

  filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.3));
  transition: filter 0.25s ease-in-out;

  &:hover {
    filter: drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.3));
  }

  & > img {
    padding: 0;
    margin: 0;
    object-fit: cover;
    overflow: hidden;

    border-radius: ${BORDER_RADIUS}px;
  }
`;

interface MasonryItemProps {
  url: string;
}

const MasonryItem: React.FC<MasonryItemProps> = ({ url }) => {
  const imageRef = useRef<HTMLImageElement>(null);
  const [imageHeight, setImageHeight] = useState<number>(NaN);
  useEffect(() => {
    if (imageRef.current) {
      const naturalImageWidth = imageRef.current.naturalWidth;
      const naturalImageHeight = imageRef.current.naturalHeight;
      const currentImageWidth = imageRef.current.getBoundingClientRect().width;
      const ratio = currentImageWidth / naturalImageWidth;
      // console.log(naturalImageWidth, naturalImageHeight);
      setImageHeight(naturalImageHeight * ratio);
    }
  }, [imageRef, imageHeight, url]);

  return (
    <MasonryItemBox imageHeight={imageHeight}>
      <img src={url} alt="masonry-item" ref={imageRef} />
    </MasonryItemBox>
  );
};

export default MasonryItem;
