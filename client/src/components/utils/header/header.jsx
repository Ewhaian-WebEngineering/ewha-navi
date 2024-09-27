import React from "react";
import { useNavigate } from "react-router-dom";
import "./header.css";
/*import GoBackIcon from "./icons/GoBackIcon.svg";*/

const Header = ({ title }) => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="header-bar">
     
      <div className="header-title">{title}</div>
      <div className="gobackbtn"></div>
    </div>
  );
};

export default Header;
