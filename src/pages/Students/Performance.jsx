import React from 'react';
import Sidebar from './Sidebar';
import { Chart as ChartJS, ArcElement } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import {
  PerformanceContainer,
  Content,
  PerformanceContent,
  PerformanceHeader,
  PerformanceGraphContainer,
} from '../../styles/PerformanceStyles';

// Register the ArcElement
ChartJS.register(ArcElement);

const CheckPerformanceSection = () => {
  // Generate random data for the pie chart
  const data = {
    labels: ['MSc CS', 'MCA', 'BSc CS', 'BCA'],
    datasets: [
      {
        label: 'Student Performance',
        data: [25, 24, 26, 25], // Random values
        backgroundColor: [
          'rgba(255, 159, 64, 0.6)', // MSc CS color
          'rgba(153, 102, 255, 0.6)', // MCA color
          'rgba(255, 99, 132, 0.6)', // BSc CS color
          'rgba(75, 192, 192, 0.6)',  // BCA color
        ],
        borderColor: [
          'rgba(255, 159, 64, 1)', // MSc CS border color
          'rgba(153, 102, 255, 1)', // MCA border color
          'rgba(255, 99, 132, 1)', // BSc CS border color
          'rgba(75, 192, 192, 1)',  // BCA border color
        ],
        borderWidth: 1,
      },
    ],
  };

  // Log the data being passed to the Pie chart
  console.log('Pie Chart Data:', data);

  return (
    <PerformanceContainer>
      <Sidebar />
      <Content>
        <PerformanceContent>
          <PerformanceHeader>Performance Overview</PerformanceHeader>
          <PerformanceGraphContainer>
            <Pie data={data} />
          </PerformanceGraphContainer>
        </PerformanceContent>
      </Content>
    </PerformanceContainer>
  );
};

export default CheckPerformanceSection;
