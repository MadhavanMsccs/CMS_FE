// // import React, { useState, useEffect } from 'react';
// // import styled from 'styled-components';
// // import axios from 'axios';
// // import Sidebar from './Sidebar';

// // const AttendanceContainer = styled.div`
// //   display: flex;
// //   flex-direction: column;
// //   align-items: center;
// //   margin-left: 300px;
// // `;

// // const Title = styled.h1`
// //   margin-bottom: 20px;
// //   font-size: 2rem;
// //   color: #333;
// // `;

// // const ListContainer = styled.div`
// //   display: flex;
// //   justify-content: space-around;
// //   width: 100%;
// // `;

// // const List = styled.div`
// //   width: 45%;
// // `;

// // const ListTitle = styled.h2`
// //   font-size: 1.5rem;
// //   color: #333;
// //   text-align: center;
// // `;

// // const ListItem = styled.div`
// //   padding: 10px;
// //   margin: 5px 0;
// //   background-color: #f1f1f1;
// //   border-radius: 4px;
// //   text-align: center;
// // `;

// // const ButtonContainer = styled.div`
// //   display: flex;
// //   justify-content: center;
// //   gap: 10px;
// //   margin-top: 10px;
// // `;

// // const AttendanceButton = styled.button`
// //   padding: 5px 10px;
// //   background-color: #4CAF50;
// //   color: white;
// //   border: none;
// //   border-radius: 4px;
// //   cursor: pointer;

// //   &:hover {
// //     background-color: #45a049;
// //   }
// // `;

// // const AttendancePage = () => {
// //   const [students, setStudents] = useState([]);
// //   const [teachers, setTeachers] = useState([]);
// //   const [attendance, setAttendance] = useState([]);
// //   const [message, setMessage] = useState('');

// //   useEffect(() => {
// //     axios.get('http://localhost:4000/api/v1/students/getall')
// //       .then(response => setStudents(response.data.students))
// //       .catch(error => console.error('Error fetching students:', error));

// //     axios.get('http://localhost:4000/api/v1/teachers/getall')
// //       .then(response => setTeachers(response.data.teachers))
// //       .catch(error => console.error('Error fetching teachers:', error));
// //   }, []);

// //   const handleAttendance = (personId, name, role, status) => {
// //     const existingRecord = attendance.find(record => record.personId === personId);
// //     if (existingRecord) {
// //       setAttendance(attendance.map(record =>
// //         record.personId === personId
// //           ? { ...record, status }
// //           : record
// //       ));
// //     } else {
// //       setAttendance([...attendance, { personId, name, status, role }]);
// //     }
// //   };

// //   const submitAttendance = () => {
// //     axios.post('http://localhost:4000/api/v1/attendance', { attendanceData: attendance })
// //       .then(response => setMessage('Attendance submitted successfully'))
// //       .catch(error => {
// //         if (error.response && error.response.status === 400) {
// //           setMessage('Attendance has already been submitted for today.');
// //         } else {
// //           console.error('Error submitting attendance:', error);
// //         }
// //       });
// //   };

// //   return (
// //     <AttendanceContainer>
// //       <Sidebar />
// //       <Title>Attendance Page</Title>
// //       {message && <p>{message}</p>}
// //       <ListContainer>
// //         <List>
// //           <ListTitle>Students</ListTitle>
// //           {students.map((student, index) => (
// //             <ListItem key={index}>
// //               {student.name}
// //               <ButtonContainer>
// //                 <AttendanceButton onClick={() => handleAttendance(student._id, student.name, 'student', 'Present')}>Present</AttendanceButton>
// //                 <AttendanceButton onClick={() => handleAttendance(student._id, student.name, 'student', 'Absent')}>Absent</AttendanceButton>
// //                 <AttendanceButton onClick={() => handleAttendance(student._id, student.name, 'student', 'Informed Leave')}>Informed Leave</AttendanceButton>
// //               </ButtonContainer>
// //             </ListItem>
// //           ))}
// //         </List>
// //         <List>
// //           <ListTitle>Teachers</ListTitle>
// //           {teachers.map((teacher, index) => (
// //             <ListItem key={index}>
// //               {teacher.name}
// //               <ButtonContainer>
// //                 <AttendanceButton onClick={() => handleAttendance(teacher._id, teacher.name, 'teacher', 'Present')}>Present</AttendanceButton>
// //                 <AttendanceButton onClick={() => handleAttendance(teacher._id, teacher.name, 'teacher', 'Absent')}>Absent</AttendanceButton>
// //                 <AttendanceButton onClick={() => handleAttendance(teacher._id, teacher.name, 'teacher', 'Informed Leave')}>Informed Leave</AttendanceButton>
// //               </ButtonContainer>
// //             </ListItem>
// //           ))}
// //         </List>
// //       </ListContainer>
// //       <AttendanceButton onClick={submitAttendance}>Submit Attendance</AttendanceButton>
// //     </AttendanceContainer>
// //   );
// // };

