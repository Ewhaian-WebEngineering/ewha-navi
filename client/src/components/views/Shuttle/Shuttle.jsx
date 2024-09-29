import React, { useState } from 'react';
import './Shuttle.css'; // 스타일을 위한 CSS 파일

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
      { route: '연구협력관 노선', time: '07:50-21:00', interval: '배차간격: 5-10분' },
      { route: '한우리집 노선', time: '08:25-16:05', interval: '배차간격: 20분' },
    ],
    포관: [
      { route: '연구협력관 노선', time: '07:00-21:00', interval: '배차간격: 7-15분' },
      { route: '한우리집 노선', time: '08:00-15:30', interval: '배차간격: 20분' },
    ],
    공대삼거리: [
      { route: '연구협력관 노선', time: '07:20-21:30', interval: '배차간격: 10분' },
      { route: '한우리집 노선', time: '08:30-16:10', interval: '배차간격: 25분' },
    ],
    한우리집: [
      { route: '연구협력관 노선', time: '07:55-21:10', interval: '배차간격: 15분' },
      { route: '한우리집 노선', time: '08:30-15:45', interval: '배차간격: 20분' },
    ],
  };

  // 세분화된 시간표 데이터
  const busTimetable = [
    {
      route: '연구협력관',
      timeRanges: [
        { range: '08:03~11:13', times: '03,08,13,23,28,33,43,48,53' },
        { range: '11:23~12:13', times: '03,13,23,33,43,53' },
        { range: '12:14~13:12', times: '점심시간 운휴' },
        { range: '13:13~15:53', times: '03,13,23,33,43,53' },
        { range: '16:03~19:13', times: '03,08,13,23,28,33,43,48,53' }
      ]
    },
    {
      route: '한우리집',
      timeRanges: [
        { range: '08:38~10:58', times: '18,38,58' },
        { range: '11:18~13:37', times: '점심시간 운휴' },
        { range: '13:38~16:18', times: '18,38,58' }
      ]
    }
  ];

  return (
    <div className="shuttle-container">
      <h2 className="shuttle-title">셔틀 시간표</h2>

      {/* 출발지 Dropdown */}
      <div className="dropdown-container">
        <button className="departure-button" onClick={toggleDropdown}>
          {selectedDeparture}
        </button>
        <div className={`departure-dropdown ${isDropdownOpen ? 'open' : ''}`}>
          {['정문', '포관', '공대삼거리', '한우리집'].map((departure) => (
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
        {shuttleRoutes[selectedDeparture].map((route, index) => (
          <div className="route" key={index}>
            <p><strong>{route.route}:</strong> {route.time} <span>{route.interval}</span></p>
          </div>
        ))}
      </div>

      {/* 버스 시간표 */}
      <div className="bus-timetable">
        {busTimetable.map((bus, index) => (
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
        ))}
      </div>
    </div>
  );
};

export default Shuttle;
