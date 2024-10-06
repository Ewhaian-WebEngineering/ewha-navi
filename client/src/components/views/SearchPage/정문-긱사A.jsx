import styled from "styled-components";
import 출발 from "../../images/Search/출발.svg";
import 도착 from "../../images/Search/도착.svg";

const 정문긱사A = () => {
  return (
    <Wrapper>
      <Build>
        <img src={출발} alt="출발" />
        <div className="text">정문 출발</div>
      </Build>
      <Build>
        <div className="dot"></div>
        <div className="text">ECC 엘리베이터</div>
      </Build>
      <Build>
        <div className="dot"></div>
        <div className="text">헬렌관 계단</div>
      </Build>
      <Build>
        <div className="dot"></div>
        <div className="text">법학관 엘리베이터</div>
      </Build>
      <Build>
        <div className="dot"></div>
        <div className="text">법학관 4층</div>
      </Build>
      <Build>
        <img src={도착} alt="도착" />
        <div className="text">한우리집 도착</div>
      </Build>
    </Wrapper>
  );
};

export default 정문긱사A;

const Wrapper = styled.div`
  color: white;
  position: relative;
  padding: 20px;
  transform: translateX(-14px);

  .text {
    margin-left: 30px;
  }

  .dot {
    background-color: white;
    border-radius: 100%;
    width: 7px;
    height: 7px;
    position: absolute;
    left: -10px; /* Adjust the position as needed */
  }
  img {
    position: absolute;
    left: -15px;
  }
`;

const Build = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
  position: relative; /* Relative positioning for absolute child elements */
`;
