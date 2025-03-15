// import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';
// import Sidebar from './Sidebar';
// import EventCalendar from './EventCalender';
// import Announcement from './Announcement';
// import Performance from './Performance';  
// import axios from 'axios';
// import {
//   AdminDashboardContainer,
//   Content,
//   TopContent,
//   BottomContent,
//   Section,
//   SectionTitle,
//   CardContainer,
//   Card,
//   CardTitle,
//   CardContent,
// } from '../../styles/DashboardStyles';

// // Define Dropdown and Option styles
// const DropdownContainer = styled.div`
//   margin-top: 10px;
//   text-align: center; /* Center align dropdown */
// `;

// const AdminDashboard = () => {
//   const [isOpen, setIsOpen] = useState(true); // Set to true to open sidebar by default
//   const [events, setEvents] = useState([]);
//   const [announcements, setAnnouncements] = useState([]);
//   const [studentPerformance, setStudentPerformance] = useState([]);
//   const [metrics, setMetrics] = useState({
//     totalStudents: 0,
//     totalTeachers: 0,
//     totalClasses: 0,
//   });
//   const [loadingMetrics, setLoadingMetrics] = useState(true);
//   const [errorMessage, setErrorMessage] = useState('');

//   useEffect(() => {
//     fetchMetrics();
//     fetchEvents();
//     fetchAnnouncements();
//     fetchStudentPerformance();
//   }, []);

//   const fetchMetrics = async () => {
//     setLoadingMetrics(true);
//     try {
//       const response = await axios.get('http://localhost:4000/api/v1/dashboard/metrics');
//       setMetrics(response.data);
//     } catch (error) {
//       setErrorMessage('Error fetching metrics');
//     } finally {
//       setLoadingMetrics(false);
//     }
//   };

//   const fetchEvents = async () => {
//     try {
//       const response = await axios.get('http://localhost:4000/api/v1/events/getall');
//       setEvents(response.data.events || []);
//     } catch (error) {
//       console.error('Error fetching events:', error);
//     }
//   };

//   const fetchAnnouncements = async () => {
//     try {
//       const response = await axios.get('http://localhost:4000/api/v1/announcements/getall');
//       setAnnouncements(response.data.announcements || []);
//     } catch (error) {
//       console.error('Error fetching announcements:', error);
//     }
//   };

//   const fetchStudentPerformance = async () => {
//     try {
//       const response = await axios.get('http://localhost:4000/api/v1/performance/getall');
//       setStudentPerformance(response.data.performance || []);
//     } catch (error) {
//       console.error('Error fetching student performance:', error);
//     }
//   };

//   return (
//     <AdminDashboardContainer>
//       <Sidebar isOpen={isOpen} />
//       <Content isOpen={isOpen}>
//         <TopContent>
//           <Section>
//             <SectionTitle>Overview</SectionTitle>
//             <CardContainer>
//               {loadingMetrics ? (
//                 <p>Loading metrics...</p>
//               ) : errorMessage ? (
//                 <p>{errorMessage}</p>
//               ) : (
//                 <>
//                   <Card>
//                     <CardTitle>Total Students</CardTitle>
//                     <CardContent>{metrics.totalStudents}</CardContent>
//                   </Card>
//                   <Card>
//                     <CardTitle>Total Teachers</CardTitle>
//                     <CardContent>{metrics.totalTeachers}</CardContent>
//                   </Card>
//                   <Card>
//                     <CardTitle>Total Classes</CardTitle>
//                     <CardContent>{metrics.totalClasses}</CardContent> {/* Displaying total classes as 4 */}
//                   </Card>
//                 </>
//               )}
//             </CardContainer>
//           </Section>

//           <Section>
//             <EventCalendar events={events} />
//           </Section>
//         </TopContent>

//         <BottomContent>
//           <Announcement announcements={announcements} />
//         </BottomContent>
//       </Content>
//     </AdminDashboardContainer>
//   );
// };

// export default AdminDashboard;




import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import EventCalendar from './EventCalender';
import Announcement from './Announcement';
// import Performance from './Performance';
import axios from 'axios';
import {
  AdminDashboardContainer,
  Content,
  TopContent,
  BottomContent,
  Section,
  SectionTitle,
  CardContainer,
  Card,
  CardTitle,
  CardContent,
} from '../../styles/DashboardStyles';

