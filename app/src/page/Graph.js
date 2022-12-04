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
import styled from 'styled-components';

const Graph = () => {
  const [flag, setFlag] = useState(false);
  const [labels, setLabel] = useState([]);

  useEffect(() => {
    setLabel([]);
    let lastYear = 0;

    KOSPI.map((item) => {
      const year = parseInt(item.date / 10000).toString();
      let newLabel = labels;

      if (year != lastYear) {
        newLabel.push(parseInt(item.date / 10000)).toString();
        lastYear = year;
      } else {
        newLabel.push('\t');
      }
      setLabel(newLabel);
    });

    console.log(labels);
    setFlag(true);
  }, []);

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

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

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

  return (
    <>
      <Container>
        {/* <Line options={options} data={data} /> */}
        {flag ? <Line options={options} data={data} /> : <></>}
      </Container>
    </>
  );
};
export default Graph;

const Container = styled.div`
  overflow-x: scroll;
`;
