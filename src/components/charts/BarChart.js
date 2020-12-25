import React from "react";
import { Bar } from "react-chartjs-2";

function BarChart(props) {
  return (
    <div className="mt-7 w-1/2">
      <Bar data={props.data} width={props.width} height={props.height} />
    </div>
  );
}

export default BarChart;