// Styled button
const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  &:hover {
    background-color: #0056b3;
  }
`;

// Styled table for displaying payments
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const TableHeader = styled.th`
  background-color: #007bff;
  color: white;
  padding: 10px;
  border: 1px solid #ddd;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const TableCell = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
  text-align: center;
`;

const AdminDashboard = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [events, setEvents] = useState([]);
  const [announcements, setAnnouncements] = useState([]);
  const [studentPerformance, setStudentPerformance] = useState([]);
  const [payments, setPayments] = useState([]);
  const [showPayments, setShowPayments] = useState(false);
  const [metrics, setMetrics] = useState({
    totalStudents: 0,
    totalTeachers: 0,
    totalClasses: 0,
  });
  const [loadingMetrics, setLoadingMetrics] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    fetchMetrics();
    fetchEvents();
    fetchAnnouncements();
    fetchStudentPerformance();
  }, []);

  const fetchMetrics = async () => {
    setLoadingMetrics(true);
    try {
      const response = await axios.get('http://localhost:4000/api/v1/dashboard/metrics');
      setMetrics(response.data);
    } catch (error) {
      setErrorMessage('Error fetching metrics');
    } finally {
      setLoadingMetrics(false);
    }
  };

  const fetchEvents = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/v1/events/getall');
      setEvents(response.data.events || []);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  const fetchAnnouncements = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/v1/announcements/getall');
      setAnnouncements(response.data.announcements || []);
    } catch (error) {
      console.error('Error fetching announcements:', error);
    }
  };

  const fetchStudentPerformance = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/v1/performance/getall');
      setStudentPerformance(response.data.performance || []);
    } catch (error) {
      console.error('Error fetching student performance:', error);
    }
  };

  const fetchPayments = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/payments');
      setPayments(response.data.payments || []);
      setShowPayments(true); // Show the payments table
    } catch (error) {
      console.error('Error fetching payments:', error);
    }
  };

  return (
    <AdminDashboardContainer>
      <Sidebar isOpen={isOpen} />
      <Content isOpen={isOpen}>
        <TopContent>
          <Section>
            <SectionTitle>Overview</SectionTitle>
            <CardContainer>
              {loadingMetrics ? (
                <p>Loading metrics...</p>
              ) : errorMessage ? (
                <p>{errorMessage}</p>
              ) : (
                <>
                  <Card>
                    <CardTitle>Total Students</CardTitle>
                    <CardContent>{metrics.totalStudents}</CardContent>
                  </Card>
                  <Card>
                    <CardTitle>Total Teachers</CardTitle>
                    <CardContent>{metrics.totalTeachers}</CardContent>
                  </Card>
                  <Card>
                    <CardTitle>Total Classes</CardTitle>
                    <CardContent>{metrics.totalClasses}</CardContent>
                  </Card>
                </>
              )}
            </CardContainer>
          </Section>

          <Section>
            <EventCalendar events={events} />
          </Section>
        </TopContent>

        <BottomContent>
          <Announcement announcements={announcements} />
        </BottomContent>

        {/* All Fees Button */}
        <Section>
          <SectionTitle>Fee Payments</SectionTitle>
          <Button onClick={fetchPayments}>All Fees</Button>
          
          {/* Payment Details Table */}
          {showPayments && payments.length > 0 && (
            <Table>
              <thead>
                <tr>
                  <TableHeader>Student ID</TableHeader>
                  <TableHeader>Name</TableHeader>
                  <TableHeader>Amount</TableHeader>
                  <TableHeader>Status</TableHeader>
                  <TableHeader>Date</TableHeader>
                </tr>
              </thead>
              <tbody>
                {payments.map((payment) => (
                  <TableRow key={payment._id}>
                    <TableCell>{payment.studentId}</TableCell>
                    <TableCell>{payment.name}</TableCell>
                    <TableCell>{payment.amount}</TableCell>
                    <TableCell>{payment.status}</TableCell>
                    <TableCell>{new Date(payment.createdAt).toLocaleDateString()}</TableCell>
                  </TableRow>
                ))}
              </tbody>
            </Table>
          )}

          {showPayments && payments.length === 0 && <p>No payment records found.</p>}
        </Section>
      </Content>
    </AdminDashboardContainer>
  );
};

export default AdminDashboard;
