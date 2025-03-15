import React, { useState } from 'react';
import styled from 'styled-components';
// import teach from "../assets/teacher1.jpeg";
import img1 from "../assets/images.jpeg"
import img2 from "../assets/img12.jpg"
import img3 from "../assets/img13.webp"
import img4 from "../assets/mid.webp"
// import img5 from "../assets/308738.jpg"
import img6 from "../assets/34567.jpg"

const TeacherCard = ({ name, qualifications, specialization, image }) => (
  <Card>
    <Image src={image} alt={`${name}'s image`} />
    <Details>
      <Name>{name}</Name>
      <Text>{qualifications}</Text>
      <Text>{specialization}</Text>
    </Details>
  </Card>
);

const App = () => {
  const teachers = [
    { 
      section_id: 1,
      section_name: "Department of Computer Science",
      staffs:[
             {
               name: 'Dr.P.V.Ravidranath',
               qualifications: 'Ph.D. in Computer Science',
               specialization: 'Programming and Networking',
               image: img6
             },
      
             {
               name: 'Dr. D.Shanmuga Rajathi',
               qualifications: 'MCA, MBA, M.Phil., Ph.D',
               specialization: ' Database Management Systems and Business Intelligence',
               image:img1
             },
             {
               name: 'Dr. K. Chitra',
               qualifications: 'M.Sc(CC)., M.Phil., Ph.D.',
               specialization: '  Data Structures, Full Stack Development and Big Data',
               image:img2
             },
             {
               name: 'Dr. S. Suganya',
               qualifications: 'MCA., Ph.D.,',
               specialization: '  Machine Learning',
               image:img3
             },
             {
               name: 'Dr G PURUSOTHAMAN',
               qualifications: 'M.Sc.,(IT),PGDE-com., M.Phil.,(CS), Ph.D.,(CS)',
               specialization: '  Data mining',
               image:img4
             },
           ],
    },
    { 
      section_id: 2,
      section_name: "Department of MBA",
      staffs:[
           {
             name: 'Dr. K. Thulasivelu, Director',
             qualifications: 'M.Com., MBA, M.Phil., SET., MISTE',
             specialization: 'Human Resource | Finance | Accounting',
             image: img4
           },
    
           {
             name: 'Mr. N. Jeyaraj, Assistant Professor',
             qualifications: 'M.B.A, PGDM ( HR )',
             specialization: 'Logistics',
             image:img6
           },
           {
             name: 'Dr. S. Yamini, Director (Academic)',
             qualifications: 'M.Sc, M.Phil, Ph.D.,',
             specialization: '  Statistics',
             image:img2
           },
           {
             name: 'Mrs.Shanmuga Rajathi D, Assistant Professor, SCS-PG',
             qualifications: 'MCA, M.Phil., (Ph.D.),',
             specialization: 'Database Base Management System, Business Intelligence',
             image:img1
           },
           {
             name: 'Mr. N. Vellingiri, Assistant Professor',
             qualifications: 'B.Com BA., MCA., B.Ed., (Ph.D)',
             specialization: 'Business Analytics',
             image:img4
           },
         ],
        },
         { 
           section_id: 3,
           section_name: "Department of Micro-Biology",
           staffs:[
           {
             name: 'Dr. R. DHANABALAN',
             qualifications: 'M.Sc., M.Phil.,Ph.D.,',
             specialization: 'Medical Microbiology',
             image: img6
           },
    
           {
             name: 'Dr. M. JAGADEESWARI',
             qualifications: 'M.Sc., B.Ed., M.Phil., Ph.D.',
             specialization: 'Medical Microbiology',
             image:img2
           },
           {
             name: 'Mrs. P. KIRUTHIGA',
             qualifications: 'M.Sc., M.Phil., M.A., B.Ed., PGDCA.',
             specialization: ' Environmental Microbiology',
             image:img3
           },
           {
             name: 'Ms. S. SUDHA',
             qualifications: 'M.Sc., M.Phil.,',
             specialization: 'Medical Parasitology',
             image:img4
           },
           {
             name: 'Dr.K.RAJESWARI',
             qualifications: 'M.Sc.,M.Phil.,Ph.D.,',
             specialization: 'Environmental Microbiology and Medical Microbiology',
             image:img2
           },
         ],
         },
         { 
            section_id: 4,
            section_name: "Department of English",
            staffs:[
            {
              name: 'Dr.S.S.Soundarya',
              qualifications: 'M.A., D.T.Ed., M.Phil.,Ph.D',
              specialization: 'African American Literature, History of English Literature',
              image: img3
            },
    
            {
              name: 'Mrs.P.Sowmya',
              qualifications: 'M.A., B.Ed., M.Phil.,',
              specialization: 'English Language Teaching',
              image:img2
            },
            {
              name: 'Mr.Giritharan Krishnamoorthi',
              qualifications: ' M.A. English.',
              specialization: ' Poem, Fiction, Drama, Prose and Grammar.',
              image:img6
            },
            {
              name: 'Mr. B. INDRAJITH',
              qualifications: 'M.A.,',
              specialization: 'Eco- Literature',
              image:img4
            },
            {
              name: 'Ms. P. Infant Melvin',
              qualifications: 'M.A., B.Ed.,',
              specialization: 'Canadian Literature',
              image:img6
            },
          ],
          },
          { 
            section_id: 5,
            section_name: "Department of Catering ",
            staffs:[
            {
              name: 'Ms. G. Jeyalakshmi',
              qualifications: 'B.Sc(CTHM), MTM',
              specialization: 'Culinary Arts',
              image: img1
            },
    
            {
              name: 'Mr. R. Cecil William',
              qualifications: 'MSc(CSHM), MBA(Tourism & Hotel Management), MPhil (Tourism)',
              specialization: 'Food & Beverage Service Operations',
              image:img4
            },
            {
              name: 'Mr. J.EZHILAN',
              qualifications: ' B.Sc.(CS&HA), MBA in Tourism and Hotel Management',
              specialization: ' FOOD AND BEVERAGE SERVICE AND BAR',
              image:img6
            },
            {
              name: 'Mr. D. ANTONY VIJAYARAJ',
              qualifications: 'M.Sc.(HM), M.B.A., M.T.M.',
              specialization: 'FOOD AND BEVERAGE MANAGEMENT',
              image:img4
            },
            {
              name: 'Mr. M. Shanmugaraj',
              qualifications: 'B.Sc., (CSHM)',
              specialization: 'Culinary Operations',
              image:img6
            },
          ],
         
    }
  ];

  const [selectedDepartment, setSelectedDepartment] = useState('');

  const handleDepartmentChange = (event) => {
    setSelectedDepartment(event.target.value);
  };

  return (
    <Container>
      <Dropdown onChange={handleDepartmentChange} value={selectedDepartment}>
        <option value="">Select Department</option>
        {teachers.map((section) => (
          <option key={section.section_id} value={section.section_id}>{section.section_name}</option>
        ))}
      </Dropdown>

      {teachers
        .filter((section) => selectedDepartment === '' || section.section_id === Number(selectedDepartment))
        .map((section) => (
          <div key={section.section_id}>
            <h2>{section.section_name}</h2>
            <StaffContainer>
              {section.staffs.map((staff, index) => (
                <TeacherCard key={index} name={staff.name} qualifications={staff.qualifications} specialization={staff.specialization} image={staff.image} />
              ))}
            </StaffContainer>
          </div>
        ))}
    </Container>
  );
};

