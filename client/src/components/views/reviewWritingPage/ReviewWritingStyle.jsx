import styled from "styled-components";

export const ReviewContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #0F3D2B;
    max-width: 415px;
    height: 100dvh;
    margin-left: auto;
    margin-right: auto;
`;

export const ReviewWriteBox = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 10px;
`;

export const WriteInputBox = styled.input`
    font-family: "Pretendard";
    width: 246px;
    height: 40px;
`;

export const ReviewForm = styled.form`
    display: flex;
    justify-content: center;
`;

export const WriteUploadBtn = styled.button`
    color: #FFFF;
    width: 84px;
    height: 40px;
    padding: 0;
    margin: 0;
    background: linear-gradient(360deg, #116846 0%, #358868 100%);
    border-radius: 0px 4px 4px 0px;
    border: 0;
`;

export const ReviewHr = styled.hr`
    margin-top : 20px;
    border: 1px solid rgba(255, 255, 255, 0.3);
`;

