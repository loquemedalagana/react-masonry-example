import React, { Suspense } from "react";
import styled from "styled-components";
import "./styles.css";
import {
  COLUMN_NUMBER_DESKTOP,
  COLUMN_NUMBER_MOBILE,
  COLUMN_NUMBER_TABLET,
  DEFAULT_ROW_HEIGHT,
  GRID_GAP
} from "./constant";
import MasonryItem from "./MasonryItem";
import imageDataList from "./data";

const MasonryBox = styled.ul`
  padding-left: 0;
  display: grid;
  grid-template-columns: repeat(${COLUMN_NUMBER_MOBILE}, minmax(100px, 1fr));
  grid-gap: ${GRID_GAP}px;
  grid-auto-rows: ${DEFAULT_ROW_HEIGHT};

  @media only screen and (max-width: 1023px) and (min-width: 768px) {
    grid-template-columns: repeat(${COLUMN_NUMBER_TABLET}, minmax(100px, 1fr));
  }

  @media only screen and (min-width: 1024px) {
    grid-template-columns: repeat(${COLUMN_NUMBER_DESKTOP}, minmax(100px, 1fr));
  }
`;

export default function App() {
  return (
    <MasonryBox>
      {imageDataList.map((imageData, index) => (
        <Suspense key={index} fallback={<></>}>
          <MasonryItem key={index} url={imageData} />
        </Suspense>
      ))}
    </MasonryBox>
  );
}
