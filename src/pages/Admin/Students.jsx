import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';
import {
  StudentsContainer,
  Content,
  StudentsContent,
  StudentsHeader,
  StudentTable,
  StudentTableHeader,
  StudentTableBody,
  StudentTableRow,
  StudentTableCell,
} from '../../styles/StudentsStyles';

const Students = () => {
  const [newStudent, setNewStudent] = useState({ name: '', registrationNumber: '', email: '', className: '' });
  const [studentsByClass, setStudentsByClass] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:4000/api/v1/students/getall');
      const studentsData = response.data.students;

      // Group students by class
      const groupedStudents = studentsData.reduce((acc, student) => {
        const { className } = student; // Assuming each student has a className property
        if (!acc[className]) {
          acc[className] = [];
        }
        acc[className].push(student);
        return acc;
      }, {});

      setStudentsByClass(groupedStudents);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching students:', error);
      setError('Failed to fetch students. Please try again.');
      setLoading(false);
    }
  };

  const handleAddStudent = async (e) => {
    e.preventDefault();
    if (newStudent.name.trim() !== '' && newStudent.registrationNumber.trim() !== '' && newStudent.email.trim() !== '' && newStudent.className.trim() !== '') {
      try {
        const response = await axios.post('http://localhost:4000/api/v1/register/student', newStudent);
        const addedStudent = { ...newStudent, _id: response.data._id };
        
        // Update studentsByClass with the newly added student
        setStudentsByClass(prev => {
          const className = newStudent.className;
          return {
            ...prev,
            [className]: prev[className] ? [...prev[className], addedStudent] : [addedStudent],
          };
        });

        // Reset the input fields
        setNewStudent({ name: '', registrationNumber: '', email: '', className: '' });
      } catch (error) {
        console.error('Error adding student:', error);
        setError('Failed to add student. Please try again.');
      }
    }
  };

  return (
    <StudentsContainer>
      <Sidebar />
      <Content>
        <StudentsContent>
          <StudentsHeader>Students</StudentsHeader>
          <div>Total Students: {Object.values(studentsByClass).flat().length}</div> {/* Display total number of students */}
          {loading ? (
            <div>Loading...</div>
          ) : error ? (
            <div>{error}</div>
          ) : (
            Object.entries(studentsByClass).map(([className, students]) => (
              <div key={className}>
                
                <StudentTable>
                  <StudentTableHeader>
                    <tr>
                      <StudentTableCell>Name</StudentTableCell>
                      {/* <StudentTableCell>Registration Number</StudentTableCell> */}
                      <StudentTableCell>Email</StudentTableCell>
                      <StudentTableCell>Class</StudentTableCell> 
                    </tr>
                  </StudentTableHeader>
                  <StudentTableBody>
                    {students.length === 0 ? (
                      <StudentTableRow>
                        <StudentTableCell colSpan="4">No students found</StudentTableCell> {/* Adjusted colspan */}
                      </StudentTableRow>
                    ) : (
                      students.map((student) => (
                        <StudentTableRow key={student._id}>
                          <StudentTableCell>{student.name}</StudentTableCell>
                          {/* <StudentTableCell>{student.registrationNumber || student.rollNo}</StudentTableCell> */}
                          <StudentTableCell>{student.email}</StudentTableCell>
                          <StudentTableCell>{student.class}</StudentTableCell> 
                        </StudentTableRow>
                      ))
                    )}
                  </StudentTableBody>
                </StudentTable>
              </div>
            ))
          )}
        </StudentsContent>
      </Content>
    </StudentsContainer>
  );
};

export default Students;
