import React from "react";
import { Chart } from "react-google-charts";
import './index.css';

const styles = {
  dial: {
    width: `auto`,
    height: `auto`,
    color: "#000",
    border: "0.5px solid #fff",
    padding: "2px"
  },
  title: {
    fontSize: "1em",
    color: "#000"
  }
};

const Barometer = ({ id, value, title, limit_l, limit_r }) => {
  return (
    <div id="gauge" style={styles.dial}>
      <Chart
        height={200}
        chartType="Gauge"
        loader={<div></div>}
        data={[
          ["Label", "Value"],
          [title, Number(value)]
        ]}
        options={{
          greenFrom: Number(limit_l),
          greenTo: Number(limit_r),
          minorTicks: 5,
          min: 0,
          max: 100
        }}
      />
    </div>
  );
};

export default Barometer;