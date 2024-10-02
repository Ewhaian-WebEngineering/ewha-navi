import React, { useState } from "react";
import styled from "styled-components";
import Header from "../../utils/header/header";
import NextArrowIcon from "../../../images/Search/화살표.svg"; // NextArrowIcon 경로 수정
import 즐겨찾기 from "../../../images/Search/즐겨찾기.svg"; // 즐겨찾기 경로 수정
import 즐겨찾기채워짐 from "../../../images/Search/즐겨찾기채워짐.svg"; // 즐겨찾기채워짐 경로 수정

const FavoriteList = () => {
  const [favorites, setFavorites] = useState([
    { id: 1, name: "포도길", location: "포스코관 - 도서관", rating: 4.8, isStarred: true },
    { id: 2, name: "지름길 이름", location: "장소 - 장소", rating: 4.8, isStarred: false },
    { id: 3, name: "지름길 이름", location: "장소 - 장소", rating: 4.8, isStarred: true },
    { id: 4, name: "지름길 이름", location: "장소 - 장소", rating: 4.8, isStarred: false },
  ]);

  const toggleFavorite = (id) => {
    setFavorites((prevFavorites) =>
      prevFavorites.map((fav) =>
        fav.id === id ? { ...fav, isStarred: !fav.isStarred } : fav
      )
    );
  };

  return (
    <>
      <Header title="즐겨찾기 목록" />
      <Container>
        {favorites.map((favorite) => (
          <PathCard key={favorite.id}>
            <ImagePlaceholder />
            <PathDetails>
              <PathName>{favorite.name}</PathName>
              <PathLocation>{favorite.location}</PathLocation>
              <Rating>★ {favorite.rating}</Rating>
            </PathDetails>
            <Star onClick={() => toggleFavorite(favorite.id)}>
              <img
                src={favorite.isStarred ? 즐겨찾기채워짐 : 즐겨찾기}
                alt="즐겨찾기"
              />
            </Star>
            <ArrowImage src={NextArrowIcon} alt="arrow icon" />
          </PathCard>
        ))}
      </Container>
    </>
  );
};

export default FavoriteList;

const Container = styled.div`
  padding: 16px;
  background-color: #0f3d2b;
  min-height: 100vh;
`;

const PathCard = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
  padding: 5px;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 100%;
  min-height: 120px;
  margin-bottom: 10px;
`;

const ImagePlaceholder = styled.div`
  width: 90px;
  height: 90px;
  background-color: #ddd;
  margin-left: 10px;
`;

const PathDetails = styled.div`
  flex-grow: 1;
  margin-left: 20px;
  justify-content: flex-start;
  padding-top: 0;
`;

const PathName = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-top: -30px;
`;

const PathLocation = styled.div`
  font-size: 12px;
  color: #888;
  margin-top: 5px;
`;

const Rating = styled.div`
  font-size: 12px;
  color: #0f3d2b;
  margin-top: 3px;
`;

const Star = styled.div`
  margin-right: 40px;
  transform: translateY(-10px);
  align-self: flex-end;
  cursor: pointer;
`;

const ArrowImage = styled.img`
  width: 10%;
  height: 100%;
  margin-left: 7px;
`;
