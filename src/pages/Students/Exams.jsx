import React, { useRef } from 'react';
import Sidebar from './Sidebar';
import { Bar } from 'react-chartjs-2'; 
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import {
  ExamContainer,
  SidebarContainer,
  Content,
  ExamHeader,
  ExamResultsContainer,
  ExamSubject,
  ExamResult,
  ExamChartContainer,
} from '../../styles/ExamStyles'; 

// Register the components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ExamSection = () => {
  const chartRef = useRef(null);

  // Sample exam results data
  const examResultsData = {
    subjects: ['Frontend', 'Backend', 'Data Science', 'MongoDB'],
    results: [80, 75, 90, 85] // Sample results out of 100
  };

  // Bar chart data
  const barChartData = {
    labels: examResultsData.subjects,
    datasets: [
      {
        label: 'Exam Results',
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)', // Frontend color
          'rgba(54, 162, 235, 0.6)', // Backend color
          'rgba(255, 206, 86, 0.6)', // Data Science color
          'rgba(75, 192, 192, 0.6)', // MongoDB color
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)', // Frontend border color
          'rgba(54, 162, 235, 1)', // Backend border color
          'rgba(255, 206, 86, 1)', // Data Science border color
          'rgba(75, 192, 192, 1)', // MongoDB border color
        ],
        borderWidth: 1,
        hoverBackgroundColor: [
          'rgba(255, 99, 132, 0.8)', // Frontend hover color
          'rgba(54, 162, 235, 0.8)', // Backend hover color
          'rgba(255, 206, 86, 0.8)', // Data Science hover color
          'rgba(75, 192, 192, 0.8)', // MongoDB hover color
        ],
        hoverBorderColor: [
          'rgba(255, 99, 132, 1)', // Frontend hover border color
          'rgba(54, 162, 235, 1)', // Backend hover border color
          'rgba(255, 206, 86, 1)', // Data Science hover border color
          'rgba(75, 192, 192, 1)', // MongoDB hover border color
        ],
        data: examResultsData.results
      }
    ]
  };

  // Chart options
  const chartOptions = {
    scales: {
      y: {
        type: 'linear',
        beginAtZero: true,
        max: 100
      }
    }
  };

  return (
    <ExamContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <Content>
        <ExamHeader>Exam Results</ExamHeader>
        <ExamResultsContainer>
          {examResultsData.subjects.map((subject, index) => (
            <div key={index}>
              <ExamSubject>{subject}</ExamSubject>
              <ExamResult>Score: {examResultsData.results[index]}%</ExamResult>
            </div>
          ))}
          <ExamChartContainer>
            <Bar
              ref={chartRef}
              data={barChartData}
              options={chartOptions}
            />
          </ExamChartContainer>
        </ExamResultsContainer>
      </Content>
    </ExamContainer>
  );
};

export default ExamSection;
