import React, { useState, useEffect } from 'react';
import Header from '../../utils/header/header';
import styled from 'styled-components';

const FavoriteList = () => {
  const [favoritePaths, setFavoritePaths] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavoritePaths(storedFavorites);
  }, []);

  return (
    <>
      <Header title="즐겨찾기" />
      <Container>
        {favoritePaths.length > 0 ? (
          favoritePaths.map((path) => (
            <PathCard key={path.id}>
              <PathName>{path.name}</PathName>
              <PathLocation>{path.location}</PathLocation>
            </PathCard>
          ))
        ) : (
          <EmptyMessage>즐겨찾기에 추가된 경로가 없습니다.</EmptyMessage>
        )}
      </Container>
    </>
  );
};

export default FavoriteList;

// Styles omitted for brevity
