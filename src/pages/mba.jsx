import React from 'react';
import IonIcon from '@reacticons/ionicons';

const MBACourseOutcomes = () => {
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
        <h1>MBA Course Outcomes</h1>
      </header>
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>
          <IonIcon name="school-outline" /> Specialization in MBA - Start Your Own Business
        </h2>
        <p style={styles.paragraph}>
          <strong>Eligibility:</strong> Any bachelor's degree with a minimum of 50% aggregate from a recognized university.
        </p>
      </section>
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>
          <IonIcon name="information-circle-outline" /> About the Program
        </h2>
        <p style={styles.paragraph}>
          A Master of Business Administration (MBA) is a graduate-level degree that focuses on business management and leadership skills.
          It can help you advance your career, change industries, or start your own business.
        </p>
        <a href="https://mba.rvscas.ac.in/aboutprograms/curriculum" style={styles.link}>
          👉 About - MBA 👈
        </a>
      </section>
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>
          <IonIcon name="book-outline" /> Specialization Courses
        </h2>
        <div style={styles.subSection}>
          <h3 style={styles.subSectionTitle}>MBA Curriculum</h3>
          <ul style={styles.list}>
            <li style={styles.listItem}>Management and Organizational Behaviour, Accounting and Finance, Statistic for Management.</li>
            <li style={styles.listItem}>Economics for Decision Making, Human Resource Management, Sales Management.</li>
            <li style={styles.listItem}>Design Thinking, Major Specialization: Elective Paper, Internship Report & Viva Voce.</li>
            <li style={styles.listItem}>Strategic Management, Capstone Project & Viva Voce.</li>
          </ul>
        </div>
      </section>
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>
          <IonIcon name="calendar-outline" /> Curriculum
        </h2>
        <div style={styles.subSection}>
          <h3 style={styles.subSectionTitle}>MBA in Business Analytics</h3>
          <p style={styles.paragraph}><strong>Semester I:</strong> Python for MBA, Machine Learning</p>
          <p style={styles.paragraph}><strong>Semester II:</strong> Data Visualization using Tableau, Data Science for Management</p>
          <p style={styles.paragraph}><strong>Semester III:</strong> Data Science for Management II</p>
          <p style={styles.paragraph}><strong>Semester IV:</strong> Capstone Project</p>
        </div>
        <div style={styles.subSection}>
          <h3 style={styles.subSectionTitle}>MBA in Logistics & Supply Chain Management</h3>
          <p style={styles.paragraph}><strong>Semester I:</strong> Introduction to Logistics Management, Sourcing and Procurement</p>
          <p style={styles.paragraph}><strong>Semester II:</strong> Warehousing and Distribution, Logistics and Supply Chain Models</p>
          <p style={styles.paragraph}><strong>Semester III:</strong> International Logistics & Global Supply Chain</p>
          <p style={styles.paragraph}><strong>Semester IV:</strong> Capstone Project</p>
        </div>
      </section>
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>
          <IonIcon name="images-outline" /> MBA Department Photos
        </h2>
        <div style={styles.photoSection}>
          <img src="photo1.jpg" alt="MBA Department 1" style={styles.photo} />
          <img src="photo2.jpg" alt="MBA Department 2" style={styles.photo} />
          <img src="photo3.jpg" alt="MBA Department 3" style={styles.photo} />
          <img src="photo4.jpg" alt="MBA Department 4" style={styles.photo} />
        </div>
      </section>
    </div>
  );
};

export default MBACourseOutcomes;
