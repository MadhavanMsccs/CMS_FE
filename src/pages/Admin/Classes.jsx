import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';
import {
  ClassesContainer,
  Content,
  ClassesContent,
  ClassesHeader,
  ClassList,
  ClassItem,
  AddClassForm,
  AddClassInput,
  AddClassButton,
  ErrorMessage,
  SuccessMessage,
  DeleteButton, 
} from '../../styles/ClassesStyles';

const Classes = () => {
  const [newClassName, setNewClassName] = useState('');
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    fetchClasses();
  }, []);

  const fetchClasses = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:4000/api/v1/class/getall');
      if (response.data && Array.isArray(response.data.classes)) {
        setClasses(response.data.classes);
      } else {
        setError('Error fetching classes: Invalid data format');
      }
    } catch (error) {
      setError(`Error fetching classes: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleAddClass = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (newClassName.trim() !== '') {
      if (classes.some((classItem) => classItem.className && classItem.className.toLowerCase() === newClassName.toLowerCase())) {
        setError('Class already exists.');
        return;
      }

      try {
        const response = await axios.post('http://localhost:4000/api/v1/class', { grade: newClassName });
        setClasses((prevClasses) => [...prevClasses, { className: newClassName, _id: response.data._id }]);
        setNewClassName('');
        setSuccess('Class added successfully!');
      } catch (error) {
        setError(`Error adding class: ${error.message}`);
      }
    } else {
      setError('Please enter a valid class name.');
    }
  };

  const handleDeleteClass = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/v1/class/${id}`);
      setClasses((prevClasses) => prevClasses.filter((classItem) => classItem._id !== id));
      setSuccess('Class deleted successfully!');
    } catch (error) {
      setError(`Error deleting class: ${error.message}`);
    }
  };

  return (
    <ClassesContainer>
      <Sidebar />
      <Content>
        <ClassesContent>
          <ClassesHeader>Classes</ClassesHeader>
          <AddClassForm onSubmit={handleAddClass}>
            <AddClassInput
              type="text"
              placeholder="Enter class name"
              value={newClassName}
              onChange={(e) => setNewClassName(e.target.value)}
              
            />
            <AddClassButton type="submit">Add Class</AddClassButton>
          </AddClassForm>

          {error && <ErrorMessage>{error}</ErrorMessage>}
          {success && <SuccessMessage>{success}</SuccessMessage>}

          {loading ? (
            <p>Loading classes...</p>
          ) : (
            <ClassList>
              {Array.isArray(classes) && classes.length > 0 ? (
                classes.map((classItem, index) => (
                  <ClassItem key={classItem._id || index}>
                    {classItem.className}
                    <DeleteButton onClick={() => handleDeleteClass(classItem._id)}>Delete</DeleteButton>
                  </ClassItem>
                ))
              ) : (
                <p>No classes available. Please add a new class.</p>
              )}
            </ClassList>
          )}
        </ClassesContent>
      </Content>
    </ClassesContainer>
  );
};

export default Classes;
