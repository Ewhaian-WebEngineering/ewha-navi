import React, { useState, useEffect } from "react";
import styled from "styled-components";
import 화살표 from "../../images/Search/화살표.svg";
import 즐겨찾기 from "../../images/Search/즐겨찾기.svg";
import 즐겨찾기채워짐 from "../../images/Search/즐겨찾기채워짐.svg"; // 채워진 별 이미지 추가
import 포공A from "./포-공A";
import shortpath from "../../images/Search/shortpath.png";


const Search = () => {
  const [selectedMode, setSelectedMode] = useState("도보");
  const [totalTime, setTotalTime] = useState(0); // 총 소요 시간 상태
  const [routeData, setRouteData] = useState(null); // 경로 데이터 상태
  const [isStarred, setIsStarred] = useState(false); // 별 표시 상태 추가

  // 도보 모드일 때 API 호출
  useEffect(() => {
    if (selectedMode === "도보") {
      fetch("API_URL") // 실제 API URL로 교체
        .then((response) => response.json())
        .then((data) => {
          setTotalTime(data.totalTime); // API 응답에서 총 소요 시간을 가져옴
          setRouteData(data.route); // API 응답에서 경로 데이터를 가져옴
        })
        .catch((error) => console.error("Error fetching data:", error));
    }
  }, [selectedMode]);

  const toggleStar = () => {
    setIsStarred((prev) => !prev); // 별 상태 토글
  };

  return (
    <MainWrapper>
      <SearchContainer>
        <img src={화살표} alt="화살표" />
        <div>
          <input type="search" placeholder="출발지 입력" />
          <input type="search" placeholder="도착지 입력" />
        </div>
      </SearchContainer>
      <Select>
        <div
          className={`도보 ${selectedMode === "도보" ? "selected" : ""}`}
          onClick={() => setSelectedMode("도보")}
        >
          도보
        </div>
        <div
          className={`셔틀 ${selectedMode === "셔틀" ? "selected" : ""}`}
          onClick={() => setSelectedMode("셔틀")}
        >
          셔틀
        </div>
      </Select>
      <Wrapper>
        {selectedMode === "도보" ? (
          <>
            <div className="time">총 소요시간: {totalTime} 분</div>
            <Star onClick={toggleStar}>
              <img src={isStarred ? 즐겨찾기채워짐 : 즐겨찾기} alt="즐겨찾기" />
            </Star>
            <Map></Map>
            <Route>
              <div className="container">
                {routeData ? (
                  routeData.map((route, index) => (
                    <포공A key={index} {...route} />
                  ))
                ) : (
                  <포공A></포공A>
                )}
              </div>
            </Route>
          </>
        ) : null}
      </Wrapper>
    </MainWrapper>
  );
};

export default Search;

// 나머지 styled-components는 동일

const MainWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SearchContainer = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  img {
    margin-right: 20px;
    margin-left: 10px;
  }
  input {
    width: 285px;
    height: 40px;
    padding: 10px;
    border: none;
    border-radius: 4px;
    background-color: #ededed;
    color: #b5b5b5;
    font-size: 16px;
    margin-bottom: 7px;
  }
`;

const Select = styled.div`
  width: 100%;
  height: 38px;
  display: flex;
  .selected {
    font-weight: bold;
    color: #0f3d2b; /* 선택된 항목의 색상 */
    border-bottom: solid #0f3d2b; /* 선택된 항목 하단 테두리 색상 */
  }
  div {
    cursor: pointer; /* 포인터 커서 추가 */
    width: 50%;
    text-align: center;
    color: #8e8e8e;
    border-bottom: solid #e4e4e4;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #0f3d2b;
  .time {
    margin-left: 30px;
    margin-top: 30px;
    align-self: flex-start;
    font-size: 15px;
    color: white;
  }
`;

const Star = styled.div`
  margin-right: 40px;
  transform: translateY(-10px);
  align-self: flex-end;
  cursor: pointer;
`;

const Map = styled.div`
  width: 324px;
  height: 235px;
  background-color: #e9ebee;
  background-image: url(${shortpath}); /* 배경 이미지 추가 */
  background-size: cover; /* 이미지를 div에 맞게 조정 */
  background-position: center; /* 이미지를 가운데 정렬 */
`;


const Route = styled.div`
  margin-top: 20px;
  border-top: 0.1px solid white;
  width: 327px;
  height: auto;
  display: flex;
  justify-content: center;
  .container {
    border-left: 0.1px solid white;
    width: 250px;
    height: auto;
  }
`;
