import React from 'react';
import { Chart, Axis, Tooltip, Line, Point } from 'bizcharts';

const LineChartExample = () => {
  const data = [
    { date: '2020-01-01', value: 300 },
    { date: '2020-01-02', value: 400 },
    { date: '2020-01-03', value: 350 },
    { date: '2020-01-04', value: 500 },
    { date: '2020-01-05', value: 450 }
  ];

  return (
    <div>
      <h2>Line Chart Example</h2>
      <Chart height={400} data={data} autoFit>
        <Axis name="date" />
        <Axis name="value" />
        <Tooltip />
        <Line position="date*value" size={2} color="#1890FF" />
        <Point position="date*value" size={4} shape="circle" color="#1890FF" />
      </Chart>
    </div>
  );
};

export default LineChartExample;
