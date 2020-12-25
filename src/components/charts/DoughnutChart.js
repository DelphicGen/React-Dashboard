import { Doughnut } from "react-chartjs-2";

import React from "react";

function DoughnutChart(props) {
  return (
    <div className="mt-7 w-1/2">
      <Doughnut data={props.data} width={props.width} height={props.height} />
    </div>
  );
}

export default DoughnutChart;
