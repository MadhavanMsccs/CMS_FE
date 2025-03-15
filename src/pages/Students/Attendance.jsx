// AttendanceSection.js
import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import { AttendanceContainer, SidebarContainer, Content, AttendanceHeader, AttendanceMetrics } 
  from '../../styles/AttendanceStyles'; 

const AttendanceSection = () => {
  const [metrics, setMetrics] = useState({ totalStudents: 0, totalTeachers: 0 });

  // Fetch metrics data from backend
  const fetchMetricsData = async () => {
    try {
      const response = await fetch('/api/v1/dashboard/metrics'); // Adjust the endpoint as necessary
      const data = await response.json();
      if (response.ok) {
        setMetrics(data); // Assuming the response has the fields totalStudents and totalTeachers
      } else {
        console.error(data.message);
      }
    } catch (error) {
      console.error('Error fetching metrics data:', error);
    }
  };

  useEffect(() => {
    fetchMetricsData();
  }, []);

  return (
    <AttendanceContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <Content>
        <AttendanceHeader>Attendance Metrics</AttendanceHeader>
        <AttendanceMetrics>
          <div>Total Students: {metrics.totalStudents}</div>
          <div>Total Teachers: {metrics.totalTeachers}</div>
        </AttendanceMetrics>
      </Content>
    </AttendanceContainer>
  );
};

export default AttendanceSection;
