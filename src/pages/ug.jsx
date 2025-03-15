import React from 'react';
import IonIcon from '@reacticons/ionicons';

const UGProgram = () => {
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
        <h1>UG Programs: B.Sc. Computer Science & BCA</h1>
      </header>
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>
          <IonIcon name="school-outline" aria-hidden="true" /> Eligibility Criteria
        </h2>
        <p style={styles.paragraph}>
          Passed 10+2 with Mathematics as a compulsory subject. The student needs to obtain at least 50% marks (45% marks in the case of candidates belonging to the reserved category) in the Qualifying Examination.
        </p>
      </section>
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>
          <IonIcon name="information-circle-outline" aria-hidden="true" /> About the Programme
        </h2>
        <p style={styles.paragraph}>
          The UG programs in B.Sc. Computer Science and BCA at RVS CAS are designed to provide a strong foundation in computer science and application development. These programs focus on equipping students with the necessary skills to excel in the IT industry.
        </p>
        <a 
           href="https://rvscas.ac.in/academics/school-of-computer/bachelor-of-computer-science"
           style={{ textDecoration: "underline", color: "blue", fontWeight: "bold" }}
          >
             👉 About - BSC_CS & BCA👈
          </a>
      </section>
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>
          <IonIcon name="book-outline" aria-hidden="true" /> About the Specialization
        </h2>
        <p style={styles.paragraph}>
          Specialization: Full Stack Development, Data Science, and Mobile App Development
          <br />
          Duration: 3 Years (Full time) – with six semesters
          <br />
          AICTE approved & affiliated with Bharathiar University
        </p>
      </section>
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>
          <IonIcon name="calendar-outline" aria-hidden="true" /> Curriculum
        </h2>
        <div style={styles.subSection}>
          <h3 style={styles.subSectionTitle}>Semester I:</h3>
          <p style={styles.paragraph}>Introduction to Programming, Mathematics for Computer Science, Digital Electronics.</p>
          <h3 style={styles.subSectionTitle}>Semester II:</h3>
          <p style={styles.paragraph}>Data Structures, Object-Oriented Programming, Database Management Systems.</p>
          <h3 style={styles.subSectionTitle}>Semester III:</h3>
          <p style={styles.paragraph}>Web Development, Operating Systems, Software Engineering.</p>
          <h3 style={styles.subSectionTitle}>Semester IV:</h3>
          <p style={styles.paragraph}>Network Security, Mobile App Development, Cloud Computing.</p>
          <h3 style={styles.subSectionTitle}>Semester V:</h3>
          <p style={styles.paragraph}>Machine Learning, Big Data Analytics, Internet of Things.</p>
          <h3 style={styles.subSectionTitle}>Semester VI:</h3>
          <p style={styles.paragraph}>Project Work, Internship, Advanced Topics in Computer Science.</p>
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
          <IonIcon name="thumbs-up-outline" aria-hidden="true" /> Advantages of UG Programs at RVSCAS
        </h2>
        <p style={styles.paragraph}>Details about the advantages of the UG programs at RVSCAS.</p>
      </section>
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>
          <IonIcon name="images-outline" aria-hidden="true" /> UG Department Photos
        </h2>
        <div style={styles.photoSection}>
          <img src="photo1.jpg" alt="UG Department 1" style={styles.photo} />
          <img src="photo2.jpg" alt="UG Department 2" style={styles.photo} />
          <img src="photo3.jpg" alt="UG Department 3" style={styles.photo} />
          <img src="photo4.jpg" alt="UG Department 4" style={styles.photo} />
        </div>
      </section>
    </div>
  );
};

export default UGProgram;
