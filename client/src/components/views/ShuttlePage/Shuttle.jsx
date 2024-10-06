import React, { useState } from 'react';
import Header from "../../utils/header/Header";
import './Shuttle.css'; 


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

  const busTimetable = timetableData[selectedDeparture][isUpward ? 'upward' : 'downward'] || [];

  return (
    
    <div className="shuttle-container">

    <Header title="셔틀시간표 BUS STOP" />


      

      {/* 출발지 Dropdown */}
      <div className="dropdown-container">
        <button className="departure-button" onClick={toggleDropdown}>
          {selectedDeparture}
        </button>
        <div className={`departure-dropdown ${isDropdownOpen ? 'open' : ''}`}>
          {['정문', '포관', '공대삼거리', '한우리집', '기숙사삼거리'].map((departure) => (
            <div key={departure} onClick={() => handleDepartureClick(departure)}>
              {departure}
            </div>
          ))}
        </div>
      </div>

      {/* 상행/하행 Toggle */}
      <div className="direction-toggle">
        <button
          className={isUpward ? 'active' : ''}
          onClick={() => setIsUpward(true)}
        >
          상행
        </button>
        <button
          className={!isUpward ? 'active' : ''}
          onClick={() => setIsUpward(false)}
        >
          하행
        </button>
      </div>

   

      {/* 노선 정보 */}
<div className="route-info">
  {/* 출발장소 표시 */}
  <div className="departure-location">
    <strong>{selectedDeparture}</strong> {/* 선택한 출발지 출력 */}
  </div>

  {/* 노선 정보 표시 */}
  <div className="routes">
    {shuttleRoutes[selectedDeparture].map((route, index) => (
      <div className="route" key={index}>
        <p><strong>{route.route}:</strong> {route.time} <span>{route.interval}</span></p>
      </div>
    ))}
  </div>
</div>




      {/* 버스 시간표 */}
      <div className="bus-timetable">
        {busTimetable.length > 0 ? (
          busTimetable.map((bus, index) => (
            <div key={index} className="route-table">
              <h3>{bus.route}</h3>
              <table>
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
              </table>
            </div>
          ))
        ) : (
          <p>.</p>
        )}
      </div>
    </div>
  );
};

export default Shuttle;
