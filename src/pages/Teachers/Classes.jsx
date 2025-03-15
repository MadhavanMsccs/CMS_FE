import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import { ClassContainer, SidebarContainer, Content, ClassHeader, ClassList, ClassItem, TotalClasses } 
from '../../styles/ClassesStyles'; 

const ClassSection = () => {
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchClasses();
  }, []);

  const fetchClasses = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/v1/class/getall');
      console.log('API Response:', response.data); // Log the entire response
      if (response.data && Array.isArray(response.data.classes)) {
        setClasses(response.data.classes);
      } else {
        console.error('Error fetching classes: Invalid data format', response.data);
      }
    } catch (error) {
      console.error('Error fetching classes:', error.message);
    } finally {
      setLoading(false); // Set loading to false after fetching data
    }
  };

  return (
    <ClassContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <Content>
        <ClassHeader>Classes</ClassHeader>
        {loading ? (
          <p>Loading classes...</p>
        ) : (
          <>
            <TotalClasses>Total Classes: {classes.length}</TotalClasses>
            <ClassList>
              {classes.map((classItem, index) => {
                console.log('Class Item:', classItem); // Log each class item
                return (
                  <ClassItem key={index}>
                    <h3>{classItem.className}</h3> {/* Ensure classItem.className exists */}
                  </ClassItem>
                );
              })}
            </ClassList>
          </>
        )}
      </Content>
    </ClassContainer>
  );
};

export default ClassSection;
