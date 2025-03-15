import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const classesWithSubjects = {
  MSc: ['Data Science', 'Machine Learning', 'Node JS', 'Tableau'],
  MCA: ['React jS', 'Node JS', 'React Native', 'MongoDB'],
  BSc: ['Java', 'C++', 'Python', 'Cloud Computing'],
  BCA: ['Web Development', 'Mobile Apps Development', 'Cloud Computing'],
};

const ProvideExamMarks = () => {
  const [classes] = useState(Object.keys(classesWithSubjects));
  const [selectedClass, setSelectedClass] = useState('');
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState('');
  const [subject, setSubject] = useState('');
  const [marks, setMarks] = useState('');

  useEffect(() => {
    if (selectedClass) {
      fetchStudents(selectedClass);
    }
  }, [selectedClass]);

  // Fetch students based on the selected class
  const fetchStudents = async (className) => {
    try {
      const response = await axios.get(`http://localhost:4000/api/v1/examMarks/${className}`);
      setStudents(response.data);
    } catch (error) {
      console.error('Error fetching students:', error); // Log the error for debugging
      toast.error('Failed to fetch students.');
    }
  };

  // Handle adding marks
  const handleProvideMarks = async () => {
    try {
      const newMark = {
        studentId: selectedStudent,
        className: selectedClass,
        subject,
        marks: parseInt(marks),
      };
      await axios.post('http://localhost:4000/api/v1/examMarks/provide', newMark);
      toast.success('Marks added successfully!');
      setSelectedStudent('');
      setSubject('');
      setMarks('');
    } catch (error) {
      console.error('Error adding marks:', error); // Log the error for debugging
      toast.error('Failed to add marks.');
    }
  };

  return (
    <div>
      <h2>Provide Exam Marks</h2>
      <div>
        <label>Class:</label>
        <select value={selectedClass} onChange={(e) => setSelectedClass(e.target.value)}>
          <option value="">Select Class</option>
          {classes.map((cls, index) => (
            <option key={index} value={cls}>{cls}</option>
          ))}
        </select>
      </div>

      <div>
        <label>Students:</label>
        <select
          value={selectedStudent}
          onChange={(e) => setSelectedStudent(e.target.value)}
          disabled={!selectedClass}
        >
          <option value="">Select Student</option>
          {students.map((student) => (
            <option key={student._id} value={student._id}>{student.name}</option>
          ))}
        </select>
      </div>

      <div>
        <label>Subject:</label>
        <select value={subject} onChange={(e) => setSubject(e.target.value)} disabled={!selectedClass}>
          <option value="">Select Subject</option>
          {selectedClass && classesWithSubjects[selectedClass].map((sub, index) => (
            <option key={index} value={sub}>{sub}</option>
          ))}
        </select>
      </div>

      <div>
        <label>Marks:</label>
        <input
          type="number"
          value={marks}
          onChange={(e) => setMarks(e.target.value)}
          placeholder="Enter Marks"
          required
        />
      </div>

      <button onClick={handleProvideMarks}>Add Marks</button>
      <ToastContainer />
    </div>
  );
};

export default ProvideExamMarks;
