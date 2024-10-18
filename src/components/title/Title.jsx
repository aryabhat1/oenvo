import React from "react";
import "./Title.css";

const Title = ({Title, subTitle}) => {
    return (
        <div className="title">
            <p>{Title}</p>
            <h2>{subTitle}</h2>
        </div>
    );
};

export default Title;