export default App;




// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: linear-gradient(135deg,rgb(23, 51, 63),rgb(91, 192, 226), #2c5364);
  min-height: 100vh;
`;

const Dropdown = styled.select`
  margin-bottom: 20px;
  padding: 12px;
  font-size: 18px;
  border: none;
  border-radius: 8px;
  background: #ffeb3b;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
    background: #ffc107;
  }
`;

const StaffContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
`;

const Card = styled.div`
  background: linear-gradient(135deg,rgb(197, 13, 74),rgb(78, 61, 61));
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(16, 241, 8, 0.88);
  overflow: hidden;
  width: 320px;
  text-align: center;
  margin: 20px;
  transition: all 0.4s ease-in-out;
  transform: translateY(0);

  &:hover {
    transform: translateY(-10px) scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  transition: transform 0.4s ease-in-out;

  ${Card}:hover & {
    transform: scale(1.1);
    filter: brightness(1.2);
  }
`;

const Details = styled.div`
  padding: 25px;
  background: #ffffff;
`;

const Name = styled.h2`
  margin: 0;
  font-size: 26px;
  color: #333;
  transition: color 0.3s;

  ${Card}:hover & {
    color: #ff5722;
  }
`;

const Text = styled.p`
  margin: 12px 0;
  color: #666;
  font-size: 16px;
  transition: color 0.3s;

  ${Card}:hover & {
    color: #444;
  }
`;
