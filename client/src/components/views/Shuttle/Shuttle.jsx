import React, { useState } from 'react';
//import './Shuttle.css'; 
import styled from 'styled-components';

import Header from "../../utils/header/header";






// styled-components 정의

const ShuttleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #0f3d2b;
  width: 100vw; /* 전체 화면 너비로 확장 */
  max-width: 100%; /* 최대 너비 제한 해제 */
  margin: 0;
  padding: 0;
  height: 100vh;
`;

const HeaderContainer = styled.div`
  display: flex; /* 플렉스 레이아웃 */
  justify-content: center; /* 중앙 정렬 */
  align-items: center;
  width: 100%; /* 전체 너비 */
  background-color: #ffffff; /* 흰색 배경 */
  padding: 15px 0;
  position: fixed; /* 위치 고정 */
  top: 0;
  left: 0;
  z-index: 100;
`;

const DropdownContainer = styled.div`
  width: 90%;
  margin: 70px 0 15px; /* 고정된 헤더를 피하기 위한 여백 */
  background-color: #ffffff;
  border-radius: 10px;
  padding: 0;
  position: relative;
`;

const DepartureButton = styled.button`
  background-color: #ffffff;
  color: #2b3d33;
  border: none;
  padding: 10px 20px;
  border-radius: 10px;
  width: 100%;
  text-align: left;
  font-size: 1em;

  &::after {
    content: '∨';
    float: right;
  }
`;

const DepartureDropdown = styled.div`
  background-color: #ffffff;
  position: absolute;
  width: 100%;
  border-radius: 10px;
  top: 45px;
  left: 0;
  z-index: 10;
  display: ${(props) => (props.open ? 'block' : 'none')};
`;

const DepartureItem = styled.div`
  padding: 10px 20px;
  color: #2b3d33;
  cursor: pointer;

  &:hover {
    background-color: #d0e8dc;
  }
`;

const DirectionToggle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin: 15px 0;
  gap: 0;
`;

const DirectionButton = styled.button`
  background-color: ${(props) => (props.active ? '#a3c9b9' : '#ffffff')};
  color: #2b3d33;
  border: none;
  padding: 10px 20px;
  border-radius: 10px;
  cursor: pointer;
  font-weight: ${(props) => (props.active ? 'bold' : 'normal')};
`;

const RouteInfo = styled.div`
  display: flex;
  align-items: center;
  background-color: #ffffff;
  width: 95%;
  border-radius: 7px;
  margin-bottom: 15px;
`;

const DepartureLocation = styled.div`
  width: auto;
  padding: 10px 20px;
  background-color: #a3c9b9;
  border-radius: 0px;
  text-align: center;
  margin: 0;
  height: 100%;
  display: flex;
  align-items: center;
`;

const Routes = styled.div`
  width: 80%;
  padding: 0 15px;
`;



const RouteDescription = styled.div`
  padding: 10px;
  background-color: #f0f0f0;
  border-radius: 7px;
  margin-bottom: 10px;
  font-size: 0.9em;
`;

const BusTimetable = styled.div`
  margin-top: 20px;
`;

const RouteTable = styled.div`
  background-color: #ffffff;
  padding: 5px;
  border-radius: 2px;
  margin-bottom: 15px;

  h3 {
    font-size: 1.2em;
    font-weight: bold;
    color: #2b3d33;
    margin-bottom: 10px;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 15px;
  background-color: #ffffff;

  th, td {
    padding: 8px;
    text-align: center;
    border: 1px solid #d0e8dc;
  }

  th {
    background-color: #a3c9b9;
    color: white;
  }

  td {
    background-color: #ffffff;
  }

  tbody tr:nth-child(even) {
    background-color: #f5f7f6;
  }
`;








//styled component코드 


