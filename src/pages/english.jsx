import React from 'react';
import IonIcon from '@reacticons/ionicons';

const EnglishCourseOutcomes = () => {
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
        <h1>ENGLISH Course </h1>
      </header>
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>
          <IonIcon name="school-outline" aria-hidden="true" /> Specialization in English
        </h2>
        <p style={styles.paragraph}><strong>Eligibility for UG:</strong>  Student must pass the 10+2 or equivalent exam. </p>
        <p style={styles.paragraph}><strong>Eligibility for PG:</strong>  B.A. English Literature / Any graduate who has done four papers in English under the semester system or two papers in English under non-semester system.</p>
      </section>
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>
          <IonIcon name="information-circle-outline" aria-hidden="true" /> About the Program
        </h2>
        <p style={styles.paragraph}>The Department of English was established in the year 1986. It started functioning as a supportive department handling Part II English for all UG programmes. The department flourished to a paramount level with B.A. English Literature in 2010, M.A. English in 2011 and Research Programmes with the team of well kempt faculty members.</p>
        
         <a 
           href="https://rvscas.ac.in/academics/english/bachelor-of-english-litetature"
           style={{ textDecoration: "underline", color: "blue", fontWeight: "bold" }}
          >
             👉 About English 👈
          </a>


      </section>
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>
          <IonIcon name="book-outline" aria-hidden="true" /> Specialization Courses
        </h2>
        <div style={styles.subSection}>
          <h3 style={styles.subSectionTitle}>English Curriculum</h3>
          <ul style={styles.list}>
            <li style={styles.listItem}>The programme enriches the students’ communicative skills in English with ICT enabled teaching-learning methods.It incorporates every aspect of the global scenario in various types and genres of Literature.</li>
            
          </ul>
        </div>
        
      </section>
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>
          <IonIcon name="calendar-outline" aria-hidden="true" /> Curriculum
        </h2>
        <div style={styles.subSection}>
          <h3 style={styles.subSectionTitle}>BA English</h3>
          <h4>Year I:</h4>
          <p style={styles.paragraph}>Social History of England with Virtual Narration, History of English Literature - Practical Sessions.</p>
          <h4>Year II:</h4>
          <p style={styles.paragraph}>Computer-Assisted Instruction in Pronunciation, English Language Teaching through Electronic Media.</p>
            <h4>Year III:</h4>
          <p style={styles.paragraph}>Live Translation Practical Sessions, Skill Oriented Content Writing, Eco Literature – A Green Initiative.</p>

          </div>
        <div style={styles.subSection}>
          <h3 style={styles.subSectionTitle}>MA English</h3>
          <h4>Year I:</h4>
          <p style={styles.paragraph}>Modern Linguistics and Phonetics, Modern English Grammar, Young Adult Literature, Gender Studies.</p>
          <h4>Year II:</h4>
          <p style={styles.paragraph}>Asian Literature, Content Writing, Diasporic Literature.</p>
            </div>
      </section>
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>
          <IonIcon name="images-outline" aria-hidden="true" /> English Department Photos
        </h2>
        <div style={styles.photoSection}>
          <img src="photo1.jpg" alt="MSc Department 1" style={styles.photo} />
          <img src="photo2.jpg" alt="MSc Department 2" style={styles.photo} />
          <img src="photo3.jpg" alt="MSc Department 3" style={styles.photo} />
          <img src="photo4.jpg" alt="MSc Department 4" style={styles.photo} />
        </div>
      </section>
    </div>
  );
};

export default EnglishCourseOutcomes;
 