import React from "react";
import Header from "../../utils/header/header";
import styled from "styled-components";

const PathList = () => {
  const paths = [
    { id: 1, name: "지름길 이름", location: "장소", rating: 4.8 },
    { id: 2, name: "지름길 이름", location: "장소", rating: 4.8 },
    { id: 3, name: "지름길 이름", location: "장소", rating: 4.8 },
    { id: 4, name: "지름길 이름", location: "장소", rating: 4.8 },
  ];

  return (
    <>
      <Header title="지름길 목록" />
      <Container>
        <ButtonContainer>
          <ListButton>지름길 목록</ListButton>
          <ViewButton>지름길 한 눈에 보기</ViewButton>
        </ButtonContainer>

        <PathListContainer>
          {paths.map((path) => (
            <PathCard key={path.id}>
              <ImagePlaceholder />
              <PathDetails>
                <PathName>{path.name}</PathName>
                <PathLocation>({path.location})</PathLocation>
                <Rating>★ {path.rating}</Rating>
              </PathDetails>
              <ReviewButton>리뷰 보기</ReviewButton>
            </PathCard>
          ))}
        </PathListContainer>
      </Container>
    </>
  );
};

export default PathList;

const Container = styled.div`
  padding: 16px;
  background-color: #0F3D2B;
  min-height: 100vh;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const ListButton = styled.button`
  background-color: #358868;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
`;

const ViewButton = styled.button`
  background-color: white;
  color: #4caf50;
  border: 2px solid white;
  padding: 10px 20px;
  border-radius: 5px;
`;

const PathListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const PathCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%; 
  max-width: 100%
`;

const ImagePlaceholder = styled.div`
  width: 60px;
  height: 60px;
  background-color: #ddd;
  border-radius: 8px;
`;

const PathDetails = styled.div`
  flex-grow: 1;
  margin-left: 10px;
`;

const PathName = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

const PathLocation = styled.div`
  font-size: 14px;
  color: #888;
`;

const Rating = styled.div`
  font-size: 14px;
  color: #ffb400;
`;

const ReviewButton = styled.button`
  background-color: #0F3D2B;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 5px;
`;