const Shuttle = () => {
  const [isUpward, setIsUpward] = useState(true); // 상행/하행 토글 상태 관리
  const [selectedDeparture, setSelectedDeparture] = useState('정문'); // 출발지 선택 상태 관리
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // 드롭다운 상태 관리

  const handleDepartureClick = (departure) => {
    setSelectedDeparture(departure); // 선택한 출발지 업데이트
    setIsDropdownOpen(false); // 드롭다운 닫기
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen); // 드롭다운 열기/닫기 토글
  };

  const shuttleRoutes = {
    정문: [
      { route: '연구협력관 노선(상행기준)', time: '07:50-21:00', interval: '배차간격: 5-10분' },
      { route: '한우리집 노선(상행기준)', time: '08:25-16:05', interval: '배차간격: 20분' },
    ],
    포관: [
      { route: '연구협력관 노선(상행기준)', time: '07:52-19:02', interval: '배차간격: 5-10분' },
      { route: '한우리집 노선(상행기준)', time: '08:27-16:07', interval: '배차간격: 20분' },
    ],
    공대삼거리: [
      { route: '연구협력관 노선(상행기준)', time: '07:54-19:04', interval: '배차간격: 5-10분' },
      { route: '한우리집 노선(상행기준)', time: '08:29-16:09', interval: '배차간격: 20분' },
    ],
    한우리집: [
      { route: '연구협력관 노선(상행기준)', time: '07:55-21:10', interval: '배차간격: 15분' },
      { route: '한우리집 노선(상행기준)', time: '08:30-15:45', interval: '배차간격: 20분' },
    ],
    기숙사삼거리: [
      { route: '연구협력관 노선(하행기준)', time: '08:01-19:11', interval: '배차간격: 5-10분' }
    ],
  };

  // 각 출발지에 따른 상행/하행 시간표 
  const timetableData = {
    정문: {
      upward: [
        {
          route: '연구협력관',
          timeRanges: [
            { range: '07:50~11:00', times: '00, 10, 15, 20, 30, 35, 40, 50, 55' },
            { range: '11:10~11:50', times: '00, 10, 20, 30, 40, 50' },
            { range: '11:51~12:59', times: '점심시간 운휴' },
            { range: '13:00~15:40', times: '00, 10, 20, 30, 40, 50' },
            { range: '15:50~21:00', times: '00, 10, 15, 20, 30, 35, 40, 50, 55' },
          ]
        },
        {
          route: '한우리집',
          timeRanges: [
            { range: '08:25~10:45', times: '05, 25, 45' },
            { range: '11:05~13:20', times: '점심시간 운휴' },
            { range: '13:25~16:05', times: '05, 25, 45' }
          ]
        }
      ],
      downward: [], // 하행은 없는듯
    },
    포관: {
      upward: [
        {
          route: '연구협력관',
          timeRanges: [
            { range: '07:52~11:52', times: '02, 12, 17, 22, 32, 37, 42, 52, 57' },
            { range: '11:12~11:52', times: '02, 12, 22, 32, 42, 52' },
            { range: '11:53~13:01', times: '점심시간 운휴' },
            { range: '13:02~15:42', times: '02, 12, 17, 22, 32, 42, 52' },
            { range: '15:52~19:02', times: '02, 12, 17, 22, 32, 37, 42, 52, 57' }
          ]
        },
        {
          route: '한우리집',
          timeRanges: [
            { range: '08:27~10:47', times: '07, 27, 47' },
            { range: '11:05~13:20', times: '점심시간 운휴' },
            { range: '13:27~16:07', times: '07, 27, 47' }
          ]
        }
      ],
      downward: [
        {
          route: '연구협력관',
          timeRanges: [
            { range: '08:05~11:15', times: '05, 10, 15, 20, 30, 35, 40, 50, 55' },
            { range: '11:16~12:05', times: '05, 15, 25, 35, 45, 55' },
            { range: '12:10~13:10', times: '점심시간 운휴' },
            { range: '13:15~15:55', times: '05, 15, 25, 35, 45, 55' },
            { range: '16:00~19:15', times: '05, 15, 25, 30, 35, 45, 55' }
          ]
        },
        {
          route: '한우리집',
          timeRanges: [
            { range: '08:40~11:00', times: '00, 20, 40' },
            { range: '11:00~13:30', times: '점심시간 운휴' },
            { range: '13:40~16:20', times: '00, 20, 40' }
          ]
        }
      ],
    },
    공대삼거리: {
      upward: [
        {
          route: '연구협력관',
          timeRanges: [
            { range: '07:54~11:54', times: '04, 14, 19, 23, 34, 39, 44, 54, 59' },
            { range: '11:14~11:54', times: '04, 14, 24, 34, 44, 54' },
            { range: '12:00~12:59', times: '점심시간 운휴' },
            { range: '13:04~15:44', times: '04, 14, 24, 34, 44, 54' },
            { range: '15:54~19:04', times: '04, 14, 19, 23, 34, 39, 44, 54, 59' }
          ]
        },
        {
          route: '한우리집',
          timeRanges: [
            { range: '08:29~10:49', times: '09, 29, 49' },
            { range: '11:05~13:20', times: '점심시간 운휴' },
            { range: '13:29~16:09', times: '09, 29, 49' }
          ]
        }
      ],
      downward: [
        {
          route: '연구협력관',
          timeRanges: [
            { range: '08:03~11:13', times: '03, 08, 13, 23, 28, 33, 43, 48, 53' },
            { range: '11:23~12:13', times: '03, 13, 23, 33, 43, 53' },
            { range: '12:14~13:12', times: '점심시간 운휴' },
            { range: '13:13~15:53', times: '03, 13, 23, 33, 43, 53' },
            { range: '16:03~19:13', times: '03, 08, 13, 23, 28, 33, 43, 48, 53' }
          ]
        },
        {
          route: '한우리집',
          timeRanges: [
            { range: '08:38~10:58', times: '18, 38, 58' },
            { range: '11:18~13:37', times: '점심시간 운휴' },
            { range: '13:38~16:18', times: '18, 38, 58' }
          ]
        }
      ]
    },
    기숙사삼거리: {
      upward: [], // 기숙사 삼거리 상행 없는듯?
      downward: [
        {
          route: '연구협력관',
          timeRanges: [
            { range: '08:01~11:11', times: '01, 06, 11, 21, 26, 31, 41, 46, 51' },
            { range: '11:21~12:11', times: '01, 11, 21, 31, 41, 51' },
            { range: '12:12~13:10', times: '점심시간 운휴' },
            { range: '13:11~15:51', times: '01, 11, 21, 31, 41, 51' },
            { range: '16:01~19:11', times: '01, 06, 11, 21, 26, 31, 41, 46, 51' }
          ]
        }
      ]
    },
    한우리집: {
      upward: [], // 한우리 상행은 없는듯>?
      downward: [
        {
          route: '한우리집',
          timeRanges: [
            { range: '08:35~10:55', times: '15, 35, 55' },
            { range: '11:05~13:20', times: '점심시간 운휴' },
            { range: '13:35~16:15', times: '15, 35, 55' }
          ]
        }
      ]
    }
  };

  const busTimetable = timetableData[selectedDeparture]?.[isUpward ? 'upward' : 'downward'] || [];

  return (
    
    <ShuttleContainer>
    {/* Header 영역 */}
    <HeaderContainer>
       <Header title="셔틀시간표 BUS STOP" />
    </HeaderContainer>

    {/* 출발지 Dropdown */}
    <DropdownContainer>
      <DepartureButton onClick={toggleDropdown}>{selectedDeparture}</DepartureButton>
      <DepartureDropdown open={isDropdownOpen}>
        {Object.keys(shuttleRoutes).map((departure) => (
          <DepartureItem key={departure} onClick={() => handleDepartureClick(departure)}>
            {departure}
          </DepartureItem>
        ))}
      </DepartureDropdown>
    </DropdownContainer>

    {/* 상행/하행 Toggle */}
    <DirectionToggle>
      <DirectionButton active={isUpward} onClick={() => setIsUpward(true)}>
        상행
      </DirectionButton>
      <DirectionButton active={!isUpward} onClick={() => setIsUpward(false)}>
        하행
      </DirectionButton>
    </DirectionToggle>

    {/* 노선 정보 */}
    <RouteInfo>
      <DepartureLocation>{selectedDeparture}</DepartureLocation>
      <Routes>
        {shuttleRoutes[selectedDeparture].map((route, index) => (
          <RouteDescription key={index}>
            <strong>{route.route}:</strong> {route.time} <span>({route.interval})</span>
          </RouteDescription>
        ))}
      </Routes>
    </RouteInfo>

    {/* 버스 시간표 */}
    <BusTimetable>
      {busTimetable.length > 0 ? (
        busTimetable.map((bus, index) => (
          <RouteTable key={index}>
            <h3>{bus.route}</h3>
            <Table>
              <thead>
                <tr>
                  <th>시간대</th>
                  <th>시간</th>
                </tr>
              </thead>
              <tbody>
                {bus.timeRanges.map((range, idx) => (
                  <tr key={idx}>
                    <td>{range.range}</td>
                    <td>{range.times}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </RouteTable>
        ))
      ) : (
        <p>해당 방향에 대한 시간표가 없습니다.</p>
      )}
    </BusTimetable>
  </ShuttleContainer>
);
};

export default Shuttle;