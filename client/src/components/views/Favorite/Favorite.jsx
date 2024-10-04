import React from 'react';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import styled from 'styled-components';

const Favorite = ({ path, isFavorite, onToggleFavorite }) => {
  return (
    <FavoriteButton onClick={() => onToggleFavorite(path)}>
      {isFavorite ? <AiFillStar size={24} color="gold" /> : <AiOutlineStar size={24} />}
    </FavoriteButton>
  );
};

export default Favorite;

const FavoriteButton = styled.div`
  cursor: pointer;
  margin-right: 10px;
`;
