import React, { useState, useEffect } from "react";
import styled from "styled-components";
import 화살표 from "../../images/Search/화살표.svg";
import 즐겨찾기 from "../../images/Search/즐겨찾기.svg";
import 즐겨찾기채워짐 from "../../images/Search/즐겨찾기채워짐.svg"; // 채워진 별 이미지 추가

const Search = () => {
  const [selectedMode, setSelectedMode] = useState("도보");
  const [totalTime, setTotalTime] = useState(0);
  const [routeData, setRouteData] = useState(null);
  const [isStarred, setIsStarred] = useState(false);
  const [departureLocation, setDepartureLocation] = useState("");
  const [arrivalLocation, setArrivalLocation] = useState("");

  const locations = [
    "기숙사",
    "학문관",
    "공대",
    "정문",
    "법학관",
    "경영대",
    "중도",
    "ecc",
    "포관",
    "생활관",
    "후문",
    "학관",
    "종과",
    "연협",
    "음대",
    "체육관",
    "후문",
  ];

  // 출발지와 도착지에 따른 소요 시간
  const travelTimes = {
    "정문-기숙사": 16,
    "기숙사-정문": 16,
    "후문-기숙사": 15,
    "기숙사-후문": 15,
    "정문-학문관": 8,
    "학문관-정문": 8,
    "포관-공대": 5,
    "공대-포관": 5, // 반대 방향 추가
    "경영대-중도": 12,
    "중도-경영대": 12, // 반대 방향 추가
    "공대-법학관": 12,
    "법학관-공대": 12, // 반대 방향 추가
    "공대-경영대": 9,
    "경영대-공대": 9, // 반대 방향 추가
    "포관-중도": 3,
    "중도-포관": 3, // 반대 방향 추가
    "학관-ecc": 6,
    "ecc-학관": 6, // 반대 방향 추가
    "경영대-ecc": 5,
    "ecc-경영대": 5, // 반대 방향 추가
    "ecc-생활관": 6,
    "생활관-ecc": 6, // 반대 방향 추가
    "포관-학관": 2,
    "학관-포관": 2, // 반대 방향 추가
    "포관-종과": 4,
    "종과-포관": 4, // 반대 방향 추가
    "공대-연협": 4,
    "연협-공대": 4, // 반대 방향 추가
    "종과-음대": 12,
    "음대-종과": 12, // 반대 방향 추가
    "기숙사-음대": 8,
    "음대-기숙사": 8, // 반대 방향 추가
    "경영대-생활관": 5,
    "생활관-경영대": 5, // 반대 방향 추가
    "학관-공대": 6,
    "공대-학관": 6, // 반대 방향 추가
    "체육관-학관": 4,
    "학관-체육관": 4, // 반대 방향 추가
    "ecc-중도": 4,
    "중도-ecc": 4, // 반대 방향 추가
  };

  const getArrivalOptions = (departure) => {
    switch (departure) {
      case "정문":
        return ["기숙사", "학문관"];
      case "학문관":
        return ["정문"];
      case "후문":
        return ["기숙사"];
      case "포관":
        return ["중도", "공대"];
      case "공대":
      case "중도":
        return ["포관", "법학관", "경영대", "연협", "학관"];
      case "경영대":
        return ["중도", "공대", "ecc", "생활관"];
      case "법학관":
        return ["공대"];
      case "중도":
        return ["포관", "경영대", "ecc"];
      case "학관":
        return ["ecc", "포관", "체육관"];
      case "ecc":
        return ["학관", "경영대", "생활관", "중도"];
      case "생활관":
        return ["ecc", "체육관", "경영대"];
      case "종과":
        return ["포관", "음대"];
      case "연협":
        return ["공대"];
      case "음대":
        return ["종과", "기숙사"];
      case "체육관":
        return ["학관"];
      case "기숙사":
        return ["음대", "정문", "후문"];
      default:
        return [];
    }
  };


  const arrivalOptions = getArrivalOptions(departureLocation);

  const calculateTotalTime = (departure, arrival) => {
    const key = `${departure}-${arrival}`;
    return travelTimes[key] || 0;
  };

  useEffect(() => {
    if (departureLocation && arrivalLocation) {
      const time = calculateTotalTime(departureLocation, arrivalLocation);
      setTotalTime(time);
    } else {
      setTotalTime(0);
    }
  }, [departureLocation, arrivalLocation]);

  const toggleStar = () => {
    setIsStarred((prev) => !prev);
  };

  const swapLocations = () => {
    const temp = departureLocation;
    setDepartureLocation(arrivalLocation);
    setArrivalLocation(temp);
  };

  return (
    <MainWrapper>
      <SearchContainer>
        <img src={화살표} alt="화살표" onClick={swapLocations} />
        <div>
          <SelectLocation
            value={departureLocation}
            onChange={(e) => {
              setDepartureLocation(e.target.value);
              setArrivalLocation("");
            }}
          >
            <option value="" disabled>출발지 선택</option>
            {locations.map((location, index) => (
              <option key={index} value={location}>{location}</option>
            ))}
          </SelectLocation>
          <SelectArrival
            value={arrivalLocation}
            onChange={(e) => setArrivalLocation(e.target.value)}
            disabled={!departureLocation}
          >
            <option value="" disabled>도착지 선택</option>
            {arrivalOptions.map((location, index) => (
              <option key={index} value={location}>{location}</option>
            ))}
          </SelectArrival>
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
        <div className="time">총 소요시간: {totalTime} 분</div>
        <Star onClick={toggleStar}>
          <img src={isStarred ? 즐겨찾기채워짐 : 즐겨찾기} alt="즐겨찾기" />
        </Star>

        <Map></Map>

        <TableContainer>
  <StyledTable>
    <thead>
      <tr>
        <th>약어</th>
        <th>건물 이름</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>경영</td>
        <td>이화 신세계관</td>
      </tr>
      <tr>
        <td>공학A</td>
        <td>아산공학관</td>
      </tr>
      <tr>
        <td>공학B</td>
        <td>신공학관</td>
      </tr>
      <tr>
        <td>공대강당</td>
        <td>아산공학관 지하1층 강당</td>
      </tr>
      <tr>
        <td>교A</td>
        <td>교육관 A동</td>
      </tr>
      <tr>
        <td>교B</td>
        <td>교육관 B동</td>
      </tr>
      <tr>
        <td>교문</td>
        <td>이화 삼성교육문화관</td>
      </tr>
      <tr>
        <td>교회301</td>
        <td>대학교회 3층 예배실</td>
      </tr>
      <tr>
        <td>국</td>
        <td>국제교육관</td>
      </tr>
      <tr>
        <td>법</td>
        <td>법학관</td>
      </tr>
      <tr>
        <td>본</td>
        <td>본관</td>
      </tr>
      <tr>
        <td>생활</td>
        <td>생활환경관</td>
      </tr>
      <tr>
        <td>약A</td>
        <td>약학관 A동</td>
      </tr>
      <tr>
        <td>음</td>
        <td>음악관</td>
      </tr>
      <tr>
        <td>음B119</td>
        <td>음악관 지하 시청각실</td>
      </tr>
      <tr>
        <td>의</td>
        <td>목동 의학연구동</td>
      </tr>
      <tr>
        <td>조형A</td>
        <td>조형예술관 A동</td>
      </tr>
      <tr>
        <td>조형B</td>
        <td>조형예술관 B동</td>
      </tr>
      <tr>
        <td>조형C</td>
        <td>조형예술관 C동</td>
      </tr>
      <tr>
        <td>정보B01</td>
        <td>이화 SK텔레콤관 지하1층</td>
      </tr>
      <tr>
        <td>종A</td>
        <td>종합과학관 A동</td>
      </tr>
      <tr>
        <td>종B</td>
        <td>종합과학관 B동</td>
      </tr>
      <tr>
        <td>체</td>
        <td>체육관 A동</td>
      </tr>
      <tr>
        <td>체</td>
        <td>체육관 B동</td>
      </tr>
      <tr>
        <td>체</td>
        <td>체육관 C동</td>
      </tr>
      <tr>
        <td>캠</td>
        <td>이화캠퍼스복합단지(ECC)</td>
      </tr>
      <tr>
        <td>포</td>
        <td>이화 포스코관</td>
      </tr>
      <tr>
        <td>학</td>
        <td>학관</td>
      </tr>
      <tr>
        <td>헬</td>
        <td>헬렌관</td>
      </tr>
      <tr>
        <td>R.H.</td>
        <td>학관 5층 레크레이션홀</td>
      </tr>
    </tbody>
  </StyledTable>
</TableContainer>
      </Wrapper>
    </MainWrapper>
  );
};

export default Search;

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
    cursor: pointer;
  }
`;

const SelectLocation = styled.select`
  width: 285px;
  height: 40px;
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #ededed;
  color: #b5b5b5;
  font-size: 16px;
  margin-bottom: 7px;
`;

const SelectArrival = styled.select`
  width: 285px;
  height: 40px;
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #ededed;
  color: #b5b5b5;
  font-size: 16px;
  margin-bottom: 7px;
`;

const Select = styled.div`
  width: 100%;
  height: 38px;
  display: flex;
  .selected {
    font-weight: bold;
    color: #0f3d2b;
    border-bottom: solid #0f3d2b;
  }
  div {
    cursor: pointer;
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
`;

const TableContainer = styled.div`
  margin-top: 20px;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 90%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  th, td {
    padding: 12px;
    border: 1px solid #ddd;
    text-align: center;
  }
  th {
    background-color: #f2f2f2;
    font-weight: bold;
  }
  td {
    background-color: #fff;
  }
`;