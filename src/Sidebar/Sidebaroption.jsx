import React from "react";
import "../Sidebar/sidebar.css";

const Sidebaroption = ({active,text,Icon}) => {
  return <>
  <div className={`Sidebaroption ${active && `Sidebaroption--active`}`  }>
    <Icon/>
    <h2>{text}</h2>
    </div>
    </>
};

export default Sidebaroption;
