import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  ExamContainer,
  SidebarContainer,
  Content,
  ExamHeader,
  ExamForm,
  FormLabel,
  FormSelect,
  FormInput,
  AddButton,
  ErrorMessage,
  DeleteButton,
  ExamList,
  ExamItem,
  ExamInfo,
} from '../../styles/ExamStyles';

const Exam = () => {
  const [examData, setExamData] = useState([]);
  const [className, setClassName] = useState('');
  const [marks, setMarks] = useState('');
  const [examDate, setExamDate] = useState('');
  const [error, setError] = useState('');
  const [subject, setSubject] = useState(''); // State for selected subject

  // List of available classes and their corresponding subjects
  const classesWithSubjects = {
    II_MSc: ['Data Science', 'Machine Learning', 'Node JS,Tableau'],
    I_MSc: ['HTML & CSS', 'JavaScript', 'R studio','Pentaho'],
    II_MCA: ['React jS', 'Node JS', 'React Native','MongoDB'],
    I_MCA: ['React jS', 'Node JS', 'React Native','MongoDB'],
    III_BSc: ['Java', 'C++', 'Python', 'Cloud Computing'],
    II_BSc: ['Java', 'C++', 'Python', 'Cloud Computing'],
    I_BSc: ['Java', 'C++', 'Python', 'Cloud Computing'],
    III_BCA: ['Web Development', 'Mobile Apps Development', 'Cloud Computing'],
    II_BCA: ['Web Development', 'Mobile Apps Development', 'Cloud Computing'],
    I_BCA: ['Web Development', 'Mobile Apps Development', 'Cloud Computing'],
  };

  // Available classes
  const classes = Object.keys(classesWithSubjects);

  useEffect(() => {
    fetchExams();
  }, []);

  const fetchExams = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/v1/exam/getall');
      if (Array.isArray(response.data)) {
        setExamData(response.data);
      } else {
        setExamData([response.data]);
      }
      setError('');
    } catch (error) {
      console.error('Error fetching exams:', error);
      setError('Error fetching exams. Please try again later.');
      toast.error('Failed to fetch exam details.'); // Display error toast
    }
  };

  const handleAddExam = async (e) => {
    e.preventDefault();
    if (className === '' || subject === '') {
      toast.warn('Please select both class and subject.');
      return;
    }
    const newExam = { className, subject, marks: parseInt(marks), examDate };
    try {
      const response = await axios.post('http://localhost:4000/api/v1/exam', newExam);
      if (typeof response.data === 'object') {
        setExamData([...examData, response.data]);
        setClassName('');
        setSubject(''); // Clear selected subject
        setMarks('');
        setExamDate('');
        setError('');
        toast.success('Exam added successfully!'); // Display success toast
      } else {
        setError('Error: API response data is not an object');
        toast.error('Error adding exam. Please try again.'); // Display error toast
      }
    } catch (error) {
      console.error('Error adding exam:', error);
      setError('Error adding exam. Please try again.');
      toast.error('Error adding exam. Please try again.'); // Display error toast
    }
  };

  const handleDeleteExam = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/v1/exam/${id}`);
      setExamData(examData.filter((exam) => exam._id !== id));
      toast.success('Exam deleted successfully!'); // Display success toast
    } catch (error) {
      console.error('Error deleting exam:', error);
      setError('Error deleting exam. Please try again.');
      toast.error('Failed to delete exam.'); // Display error toast
    }
  };

  return (
    <ExamContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <Content>
        <ExamHeader>Exam Details</ExamHeader>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <ExamForm onSubmit={handleAddExam}>
          <FormLabel>Class:</FormLabel>
          <FormSelect
            value={className}
            onChange={(e) => {
              setClassName(e.target.value);
              setSubject(''); // Reset subject when class changes
            }}
            required
          >
            <option value="">Select a class</option>
            {classes.map((cls, index) => (
              <option key={index} value={cls}>
                {cls}
              </option>
            ))}
          </FormSelect>

          <FormLabel>Subject:</FormLabel>
          <FormSelect
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
            disabled={!className} // Disable if no class is selected
          >
            <option value="">Select a subject</option>
            {className && classesWithSubjects[className].map((sub, index) => (
              <option key={index} value={sub}>
                {sub}
              </option>
            ))}
          </FormSelect>

          <FormLabel>Marks:</FormLabel>
          <FormInput
            type="number"
            value={marks}
            onChange={(e) => setMarks(e.target.value)}
            required
          />
          <FormLabel>Date of Examination:</FormLabel>
          <FormInput
            type="date"
            value={examDate}
            onChange={(e) => setExamDate(e.target.value)}
            required
          />
          <AddButton type="submit">Add Exam</AddButton>
        </ExamForm>

        <h3>Exam Details:</h3>
        <ExamList>
          {examData.map((exam) => (
            <ExamItem key={exam._id}>
              <ExamInfo>
                <strong>Class:</strong> {exam.className}<br />
                <strong>Subject:</strong> {exam.subject}<br /> {/* Display subject */}
                <strong>Marks:</strong> {exam.marks}<br />
                <strong>Exam Date:</strong> {new Date(exam.examDate).toLocaleDateString() || 'No date set'}
              </ExamInfo>
              <DeleteButton onClick={() => handleDeleteExam(exam._id)}>Delete</DeleteButton>
            </ExamItem>
          ))}
        </ExamList>
      </Content>
      <ToastContainer /> {/* ToastContainer for displaying notifications */}
    </ExamContainer>
  );
};

export default Exam;
