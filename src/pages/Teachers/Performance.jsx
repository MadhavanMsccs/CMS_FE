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
        data: [25, 24, 26,25   ], // Random values
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
         
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          
        ],
        borderWidth: 1,
      },
    ],
  };

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
