import React from "react";
import styled from "styled-components";
import data from "./정문학문관.json"; // JSON 파일 경로

const 정문학문관 = () => {
  return (
    <Wrapper>
      {data.elements.map((element, index) => (
        <Build key={index}>
          {element.image ? (
            <img src={element.image.src} alt={element.image.alt} />
          ) : (
            <div className="dot"></div>
          )}
          <div className="text">{element.text}</div>
        </Build>
      ))}
    </Wrapper>
  );
};

export default 정문학문관;

const Wrapper = styled.div`
  color: white;
  position: relative;
  padding: 20px;
  transform: translateX(-14px);

  .text {
    margin-left: 30px;
  }

  .dot {
    background-color: white;
    border-radius: 100%;
    width: 7px;
    height: 7px;
    position: absolute;
    left: -10px;
  }

  img {
    position: absolute;
    left: -15px;
  }
`;

const Build = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
  position: relative;
`;
