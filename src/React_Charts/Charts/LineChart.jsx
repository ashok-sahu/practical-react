import React from "react";
import { Line } from "react-chartjs-2";

const LineChart = () => {
  const data = {
    labels: ["jan", "feb", "mar", "april", "may"],
    datasets: [
      {
        label: "sales for 2020(m)",
        data: [3, 2, 2, 1, 5],
        borderColor: "green",
        backgroundColor: "yellow",
        pointBackgroundColor: "black",
        pointBorderColor: "red",
      },
      {
        label: "sales for 2019(m)",
        data: [1, 3, 2, 2, 3],
        borderColor: "pink",
        backgroundColor: "blue",
        pointBackgroundColor: "orange",
        pointBorderColor: "cyan",
      },
    ],
  };
  const options = {
      title:{
          display:true,
          text:'line chart'
      },
      scales:{
          yAxes:[
              {
                  ticks:{
                      min:0,
                      max:6,
                      stepSize:1
                  }
              }
          ]
      }
  };
  return (
    <div style={{ width: "500px" }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
