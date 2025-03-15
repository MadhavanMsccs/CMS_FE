// import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';
// import axios from 'axios';
// import Sidebar from './Sidebar';

// const AttendanceContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   margin-left: 300px;
// `;

// const Title = styled.h1`
//   margin-bottom: 20px;
//   font-size: 2rem;
//   color: #333;
// `;

// const StatsContainer = styled.div`
//   display: flex;
//   justify-content: space-around;
//   width: 100%;
//   margin-bottom: 20px;
// `;

// const Stat = styled.div`
//   font-size: 1.2rem;
//   color: #333;
// `;

// const ListContainer = styled.div`
//   display: flex;
//   justify-content: space-around;
//   width: 100%;
// `;

// const List = styled.div`
//   width: 45%;
// `;

// const ListTitle = styled.h2`
//   font-size: 1.5rem;
//   color: #333;
//   text-align: center;
// `;

// const ListItem = styled.div`
//   padding: 10px;
//   margin: 5px 0;
//   background-color: #f1f1f1;
//   border-radius: 4px;
//   text-align: center;
// `;

// const ButtonContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   gap: 10px;
//   margin-top: 10px;
// `;

// const AttendanceButton = styled.button`
//   padding: 5px 10px;
//   background-color: #4CAF50;
//   color: white;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;

//   &:hover {
//     background-color: #45a049;
//   }
// `;

// const AttendancePage = () => {
//   const [students, setStudents] = useState([]);
//   const [totalStudents, setTotalStudents] = useState(0);
//   const [presentCount, setPresentCount] = useState(0);
//   const [absentCount, setAbsentCount] = useState(0);
//   const [informedLeaveCount, setInformedLeaveCount] = useState(0);
//   const [attendance, setAttendance] = useState([]);
//   const [message, setMessage] = useState('');

//   useEffect(() => {
//     axios.get('http://localhost:4000/api/v1/students/attendance')
//       .then(response => {
//         setStudents(response.data.students);
//         setTotalStudents(response.data.totalStudents);
//         setPresentCount(response.data.presentCount);
//         setAbsentCount(response.data.absentCount);
//         setInformedLeaveCount(response.data.informedLeaveCount);
//       })
//       .catch(error => console.error('Error fetching attendance data:', error));
//   }, []);

//   const handleAttendance = (personId, name, status) => {
//     const existingRecord = attendance.find(record => record.personId === personId);
//     if (existingRecord) {
//       setAttendance(attendance.map(record =>
//         record.personId === personId
//           ? { ...record, status }
//           : record
//       ));
//     } else {
//       setAttendance([...attendance, { personId, name, status }]);
//     }
//   };

//   const submitAttendance = () => {
//     axios.post('http://localhost:4000/api/v1/attendance', { attendanceData: attendance })
//       .then(response => setMessage('Attendance submitted successfully'))
//       .catch(error => {
//         if (error.response && error.response.status === 400) {
//           setMessage('Attendance has already been submitted for today.');
//         } else {
//           console.error('Error submitting attendance:', error);
//         }
//       });
//   };

//   return (
//     <AttendanceContainer>
//       <Sidebar />
//       <Title>Attendance Page</Title>
//       {message && <p>{message}</p>}
//       <StatsContainer>
//         <Stat>Total Students: {totalStudents}</Stat>
//       </StatsContainer>
//       <ListContainer>
//         <List>
//           <ListTitle>Students</ListTitle>
//           {students.map((student, index) => (
//             <ListItem key={index}>
//               {student.name}
//               <ButtonContainer>
//                 <AttendanceButton onClick={() => handleAttendance(student._id, student.name, 'Present')}>Present</AttendanceButton>
//                 <AttendanceButton onClick={() => handleAttendance(student._id, student.name, 'Absent')}>Absent</AttendanceButton>
//                 <AttendanceButton onClick={() => handleAttendance(student._id, student.name, 'Informed Leave')}>Informed Leave</AttendanceButton>
//               </ButtonContainer>
//             </ListItem>
//           ))}
//         </List>
//       </ListContainer>
//       <AttendanceButton onClick={submitAttendance}>Submit Attendance</AttendanceButton>
//     </AttendanceContainer>
//   );
// };

// export default AttendancePage;



import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Sidebar from './Sidebar';

const AttendanceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 300px;
`;

const Title = styled.h1`
  margin-bottom: 20px;
  font-size: 2rem;
  color: #333;
`;

const StatsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-bottom: 20px;
`;

const Stat = styled.div`
  font-size: 1.2rem;
  color: #333;
`;

const ListContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const List = styled.div`
  width: 45%;
`;

const ListTitle = styled.h2`
  font-size: 1.5rem;
  color: #333;
  text-align: center;
`;

const ListItem = styled.div`
  padding: 10px;
  margin: 5px 0;
  background-color: #f1f1f1;
  border-radius: 4px;
  text-align: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
`;

const AttendanceButton = styled.button`
  padding: 5px 10px;
  background-color: ${props => (props.selected ? "#4CAF50" : "#ddd")};
  color: ${props => (props.selected ? "white" : "black")};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;

  &:hover {
    background-color: ${props => (props.selected ? "#45a049" : "#ccc")};
  }
`;

const AttendancePage = () => {
  const [students, setStudents] = useState([]);
  const [totalStudents, setTotalStudents] = useState(0);
  const [attendance, setAttendance] = useState({});
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:4000/api/v1/students/attendance')
      .then(response => {
        setStudents(response.data.students);
        setTotalStudents(response.data.totalStudents);
      })
      .catch(error => console.error('Error fetching attendance data:', error));
  }, []);

  const handleAttendance = (personId, name, status) => {
    setAttendance(prevState => ({
      ...prevState,
      [personId]: { name, status }
    }));
  };

  // const submitAttendance = () => {
  //   const attendanceData = Object.keys(attendance).map(personId => ({
  //     personId,
  //     name: attendance[personId].name,
  //     status: attendance[personId].status
  //   }));

  //   axios.post('http://localhost:4000/api/v1/attendance', { attendanceData })
  //     .then(response => setMessage('Attendance submitted successfully')) 
  //     .catch(error => {
  //       if (error.response && error.response.status === 400) {
  //         setMessage('Attendance has already been submitted for today.');
  //       } else {
  //         console.error('Error submitting attendance:', error);
  //       }
  //     });
  // };


  const submitAttendance = () => {
    const attendanceData = Object.keys(attendance).map(personId => ({
      personId,
      name: attendance[personId].name,
      status: attendance[personId].status
    }));
  
    axios.post('http://localhost:4000/api/v1/attendance', { attendanceData })
      .then(response => {
        setMessage('Attendance submitted successfully');
        alert('Attendance submitted successfully'); // Show alert box
      })
      .catch(error => {
        if (error.response && error.response.status === 400) {
          setMessage('Attendance has already been submitted for today.');
          alert('Attendance has already been submitted for today.');
        } else {
          console.error('Error submitting attendance:', error);
        }
      });
  };
  

  return (
    <AttendanceContainer>
      <Sidebar />
      <Title>Attendance Page</Title>
      {message && <p>{message}</p>}
      <StatsContainer>
        <Stat>Total Students: {totalStudents}</Stat>
      </StatsContainer>
      <ListContainer>
        <List>
          <ListTitle>Students</ListTitle>
          {students.map(student => (
            <ListItem key={student._id}>
              {student.name}
              <ButtonContainer>
                <AttendanceButton 
                  onClick={() => handleAttendance(student._id, student.name, 'Present')}
                  selected={attendance[student._id]?.status === 'Present'}
                >
                  Present {attendance[student._id]?.status === 'Present' && '✅'}
                </AttendanceButton>
                <AttendanceButton 
                  onClick={() => handleAttendance(student._id, student.name, 'Absent')}
                  selected={attendance[student._id]?.status === 'Absent'}
                >
                  Absent {attendance[student._id]?.status === 'Absent' && '✅'}
                </AttendanceButton>
                <AttendanceButton 
                  onClick={() => handleAttendance(student._id, student.name, 'Informed Leave')}
                  selected={attendance[student._id]?.status === 'Informed Leave'}
                >
                  Informed Leave {attendance[student._id]?.status === 'Informed Leave' && '✅'}
                </AttendanceButton>
              </ButtonContainer>
            </ListItem>
          ))}
        </List>
      </ListContainer>
      <AttendanceButton onClick={submitAttendance}>Submit Attendance</AttendanceButton>
    </AttendanceContainer>
  );
};

export default AttendancePage;