// // export default AttendancePage;





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
//   background-color: ${props => (props.selected ? "#4CAF50" : "#ddd")};
//   color: ${props => (props.selected ? "white" : "black")};
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;
//   display: flex;
//   align-items: center;
//   gap: 5px;

//   &:hover {
//     background-color: ${props => (props.selected ? "#45a049" : "#ccc")};
//   }
// `;

// const AttendancePage = () => {
//   const [students, setStudents] = useState([]);
//   const [teachers, setTeachers] = useState([]);
//   const [attendance, setAttendance] = useState({});
//   const [message, setMessage] = useState('');

//   useEffect(() => {
//     axios.get('http://localhost:4000/api/v1/students/getall')
//       .then(response => setStudents(response.data.students))
//       .catch(error => console.error('Error fetching students:', error));

//     axios.get('http://localhost:4000/api/v1/teachers/getall')
//       .then(response => setTeachers(response.data.teachers))
//       .catch(error => console.error('Error fetching teachers:', error));
//   }, []);

//   const handleAttendance = (personId, name, role, status) => {
//     setAttendance(prevState => ({
//       ...prevState,
//       [personId]: { name, role, status }
//     }));
//   };

//   const submitAttendance = () => {
//     const attendanceData = Object.keys(attendance).map(personId => ({
//       personId,
//       name: attendance[personId].name,
//       role: attendance[personId].role,
//       status: attendance[personId].status
//     }));

//     axios.post('http://localhost:4000/api/v1/attendance', { attendanceData })
//       .then(response => {
//         setMessage('Attendance submitted successfully');
//         alert('Attendance submitted successfully'); // Alert box
//       })
//       .catch(error => {
//         if (error.response && error.response.status === 400) {
//           setMessage('Attendance has already been submitted for today.');
//           alert('Attendance has already been submitted for today.');
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
//       <ListContainer>
//         <List>
//           <ListTitle>Students</ListTitle>
//           {students.map(student => (
//             <ListItem key={student._id}>
//               {student.name}
//               <ButtonContainer>
//                 <AttendanceButton
//                   onClick={() => handleAttendance(student._id, student.name, 'student', 'Present')}
//                   selected={attendance[student._id]?.status === 'Present'}
//                 >
//                   Present {attendance[student._id]?.status === 'Present' && '✅'}
//                 </AttendanceButton>
//                 <AttendanceButton
//                   onClick={() => handleAttendance(student._id, student.name, 'student', 'Absent')}
//                   selected={attendance[student._id]?.status === 'Absent'}
//                 >
//                   Absent {attendance[student._id]?.status === 'Absent' && '✅'}
//                 </AttendanceButton>
//                 <AttendanceButton
//                   onClick={() => handleAttendance(student._id, student.name, 'student', 'Informed Leave')}
//                   selected={attendance[student._id]?.status === 'Informed Leave'}
//                 >
//                   Informed Leave {attendance[student._id]?.status === 'Informed Leave' && '✅'}
//                 </AttendanceButton>
//               </ButtonContainer>
//             </ListItem>
//           ))}
//         </List>
//         <List>
//           <ListTitle>Teachers</ListTitle>
//           {teachers.map(teacher => (
//             <ListItem key={teacher._id}>
//               {teacher.name}
//               <ButtonContainer>
//                 <AttendanceButton
//                   onClick={() => handleAttendance(teacher._id, teacher.name, 'teacher', 'Present')}
//                   selected={attendance[teacher._id]?.status === 'Present'}
//                 >
//                   Present {attendance[teacher._id]?.status === 'Present' && '✅'}
//                 </AttendanceButton>
//                 <AttendanceButton
//                   onClick={() => handleAttendance(teacher._id, teacher.name, 'teacher', 'Absent')}
//                   selected={attendance[teacher._id]?.status === 'Absent'}
//                 >
//                   Absent {attendance[teacher._id]?.status === 'Absent' && '✅'}
//                 </AttendanceButton>
//                 <AttendanceButton
//                   onClick={() => handleAttendance(teacher._id, teacher.name, 'teacher', 'Informed Leave')}
//                   selected={attendance[teacher._id]?.status === 'Informed Leave'}
//                 >
//                   Informed Leave {attendance[teacher._id]?.status === 'Informed Leave' && '✅'}
//                 </AttendanceButton>
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

const AllAttendanceButton = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #0056b3;
  }
