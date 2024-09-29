import styled from "styled-components";

export const HeaderBar = styled.div`
position: sticky;
    bottom: 0;
    top: 0;
    right: 0;
    height: 7vh;
    background-color: #FFFF;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1px 20px;

    max-width: 390px;
    margin-left: auto;
    margin-right: auto;
    z-index : 100;
`;
export const GoBackBtn = styled.div`
    width: 8px;
    padding: 0;
    margin: 0;
    cursor: pointer;
`; 

export const EmptyBox = styled.div`
    width: 8px;
    padding: 0;
    margin: 0;
`;

export const ReviewBarName = styled.div`
    font-size: 15px;
    color: #0F3D2B;
    font-family: "Pretendard-Bold";
    font-weight: 700;
    font-style: normal;
    font-size: 19px;
    line-height: 23px;
`;

