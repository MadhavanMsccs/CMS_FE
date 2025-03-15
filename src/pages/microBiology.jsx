import React from 'react';
import IonIcon from '@reacticons/ionicons';

const MicrobiologyCourseOutcomes = () => {
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
        <h1>MICRO-BIOLOGY Course </h1>
      </header>
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>
          <IonIcon name="school-outline" aria-hidden="true" /> Specialization in Microbiology
        </h2>
        <p style={styles.paragraph}><strong>Eligibility for UG:</strong>  Pass in +2 with Biology / Zoology / Botany / Equivalent Exam</p>
        <p style={styles.paragraph}><strong>Eligibility for PG:</strong>  Pass in B.Sc., in Microbiology / Biotechnology / Agriculture / Biochemistry / Animal biology and Animal Biotechnology  / Medical Sciences / Zoology.</p>
     
      </section>
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>
          <IonIcon name="information-circle-outline" aria-hidden="true" /> About the Program
        </h2>
        <p style={styles.paragraph}>
        The BSc Microbiology course involves the study of microorganisms with particular emphasis on the biology of bacteria, viruses, fungi and protozoan parasites. Complete understanding of structure, function and contained use of microorganisms is important for productive application of microorganisms to derive economic benefit.
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
          <IonIcon name="book-outline" aria-hidden="true" /> Specialization Courses
        </h2>
        <div style={styles.subSection}>
          <h3 style={styles.subSectionTitle}>Microbiology Curriculum</h3>
          <ul style={styles.list}>
            <li style={styles.listItem}>The Department serves as a home for the graduates in the field of Microbiology with real time projects. The specialization, has the potential to bring windfall of breakthroughs such as improved vaccines and better disease-diagnostic tools, improved microbial agents for biological control of plant and animal pests, discovery of novel bioactive compounds, development of new industrial catalysts and fermentation organisms, development of new microbial agents for bioremediation of soil and water contaminated by agricultural runoff, industrial waste or from other human or geological activities.</li>
            
          </ul>
        </div>
        
      </section>
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>
          <IonIcon name="calendar-outline" aria-hidden="true" /> Curriculum
        </h2>
        <div style={styles.subSection}>
          <h3 style={styles.subSectionTitle}>B.Sc Microbiology</h3>
          <h4>Year I:</h4>
          <p style={styles.paragraph}>ntroductory Microbiology, Fundamentals of Microbiology, Microbial Diversity, Techniques in Microbiology, Mushroom cultivation.</p>
          <h4>Year II:</h4>
          <p style={styles.paragraph}>Microbial Physiology, Environmental Microbiology, Agriculture Microbiology, Biodegradation and Bioremediation.</p>
            <h4>Year III:</h4>
          <p style={styles.paragraph}>Medical Bacteriology and Parasitology, Immunology, Microbial Genetics, Genetic Engineering, Medical Mycology and Virology, Food & Dairy Microbiology, Clinical Microbiology, Quality assurance, Diagnostic Microbiology.</p>

          </div>
        <div style={styles.subSection}>
          <h3 style={styles.subSectionTitle}>MSC Microbiology</h3>
          <h4>Semester I:</h4>
          <p style={styles.paragraph}>Introduction to microbes | Microbial Biochemistry and Physiology | Food Microbiology & Quality assurance | Environmental & Agriculture Microbiology | Analytical Techniques</p>
          <h4>Semester II:</h4>
          <p style={styles.paragraph}>Molecular biology & Microbial Genetics | Fermentation Technology | Medical Bacteriology & Virology | Immunology | Biodegradation and Bioremediation</p>
          <h4>Semester III:</h4>
          <p style={styles.paragraph}>Recombinant DNA Technology |Environment Monitoring | Medical Mycology and Parasitology |Bioethics and Intellectual property Rights</p>
          <h4>Semester IV:</h4>
          <p style={styles.paragraph}>Pharmaceutical Microbiology | Specialized research projects</p>
          </div>
      </section>
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>
          <IonIcon name="images-outline" aria-hidden="true" /> Micri-Biology Department Photos
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

export default MicrobiologyCourseOutcomes;
 