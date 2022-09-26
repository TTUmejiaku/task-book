import React from "react";
import "./charts.scss";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { chartData } from "../../data";

const Charts = () => {
  return (
    <>
      <section className="charts">
        <h3 className="title">Progress chart</h3>
        <ResponsiveContainer width="100%" aspect={2 / 1} className="chart">
          <LineChart
            width={500}
            height={300}
            data={chartData}
            margin={{
              top: 5,
              right: 30,
              left: 0,
              bottom: 5,
            }}
          >
            <CartesianGrid />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="ActiveTasks"
              stroke="#29a19c"
              strokeWidth="3"
              activeDot={{ r: 8 }}
            />
            <Line
              type="monotone"
              dataKey="CompletedTasks"
              stroke="#2ba7a2"
              strokeWidth="2"
            />
          </LineChart>
        </ResponsiveContainer>
      </section>
    </>
  );
};

export default Charts;