`;

const AttendanceList = styled.div`
  margin-top: 20px;
  width: 80%;
  background: #fff;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
`;

const AttendancePage = () => {
  const [students, setStudents] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [attendance, setAttendance] = useState({});
  const [message, setMessage] = useState('');
  const [allAttendance, setAllAttendance] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/api/v1/students/getall')
      .then(response => setStudents(response.data.students))
      .catch(error => console.error('Error fetching students:', error));

    axios.get('http://localhost:4000/api/v1/teachers/getall')
      .then(response => setTeachers(response.data.teachers))
      .catch(error => console.error('Error fetching teachers:', error));
  }, []);

  const handleAttendance = (personId, name, role, status) => {
    setAttendance(prevState => ({
      ...prevState,
      [personId]: { name, role, status }
    }));
  };

  const submitAttendance = () => {
    const attendanceData = Object.keys(attendance).map(personId => ({
      personId,
      name: attendance[personId].name,
      role: attendance[personId].role,
      status: attendance[personId].status
    }));

    axios.post('http://localhost:4000/api/v1/attendance', { attendanceData })
      .then(response => {
        setMessage('Attendance submitted successfully');
        alert('Attendance submitted successfully'); // Alert box
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

  const fetchAllAttendance = () => {
    axios.get('http://localhost:4000/api/v1/attendance/stats')
      .then(response => {
        setAllAttendance(response.data.attendance);
      })
      .catch(error => {
        console.error('Error fetching all attendance:', error);
      });
  };

  return (
    <AttendanceContainer>
      <Sidebar />
      <Title>Attendance Page</Title>
      {message && <p>{message}</p>}
      <ListContainer>
        <List>
          <ListTitle>Students</ListTitle>
          {students.map(student => (
            <ListItem key={student._id}>
              {student.name}
              <ButtonContainer>
                <AttendanceButton
                  onClick={() => handleAttendance(student._id, student.name, 'student', 'Present')}
                  selected={attendance[student._id]?.status === 'Present'}
                >
                  Present {attendance[student._id]?.status === 'Present' && '✅'}
                </AttendanceButton>
                <AttendanceButton
                  onClick={() => handleAttendance(student._id, student.name, 'student', 'Absent')}
                  selected={attendance[student._id]?.status === 'Absent'}
                >
                  Absent {attendance[student._id]?.status === 'Absent' && '✅'}
                </AttendanceButton>
                <AttendanceButton
                  onClick={() => handleAttendance(student._id, student.name, 'student', 'Informed Leave')}
                  selected={attendance[student._id]?.status === 'Informed Leave'}
                >
                  Informed Leave {attendance[student._id]?.status === 'Informed Leave' && '✅'}
                </AttendanceButton>
              </ButtonContainer>
            </ListItem>
          ))}
        </List>
        <List>
          <ListTitle>Teachers</ListTitle>
          {teachers.map(teacher => (
            <ListItem key={teacher._id}>
              {teacher.name}
              <ButtonContainer>
                <AttendanceButton
                  onClick={() => handleAttendance(teacher._id, teacher.name, 'teacher', 'Present')}
                  selected={attendance[teacher._id]?.status === 'Present'}
                >
                  Present {attendance[teacher._id]?.status === 'Present' && '✅'}
                </AttendanceButton>
                <AttendanceButton
                  onClick={() => handleAttendance(teacher._id, teacher.name, 'teacher', 'Absent')}
                  selected={attendance[teacher._id]?.status === 'Absent'}
                >
                  Absent {attendance[teacher._id]?.status === 'Absent' && '✅'}
                </AttendanceButton>
                <AttendanceButton
                  onClick={() => handleAttendance(teacher._id, teacher.name, 'teacher', 'Informed Leave')}
                  selected={attendance[teacher._id]?.status === 'Informed Leave'}
                >
                  Informed Leave {attendance[teacher._id]?.status === 'Informed Leave' && '✅'}
                </AttendanceButton>
              </ButtonContainer>
            </ListItem>
          ))}
        </List>
      </ListContainer>
      <AttendanceButton onClick={submitAttendance}>Submit Attendance</AttendanceButton>
      <AllAttendanceButton onClick={fetchAllAttendance}>All Attendance</AllAttendanceButton>

      {allAttendance.length > 0 && (
        <AttendanceList>
          <h2>All Attendance Records</h2>
          {allAttendance.map(record => (
            <p key={record.id}>
              <strong>Date:</strong> {new Date(record.date).toLocaleDateString()} | 
              <strong> Status:</strong> {record.status}
            </p>
          ))}
        </AttendanceList>
      )}
    </AttendanceContainer>
  );
};

export default AttendancePage;
