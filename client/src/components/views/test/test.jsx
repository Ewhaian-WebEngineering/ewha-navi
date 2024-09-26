import styled  from "styled-components";
import React from "react";

const TestDiv = styled.div`
 width : 30px;
 height : 30px;
 border : 1px solid black;
 background-color : pink;
 
`;

const Test = ()=>{
    return <>
    <TestDiv>안녕</TestDiv>
    </>
}

export default Test;