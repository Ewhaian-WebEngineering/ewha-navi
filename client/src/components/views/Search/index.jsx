import styled from "styled-components";

const Search = () => {
  return (
    <MainWrapper>
      <SearchContainer>
        <input type="search" placeholder="출발지 입력" />
        <input type="search" placeholder="도착지 입력" />
      </SearchContainer>
      <Wrapper>
        <div className="time">총 소요시간분</div>
        <Map></Map>
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

  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 80%;
  background-color: #0f3d2b;
`;
const Map = styled.div`
  width: 324px;
  height: 139px;
  background-color: #e9ebee;
`;
