import React from "react";
import styled from "styled-components";
import data from "./정문긱사B.json"; // JSON 파일 경로

const 정문긱사B = () => {
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

export default 정문긱사B;

// 스타일은 원래 코드와 동일하게 유지
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
