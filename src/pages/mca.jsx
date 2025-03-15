import React from 'react';
import IonIcon from '@reacticons/ionicons';

const MCAProgram = () => {
  const styles = {
    container: {
      padding: '40px',
      fontFamily: 'Arial, sans-serif',
      background: 'linear-gradient(to right, #1e3c72, #2a5298)', // Modern dark blue gradient
      color: '#fff',
      maxWidth: '1200px',
      margin: '20px auto',
      borderRadius: '12px',
      boxShadow: '0 6px 15px rgba(0, 0, 0, 0.2)',
      animation: 'fadeIn 1s ease-in-out',
    },
    header: {
      textAlign: 'center',
      marginBottom: '40px',
      fontSize: '32px',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      letterSpacing: '2px',
    },
    section: {
      marginBottom: '30px',
      background: 'rgba(255, 255, 255, 0.1)',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    },
    sectionTitle: {
      fontSize: '26px',
      marginBottom: '15px',
      color: '#ffcc00', // Golden yellow highlight
      borderBottom: '3px solid #ffcc00',
      paddingBottom: '5px',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
    },
    list: {
      listStyleType: 'none',
      paddingLeft: '0',
    },
    listItem: {
      marginBottom: '10px',
      background: 'rgba(255, 255, 255, 0.1)',
      padding: '10px',
      borderRadius: '5px',
      transition: 'background 0.3s ease-in-out',
    },
    listItemHover: {
      background: 'rgba(255, 255, 255, 0.2)',
    },
    paragraph: {
      marginBottom: '15px',
      lineHeight: '1.6',
      fontSize: '18px',
    },
    subSectionTitle: {
      fontSize: '22px',
      marginBottom: '10px',
      color: '#ffcc00',
    },
    subSection: {
      marginBottom: '20px',
    },
    photoSection: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '20px',
      justifyContent: 'center',
      marginTop: '40px',
    },
    photo: {
      width: '280px',
      height: '180px',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      objectFit: 'cover',
      transition: 'transform 0.3s ease-in-out',
    },
    photoHover: {
      transform: 'scale(1.05)',
    },
    link: {
      textDecoration: 'none',
      color: '#ffcc00',
      fontWeight: 'bold',
      transition: 'color 0.3s',
    },
    linkHover: {
      color: '#ffd700',
    },
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>MCA Program</h1>
      </header>
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>
          <IonIcon name="school-outline" aria-hidden="true" /> Eligibility Criteria
        </h2>
        <p style={styles.paragraph}>
          Passed BCA/Bachelor's Degree in Computer Science Engineering or equivalent degree, or B.Sc. /B.Com./B.A. With Mathematics at 10+2 level or Graduation Level. The student needs to obtain at least 50% marks (45% marks in the case of candidates belonging to the reserved category) in the Qualifying Examination.
        </p>
      </section>
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>
          <IonIcon name="information-circle-outline" aria-hidden="true" /> About the Programme
        </h2>
        <p style={styles.paragraph}>
          The two-year RVS CAS MCA Program is a full-time course that leads to 'Full Stack App Development' with a strong foundation of Web Development skills and Project Development skills to stay ahead.
        </p>
        <a 
           href="https://rvscas.ac.in/academics/micro-biology/bachelor-of-micro-biology"
           style={{ textDecoration: "underline", color: "blue", fontWeight: "bold" }}
          >
             👉 About Micro-Bio 👈
          </a>
      </section>
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>
          <IonIcon name="book-outline" aria-hidden="true" /> About the Specialization
        </h2>
        <p style={styles.paragraph}>
          Specialization: Dual Specialization (Full Stack Development-MERN & Full Stack Development-React Native)
          <br />
          Duration: 2 Years (Only Full time) – with four semesters
          <br />
          AICTE approved & affiliated with Bharathiar University TANCET Counselling Code: 395
        </p>
      </section>
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>
          <IonIcon name="calendar-outline" aria-hidden="true" /> Curriculum
        </h2>
        <div style={styles.subSection}>
          <h3 style={styles.subSectionTitle}>Semester I:</h3>
          <p style={styles.paragraph}>Courses on Basic Web Development Skills in JavaScript, HTML, and CSS.</p>
          <h3 style={styles.subSectionTitle}>Semester II:</h3>
          <p style={styles.paragraph}>
            Front-end Development and React
            <br />
            Learn more about front-end development using the popular framework, React. Learn to concise code with JavaScript ES6. You will also work with web components in React. You will practice MongoDB, Express JS, and Node JS tools to become confident in the MERN stack. In addition, you will learn to build a secure full-stack web application using the MERN stack and learn to test and deploy them.
          </p>
          <h3 style={styles.subSectionTitle}>Semester III:</h3>
          <p style={styles.paragraph}>
            Full-stack development tools
            <br />
            You will learn the critical cloud concepts of modern web application development, the essentials for working in the cloud, automated testing, and deployment. In addition, you will learn key DevOps concepts for Continuous Integration (CI) and Continuous Delivery (CD).
          </p>
          <h3 style={styles.subSectionTitle}>Semester IV:</h3>
          <p style={styles.paragraph}>
            Mobile App Development:
            <br />
            You will learn to develop Capstone Project to develop Hybrid Mobile Development Stack.
          </p>
        </div>
      </section>
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>
          <IonIcon name="star-outline" aria-hidden="true" /> Programme Highlights
        </h2>
        <p style={styles.paragraph}>Details about the programme highlights.</p>
      </section>
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>
          <IonIcon name="briefcase-outline" aria-hidden="true" /> Job Opportunities
        </h2>
        <p style={styles.paragraph}>Details about job opportunities.</p>
      </section>
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>
          <IonIcon name="thumbs-up-outline" aria-hidden="true" /> Advantages of MCA at RVSCAS
        </h2>
        <p style={styles.paragraph}>Details about the advantages of the MCA program at RVSCAS.</p>
      </section>
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>
          <IonIcon name="images-outline" aria-hidden="true" /> MCA Department Photos
        </h2>
        <div style={styles.photoSection}>
          <img src="photo1.jpg" alt="MCA Department 1" style={styles.photo} />
          <img src="photo2.jpg" alt="MCA Department 2" style={styles.photo} />
          <img src="photo3.jpg" alt="MCA Department 3" style={styles.photo} />
          <img src="photo4.jpg" alt="MCA Department 4" style={styles.photo} />
        </div>
      </section>
    </div>
  );
};

export default MCAProgram;
