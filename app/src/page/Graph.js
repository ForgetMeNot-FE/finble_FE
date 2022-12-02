import React, { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import KOSPI from '../assets/KOSPI.json';

let labels = [];

const data = {
  labels: labels,
  datasets: [
    {
      label: '코스피 지수',
      data: KOSPI.map((item) => item.data),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: '내 포트폴리오',
      data: KOSPI.map((item) => item.data + 50),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

const Graph = () => {
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    labels = [];
    let lastYear = 0;

    KOSPI.map((item) => {
      const year = parseInt(item.date / 10000).toString();
      if (year != lastYear) {
        labels.push(parseInt(item.date / 10000)).toString();
        lastYear = year;
      } else {
        labels.push('\t');
      }
    });

    console.log(labels);

    setFlag(true);
  }, []);

  return (
    <>
      {/* {flag ? <Line options={options} data={data} /> : <></>} */}
      <Line options={options} data={data} />
    </>
  );
};
export default Graph;

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: '테스트 개발 v1',
    },
  },
};

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
