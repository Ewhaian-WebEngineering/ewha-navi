import React, { useState, useEffect } from "react";
import styled from "styled-components";
import 화살표 from "../../images/Search/화살표.svg";
import 즐겨찾기 from "../../images/Search/즐겨찾기.svg";
import 즐겨찾기채워짐 from "../../images/Search/즐겨찾기채워짐.svg"; // 채워진 별 이미지 추가
import BuildName from "./BuildName";
import 포공A from "./포-공A";
import 정문학문관 from "./정문-학문관";

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
      setRouteData({ departure: departureLocation, arrival: arrivalLocation }); // routeData 설정
    } else {
      setTotalTime(0);
      setRouteData(null); // routeData 리셋
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
            <option value="" disabled>
              출발지 선택
            </option>
            {locations.map((location, index) => (
              <option key={index} value={location}>
                {location}
              </option>
            ))}
          </SelectLocation>
          <SelectArrival
            value={arrivalLocation}
            onChange={(e) => setArrivalLocation(e.target.value)}
            disabled={!departureLocation}
          >
            <option value="" disabled>
              도착지 선택
            </option>
            {arrivalOptions.map((location, index) => (
              <option key={index} value={location}>
                {location}
              </option>
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
        {selectedMode === "도보" ? (
          routeData ? (
            // routeData가 있을 때 SearchedInfo 렌더링
            <SearchedInfo>
              <Searched>
                <div className="time">총 소요시간: {totalTime} 분</div>
                <Star onClick={toggleStar}>
                  <img
                    src={isStarred ? 즐겨찾기채워짐 : 즐겨찾기}
                    alt="즐겨찾기"
                  />
                </Star>
              </Searched>
              <Divider></Divider>
              <Map>
                {departureLocation === "포관" && arrivalLocation === "공대" && (
                  <포공A />
                )}
                {departureLocation === "정문" &&
                  arrivalLocation === "학문관" && <정문학문관 />}
              </Map>
            </SearchedInfo>
          ) : (
            <BuildName /> // routeData가 없을 때 BuildName 렌더링
          )
        ) : (
          <div /> // 셔틀 모드일 때 비어있는 상태로 렌더링
        )}
      </Wrapper>
      <Footer></Footer>
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
  width: 100%;
  min-height: 812px;
  background-color: #0f3d2b;
`;
const SearchedInfo = styled.div`
  width: 90%;

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
  width: 80%;
  border-left: 1px solid white;
`;
const Searched = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Divider = styled.div`
  border-top: 1px solid white;
`;
const Footer = styled.div`
  background-color: #0f3d2b;
  width: 100%;
  height: 100px;
`;
