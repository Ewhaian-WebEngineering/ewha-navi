// Favorite.jsx
import React from "react";
import styled from "styled-components";
import 즐겨찾기 from "../../images/Search/즐겨찾기.svg";
import 즐겨찾기채워짐 from "../../images/Search/즐겨찾기채워짐.svg"; // 채워진 별 이미지 추가

const Favorite = ({ path, onToggleFavorite }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    // 초기 즐겨찾기 상태 확인 (localStorage에 저장된 상태 확인)
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const isPathFavorite = savedFavorites.some((item) => item.id === path.id);
    setIsFavorite(isPathFavorite);
  }, [path.id]);

  const handleToggleFavorite = () => {
    const updatedFavoriteStatus = !isFavorite;
    setIsFavorite(updatedFavoriteStatus);
    onToggleFavorite(path);  // 부모로부터 받은 즐겨찾기 추가/제거 함수 호출
  };

  return (
    <StarButton onClick={handleToggleFavorite}>
      <img src={isFavorite ? 즐겨찾기채워짐 : 즐겨찾기} alt="즐겨찾기" />
    </StarButton>
  );
};

export default Favorite;

const StarButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  img {
    width: 24px;
    height: 24px;
  }
`;
