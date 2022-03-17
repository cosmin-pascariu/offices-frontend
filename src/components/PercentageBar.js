import React from "react";
import "react-circular-progressbar/dist/styles.css";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";

const Percentagebar = () => {
  const percentage = 66;
  return (
    <div style={{ padding: "40px 40px 40px 40px" }}>
      <Styling>
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          styles={buildStyles({
            textColor: "#3c3c3c",
            pathColor: "#3c3c3c",
            trailColor: "#f8f8f8",
          })}
        />
      </Styling>
    </div>
  );
};

export default Percentagebar;

function Styling(props) {
  return (
    <div style={{ marginTop: "-30px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p style={{ color: "#3c3c3c", fontSize: "20px", paddingRight: "50px" }}>
          Remote Percentage
        </p>
        <div style={{ minWidth: "80px", maxWidth: "100px" }}>
          {props.children}
        </div>
        <div>
          <h3 className="h5" style={{ userSelect: "none" }}>
            {props.label}
          </h3>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}
