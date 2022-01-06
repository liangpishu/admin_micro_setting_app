import React, { CSSProperties } from "react";
import { Carousel } from "antd";

const contentStyle: CSSProperties = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const Dashboard = () => {
  return (
    <Carousel effect="fade">
      <div>
        <h3 style={contentStyle}>
          Dashboard 1
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>Dashboard 2</h3>
      </div>
      <div>
        <h3 style={contentStyle}>Dashboard 3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>Dashboard 4</h3>
      </div>
    </Carousel>
  );
};

export default Dashboard;
