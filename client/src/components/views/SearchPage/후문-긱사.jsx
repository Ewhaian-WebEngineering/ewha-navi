import styled from "styled-components";
import 출발 from "../../images/Search/출발.svg";
import 도착 from "../../images/Search/도착.svg";

const 후문긱사 = () => {
  return (
    <Wrapper>
      <Build>
        <img src={출발} alt="출발" />
        <div className="text">후문 출발</div>
      </Build>
      <Build>
        <div className="dot"></div>
        <div className="text">학생문화관</div>
      </Build>
      <Build>
        <div className="dot"></div>
        <div className="text">학생문화관 2층 출구</div>
      </Build>
      <Build>
        <div className="dot"></div>
        <div className="text">포스코관 지하1층</div>
      </Build>
      <Build>
        <div className="dot"></div>
        <div className="text">포스코관 4층</div>
      </Build>
      <Build>
        <div className="dot"></div>
        <div className="text">종합과학관 지하1층</div>
      </Build>
      <Build>
        <div className="dot"></div>
        <div className="text">종합과학관 4층</div>
      </Build>
      <Build>
        <img src={도착} alt="도착" />
        <div className="text">기숙사 도착</div>
      </Build>
    </Wrapper>
  );
};

export default 후문긱사;

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
