import styled from 'styled-components';

export const PerformanceInfo = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

export const PerformanceGraphContainer = styled.div`
  margin-bottom: 20px;
  width: 100%;
  max-width: 600px; /* Adjust the max-width as needed */
  margin: 0 auto; /* Center the chart */
`;

export const TotalMarks = styled.div`
  font-weight: bold;
`;

export const PerformanceContainer = styled.div`
  display: flex;
  padding-left: 240px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding-left: 0;
  }
`;

export const Content = styled.div`
  flex: 1;
`;

export const PerformanceContent = styled.div`
  padding: 20px;
`;

export const PerformanceHeader = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  color: #007bff;
  text-align: center;
`;

export const SchoolPerformance = styled.div`
  margin-bottom: 20px;
  padding: 10px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const IndividualPerformance = styled.div`
  padding: 10px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const SidebarContainer = styled.div`
  flex: 0 0 250px; /* Sidebar width */
`;

export const PerformanceCard = styled.div`
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

export const StudentPerformanceItem = styled.div`
  padding: 10px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
`;
