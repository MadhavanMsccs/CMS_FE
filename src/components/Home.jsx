import React from 'react';
import { useNavigate } from "react-router-dom";
// import "./header.css";
import "./Styled.css"; 

import { IonIcon } from 'react-ion-icon'; 
import heroBg from '../assets/collegew.jpg';
// import heroBg1 from '../assets/Gaming.jpg';
import logo from "../assets/7861942.jpg";
import bg from '../assets/7618724.jpg';
// import heroshape2 from "../assets/hero-shape-2.png";
// import category1 from "../assets/category-1.svg";
// import category2 from "../assets/category-2.svg";
// import category3 from "../assets/category-3.svg";
// import category4 from "../assets/category-4.svg";
import aboutbanner from "../assets/rvs-college.jpg"
// import aboutshape1 from '../assets/about-shape-1.svg'
// import aboutshape2 from "../assets/about-shape-2.svg"
// import aboutshape3 from "../assets/about-shape-3.png"
// import aboutshape4 from "../assets/about-shape-4.svg"
// import course1 from "../assets/course-1.jpg";
import img4 from "../assets/34567.jpg"
import ima from "../assets/ima.jpeg";
import img3 from "../assets/ikk.png";
import video from "../assets/video-bg.png";
import videobanner from "../assets/video-banner.jpg";
// import videoshape1 from "../assets/video-shape-1.png"
// import videoshape2 from "../assets/video-shape-2.png"
// import blogshape from "../assets/blog-shape.png"
// import blogbg from "../assets/blog-bg.svg";
import msc from "../assets/pgcs.jpeg";
import mca from "../assets/mca.jpg"
import mba from "../assets/mba.jpg";
import micro from "../assets/mb.jpg";
import eng from "../assets/english.jpg";
import ug from "../assets/ug.jpeg";
// import footer from "../assets/footer-bg.png";
// import logolight from "../assets/logo-light.svg";
// import YouTube from 'react-youtube';




const Header = () => {

    const navigate = useNavigate();
    // const handleLoginClick = () => {
    //     navigate('/choose-user');
    // }
    // const handleLoginClick1 = () => {
    //     navigate('/admin-register');
    // }
  return (  
    <header className="header" data-header>
      <div className="container">
        <a href="#" className="logo">
          <img src={logo} width="50" height="50" alt="" /> 
        </a>
        <nav className="navbar" data-navbar>
          <div className="wrapper">
            <a href="#" className="logo">
              <img src={logo} width="162" height="50" alt="" />
            </a>
            <button className="nav-close-btn" aria-label="close menu" data-nav-toggler>
              <IonIcon name="close-outline" aria-hidden="true" />
            </button>
          </div>
          <ul className="navbar-list">
            <li className="navbar-item">
              <a href="#home" className="navbar-link" data-nav-link>Home</a>
            </li>
            <li className="navbar-item">
              <a href="#about" className="navbar-link" data-nav-link>About</a>
            </li>
            <li className="navbar-item">
              <a href="#blog" className="navbar-link" data-nav-link>Courses</a>
            </li>
            <li className="navbar-item">
              <a href="#courses" className="navbar-link" data-nav-link>Campus</a>
            </li>
            <li className="navbar-item">
              <a href="/contact" className="navbar-link" data-nav-link>Contact</a>
            </li>
          </ul>
        </nav>
        <div className="header-actions">
          <button className="header-action-btn" aria-label="toggle search" title="Search">
            <IonIcon name="search-outline" aria-hidden="true" />
          </button>
          <a href="/choose-user" className="btn has-before">Sign In
            <IonIcon name="arrow-forward-outline" aria-hidden="true" />
          </a>
          <a href="/admin-register" className="btn has-before">Register
            <IonIcon name="arrow-forward-outline" aria-hidden="true" />
          </a>
          <button className="header-action-btn" aria-label="open menu" data-nav-toggler>
            <IonIcon name="menu-outline" aria-hidden="true" />
          </button>
        </div>
        <div className="overlay" data-nav-toggler data-overlay></div>
      </div>
    </header>
  );
};

const HeroSection = () => {
  return (
    <section
      className="section hero has-bg-image"
      id="home"
      aria-label="home"
      style={{ backgroundImage:`url(${bg})`}}
    >
      <div className="container">
        <div className="hero-content">
          <h1 className="h1 section-title"style={{ color: "blue" }}> EduNest – A nest for managing all educational activities.</h1>
          <p className="hero-text"style={{ color: "green",backgroundColor: "white" }}>
          EduNest are both ways of exploring the world, and they can complement each other in a well-rounded education. 
          </p>
          <a href="#about" className="btn has-before">
            <span className="span">Know More!</span>
            <IonIcon name="arrow-forward-outline" aria-hidden="true" />
          </a>
        </div>

        <figure className="hero-banner">
          <div className="img-holder one" style={{ '--width': 270, '--height': 300 }}>
            <img src={heroBg} width="270" height="300" alt="hero banner" className="img-cover" />
          </div>
          {/* <div className="img-holder two" style={{ '--width': 240, '--height': 370 }}>
            <img src={heroBg1} width="240" height="370" alt="hero banner" className="img-cover" />
          </div> */}
          {/* <img src={heroshape2} width="622" height="551" alt="" className="shape hero-shape-2" /> */}
        </figure>
      </div>
    </section>
  );
};

const CategorySection = () => {
  const categories = [
    {
      title: 'MSc Computer Science',
      courses: 'full stack and data science',
      
      color: '170, 75%, 41%',
      // alt: 'Online Degree Programs',
 },
    {
      title: 'MCA',
      courses: 'full stack',
      
      color: '351, 83%, 61%',
      // alt: 'Non-Degree Programs',
    },
    {
      title: 'MBA',
      courses: 'BA & HR',
      
      color: '351, 83%, 61%',
      // alt: 'Non-Degree Programs',
    },
    {
      title: 'MA English',
      courses: 'English',
      
      color: '229, 75%, 58%',
      // alt: 'Off-Campus Programs',
    },
    {
      title: 'Micro-Biology',
      courses: 'Micro-Biology',
      
      color: '42, 94%, 55%',
      // alt: 'Hybrid Distance Programs',
    },
    {
      title: 'BCA',
      courses: 'computer application',
     
      color: '42, 94%, 55%',
      // alt: 'Hybrid Distance Programs',
    },
  ];

  return (
    <section className="section category" aria-label="category">
      <div className="container">
        <p className="section-subtitle">EduNest institute</p>
        <h2 className="h2 section-title">
          College  <span className="span"> Departments</span> 
        </h2>
        <p className="section-text">Computer science is an interdisciplinary field focused on studying computers and their uses in the real world.</p>

        <ul className="grid-list">
          {categories.map((category, index) => (
            <li key={index}>
              <div className="category-card" style={{ '--color': category.color }}>
                <div className="card-icon">
                  <img src={category.image} width="40" height="40" loading="lazy" alt={category.alt} className="img" />
                </div>
                <h3 className="h3">
                  <a href="#" className="card-title">{category.title}</a>
                </h3>
                <span className="card-badge">{category.courses}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

const AboutSection = () => {

  const navigate = useNavigate();
  const handleLoginClick2 = () => {
    navigate('/teachers-page');
}
  return (
    <section className="section about" id="about" aria-label="about">
      <div className="container">
        <figure className="about-banner">
          <div className="img-holder" style={{ '--width': 520, '--height': 370 }}>
            <img src={aboutbanner} width="520" height="370" loading="lazy" alt="about banner" className="img-cover" />
          </div>
          {/* <img src={aboutshape1} width="360" height="420" loading="lazy" alt="" className="shape about-shape-1" /> */}
          {/*<img src={aboutshape2} width="371" height="220" loading="lazy" alt="" className="shape about-shape-2" />
          <img src={aboutshape3} width="722" height="528" loading="lazy" alt="" className="shape about-shape-3" />*/}
        </figure>

        <div className="about-content">
          <p className="section-subtitle">About Us</p>
          <h2 className="h2 section-title">
          Bridging  <span className="span">Knowledge</span> with <span className="span">Practical</span>  Excellence
          </h2>
          <p className="section-text">
          At College of Arts and Science, we are committed to building a smarter world through skill development and academic excellence. Offering a diverse range of programs—including<span className="span">BCA, B.Sc., MCA, M.Sc., MBA, MA, and Catering—our </span> institution blends innovation, technology, and real-world application to equip students for the future.</p>
          <ul className="about-list">
            <li className="about-item">
              <IonIcon name="checkmark-done-outline" aria-hidden="true" />
              <span onClick={handleLoginClick2} className="span">Expert Teachers</span>
            </li>
            <li className="about-item">
              <IonIcon name="checkmark-done-outline" aria-hidden="true" />
              <span className="span">Attractive Campus</span>
            </li>
            <li className="about-item">
              <IonIcon name="checkmark-done-outline" aria-hidden="true" />
              <span className="span"></span>
            </li>
          </ul>
         {/* <img src={aboutshape4} width="100" height="100" loading="lazy" alt="" className="shape about-shape-4" />*/}
        </div>
      </div>
    </section>
  );
};

const CourseSection = () => {
  const navigate = useNavigate();
  const handleNavigate = (path) => {
    navigate(path);
  };
  return (
    <section className="section course" id="courses" aria-label="course">
      <div className="container">
        <p className="section-subtitle">EduNest institute</p>
        <h2 className="h2 section-title">Explore About As</h2>

        <ul className="grid-list">
          {/* Course 1 */}
          <li >
            <div className="course-card" onClick={() => handleNavigate('/teachers-page')} style={{ cursor: 'pointer' }}>
              <figure   className="card-banner img-holder" style={{ '--width': 370, '--height': 220 }}>
                <img src={img4} width="370" height="220" loading="lazy" alt="" className="img-cover" />
              </figure>
              <div className="abs-badge">
                <IonIcon name="time-outline" aria-hidden="true" />
                <span className="span">Click Here!!</span>
              </div>
              <div className="card-content">
                <span className="badge">Well trained Teachers</span>
                <h3 className="h3">
                  <a href="/teachers-page" className="card-title">Teachers</a>
                </h3>
                <div className="wrapper">                  
                </div>   
                <ul className="card-meta-list">
                  <li className="card-meta-item">
                    <IonIcon name="library-outline" aria-hidden="true" />
                    <span className="span">20 Teachers</span>
                  </li>
                  <li className="card-meta-item">
                    <IonIcon name="people-outline" aria-hidden="true" />
                    <span className="span">200 Students</span>
                  </li>
                </ul>
              </div>
            </div>
          </li>

          {/* Course 2 */}
          <li >
            <div className="course-card" onClick={() => handleNavigate('/pg-page')} style={{ cursor: 'pointer' }}>
              <figure  className="card-banner img-holder" style={{ '--width': 370, '--height': 220 }}>
                <img src={ima} width="370" height="220" loading="lazy" alt="" className="img-cover" />
              </figure>
              <div className="abs-badge">
                <IonIcon name="time-outline" aria-hidden="true" />
                <span className="span">Click Here!!</span>
              </div>
              <div className="card-content">
                <span className="badge">Placements</span>
                <h3 className="h3">
                  <a href="/pg-page" className="card-title">Post Graduation</a>
                </h3>
                {/* <div className="wrapper">
                  <p className="rating-text">({course2.rating})</p>
                </div> */}
                    <ul className="card-meta-list">
                  <li className="card-meta-item">
                    <IonIcon name="library-outline" aria-hidden="true" />
                    <span className="span">30+ companies</span>
                  </li>
                  <li className="card-meta-item">
                    <IonIcon name="people-outline" aria-hidden="true" />
                    <span className="span">100% placement</span>
                  </li>
                </ul>
              </div>
            </div>
          </li>

          {/* Course 3 */}
          <li>
            <div className="course-card" onClick={() => handleNavigate('/eventconducted')} style={{ cursor: 'pointer' }}>
              <figure  className="card-banner img-holder" style={{ '--width': 370, '--height': 220 }}>
                <img src={img3} width="370" height="220" loading="lazy" alt="" className="img-cover" />
              </figure>
              <div className="abs-badge">
                <IonIcon name="time-outline" aria-hidden="true" />
                <span className="span">Click Here!!</span>
              </div>
              <div className="card-content">
                <span className="badge">Moments</span>
                <h3 className="h3">
                  <a  className="card-title">Events Conducted</a>
                </h3>
                <div className="wrapper">
                </div>
                <ul className="card-meta-list">
                  <li className="card-meta-item">
                    <IonIcon name="library-outline" aria-hidden="true" />
                    <span className="span">Events</span>
                  </li>
                  <li className="card-meta-item">
                    <IonIcon name="people-outline" aria-hidden="true" />
                    <span className="span">Activities</span>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};


const VideoSection = () => {
  const handleNavigate1 = () => {
    window.location.href = 'https://www.youtube.com/watch?v=LlCwHnp3kL4&t=17s';
  };

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  };
  return (
    <section className="video has-bg-image" aria-label="video"
      style={{ backgroundImage: `url(${video})`}}
    >
      <div className="container">
        <div className="video-card">
          <div className="video-banner img-holder has-after" style={{ '--width': 970, '--height': 550 }}>
            <img src={videobanner} width="970" height="550" loading="lazy" alt="video banner" className="img-cover" />
            <div>
      <button onClick={handleNavigate1} className="play-btn" aria-label="play video">
        <IonIcon name="play" aria-hidden="true" />
      </button>
      {/* <YouTube videoId="LlCwHnp3kL4" opts={opts} /> */}
    </div>
          </div>
          {/* <img src={videoshape1} width="1089" height="605" loading="lazy" alt="" className="shape video-shape-1" />
          <img src={videoshape2} width="158" height="174" loading="lazy" alt="" className="shape video-shape-2" /> */}
        </div>
      </div>
    </section>
  );
};

const StatsSection = () => {
  return (
    <section className="section stats" aria-label="stats">
      <div className="container">
        <ul className="grid-list">
          <li>
            <div className="stats-card" style={{ '--color': '170, 75%, 41%' }}>
              <h3 className="card-title">600</h3>
              <p className="card-text">Number of Students</p >
            </div>
          </li>
          <li>
            <div className="stats-card" style={{ '--color': '351, 83%, 61%' }}>
              <h3 className="card-title">100%</h3>
              <p className="card-text">safety of students</p>
            </div>
          </li>
          <li>
            <div className="stats-card" style={{ '--color': '260, 100%, 67%' }}>
              <h3 className="card-title">100%</h3>
              <p className="card-text">Satisfaction Rate</p>
            </div>
          </li>
          <li>
            <div className="stats-card" style={{ '--color': '42, 94%, 55%' }}>
              <h3 className="card-title">34+</h3>
              <p className="card-text">Top Instructors</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

const MScCourseOutcome = () => (
  <div className="blog-card">
    <figure className="card-banner img-holder has-after" style={{ '--width': '370px', '--height': '370px' }}>
      <img src={msc} width="370" height="370" loading="lazy" alt="Become A FullStack Developer or A Data Scientist" className="img-cover" />
    </figure>
    <div className="card-content">
      <a href="/Msccs" className="card-btn" aria-label="read more">
        <IonIcon name="arrow-forward-outline" aria-hidden="true" />
      </a>
      <h3 className="h3">
        <a href="/Msccs" className="card-title">MSc_cs Course</a>
      </h3>
      <ul className="card-meta-list">
        <li className="card-meta-item">
          <IonIcon name="calendar-outline" aria-hidden="true" />
          <span className="span">PG</span>
        </li>
        <li className="card-meta-item">
          <IonIcon name="chatbubbles-outline" aria-hidden="true" />
          <span className="span">Updated Course</span>
        </li>
      </ul>
      <p className="card-text">
        “Education is the most powerful weapon which you can use to change the world”
      </p>
    </div>
  </div>
);

const MCACourseOutcome = () => (
  <div className="blog-card">
    <figure className="card-banner img-holder has-after" style={{ '--width': '370px', '--height': '370px' }}>
      <img src={mca} width="370" height="370" loading="lazy" alt="Become A Better Blogger: Content Planning" className="img-cover" />
    </figure>
    <div className="card-content">
      <a href="/MCA" className="card-btn" aria-label="read more">
        <IonIcon name="arrow-forward-outline" aria-hidden="true" />
      </a>
      <h3 className="h3">
        <a href="/MCA" className="card-title">MCA Course </a>
      </h3>
      <ul className="card-meta-list">
        <li className="card-meta-item">
          <IonIcon name="calendar-outline" aria-hidden="true" />
          <span className="span">PG</span>
        </li>
        <li className="card-meta-item">
          <IonIcon name="chatbubbles-outline" aria-hidden="true" />
          <span className="span">Updated Course</span>
        </li>
      </ul>
      <p className="card-text">
        “Education is the most powerful weapon which you can use to change the world”
      </p>
    </div>
  </div>
);

const MBACourseOutcome = () => (
  <div className="blog-card">
    <figure className="card-banner img-holder has-after" style={{ '--width': '370px', '--height': '370px' }}>
      <img src={mba} width="370" height="370" loading="lazy" alt="Become A FullStack Developer or A Data Scientist" className="img-cover" />
    </figure>
    <div className="card-content">
      <a href="/mba" className="card-btn" aria-label="read more">
        <IonIcon name="arrow-forward-outline" aria-hidden="true" />
      </a>
      <h3 className="h3">
        <a href="./mba" className="card-title">MBA Course </a>
      </h3>
      <ul className="card-meta-list">
        <li className="card-meta-item">
          <IonIcon name="calendar-outline" aria-hidden="true" />
          <span className="span">PG</span>
        </li>
        <li className="card-meta-item">
          <IonIcon name="chatbubbles-outline" aria-hidden="true" />
          <span className="span">Updated Course</span>
        </li>
      </ul>
      <p className="card-text">
        “Education is the most powerful weapon which you can use to change the world”
      </p>
    </div>
  </div>
);

const MicrobiologyCourseOutcomes = () => (
  <div className="blog-card">
    <figure className="card-banner img-holder has-after" style={{ '--width': '370px', '--height': '370px' }}>
      <img src={micro} width="370" height="370" loading="lazy" alt="Become A FullStack Developer or A Data Scientist" className="img-cover" />
    </figure>
    <div className="card-content">
      <a href="/micro" className="card-btn" aria-label="read more">
        <IonIcon name="arrow-forward-outline" aria-hidden="true" />
      </a>
      <h3 className="h3">
        <a href="./micro" className="card-title">Microbiology Course </a>
      </h3>
      <ul className="card-meta-list">
        <li className="card-meta-item">
          <IonIcon name="calendar-outline" aria-hidden="true" />
          <span className="span">UG & PG</span>
        </li>
        <li className="card-meta-item">
          <IonIcon name="chatbubbles-outline" aria-hidden="true" />
          <span className="span">Updated Course</span>
        </li>
      </ul>
      <p className="card-text">
        “Education is the most powerful weapon which you can use to change the world”
      </p>
    </div>
  </div>
);

const EnglishCourseOutcomes = () => (
  <div className="blog-card">
    <figure className="card-banner img-holder has-after" style={{ '--width': '370px', '--height': '370px' }}>
      <img src={eng} width="370" height="370" loading="lazy" alt="Become A FullStack Developer or A Data Scientist" className="img-cover" />
    </figure>
    <div className="card-content">
      <a href="/english" className="card-btn" aria-label="read more">
        <IonIcon name="arrow-forward-outline" aria-hidden="true" />
      </a>
      <h3 className="h3">
        <a href="./english" className="card-title">English Course </a>
      </h3>
      <ul className="card-meta-list">
        <li className="card-meta-item">
          <IonIcon name="calendar-outline" aria-hidden="true" />
          <span className="span">UG & PG</span>
        </li>
        <li className="card-meta-item">
          <IonIcon name="chatbubbles-outline" aria-hidden="true" />
          <span className="span">Updated Course</span>
        </li>
      </ul>
      <p className="card-text">
        “Education is the most powerful weapon which you can use to change the world”
      </p>
    </div>
  </div>
);


const UGOutcome = () => (
  <div className="blog-card">
    <figure className="card-banner img-holder has-after" style={{ '--width': '370px', '--height': '370px' }}>
      <img src={ug} width="370" height="370" loading="lazy" alt="Become A Better Blogger: Content Planning" className="img-cover" />
    </figure>
    <div className="card-content">
      <a href="/ugoutcome" className="card-btn" aria-label="read more">
        <IonIcon name="arrow-forward-outline" aria-hidden="true" />
      </a>
      <h3 className="h3">
        <a href="/ugoutcome" className="card-title">UG CS & BCA</a>
      </h3>
      <ul className="card-meta-list">
        <li className="card-meta-item">
          <IonIcon name="calendar-outline" aria-hidden="true" />
          <span className="span">UG</span>
        </li>
        <li className="card-meta-item">
          <IonIcon name="chatbubbles-outline" aria-hidden="true" />
          <span className="span">Updated Course</span>
        </li>
      </ul>
      <p className="card-text">
        “Education is the most powerful weapon which you can use to change the world”
      </p>
    </div>
  </div>
);

const BlogSection = () => (
  <section className="section blog has-bg-image" id="blog" aria-label="blog" >
    <div className="container">
      <p className="section-subtitle">Quick Links</p>
      <h2 className="h2 section-title">Get Course Knowledge</h2>
      <ul className="grid-list">
        <li><MScCourseOutcome /></li>
        <li><MCACourseOutcome /></li>
        <li><MBACourseOutcome /></li>
        <li><MicrobiologyCourseOutcomes/></li>
        <li><EnglishCourseOutcomes/></li>
        <li><UGOutcome /></li>
      </ul>
      {/* <img src={blogshape} width="186" height="186" loading="lazy" alt="" className="shape blog-shape" /> */}
    </div>
  </section>
);

const Footer = () => {
  return (
    <footer className="footer" >
      <div className="footer-top section">
        <div className="container grid-list">
          <div className="footer-brand">
            <a href="#" className="logo">
              <img src={logo} width="50" height="50" alt="" />
            </a>
            <p className="footer-brand-text">
            EduNest – A nest for managing all educational activities efficiently.
            </p>
            <div className="wrapper">
              <span className="span">Address:</span>
                          <address className="address">242, Trichy Road,
                              Sulur,
                              Coimbatore – 641 402.
                              Tamilnadu,
                              South India.</address>
            </div>
            <div className="wrapper">
              <span className="span">Call:</span>
              <a href="tel:+011234567890" className="footer-link">+91 9876543210</a>
            </div>
            <div className="wrapper">
              <span className="span">Email:</span>
              <a href="mailto:info@eduweb.com" className="footer-link">sdsinstitutions@gmail.com</a>
            </div>
          </div>

          <ul className="footer-list">
            <li><p className="footer-list-title">Department</p></li>
            <li><a href="#about" className="footer-link">About</a></li>
            <li><a href="#blog" className="footer-link">Courses</a></li>
            <li><a href="#" className="footer-link">Instructor</a></li>
            <li><a href="#" className="footer-link">Events</a></li>
          </ul>

          <ul className="footer-list">
            <li><p className="footer-list-title">Links</p></li>
            <li><a href="/contact" className="footer-link">Contact Us</a></li>
            <li><a href="https://rvscas.ac.in/campus/gallery" className="footer-link">Gallery</a></li>
            <li><a href="https://rvscas.ac.in/iqac" className="footer-link">IQAS</a></li>
            <li><a href="http://localhost:3000/admin-register#" className="footer-link">Sign In/Registration</a></li>
                      </ul>

          <div className="footer-list">
            <p className="footer-list-title">Contacts</p>
            <p className="footer-list-text">
              Enter your email address to register for our Department.
            </p>
            {/* <form action="" className="newsletter-form">
              <input type="email" name="email_address" placeholder="Your email" required className="input-field" />
              <button type="submit" className="btn has-before">
                <span className="span">Send</span>
                <IonIcon name="arrow-forward-outline" aria-hidden="true" />
              </button>
            </form> */}
            {/* <ul className="social-list">
              <li><a href="#" className="social-link"><IonIcon name="logo-facebook" /></a></li>
              <li><a href="#" className="social-link"><IonIcon name="logo-linkedin" /></a></li>
              <li><a href="#" className="social-link"><IonIcon name="logo-instagram" /></a></li>
              <li><a href="#" className="social-link"><IonIcon name="logo-twitter" /></a></li>
              <li><a href="#" className="social-link"><IonIcon name="logo-youtube" /></a></li>
            </ul> */}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p className="copyright">
            Copyright 2024 All Rights Reserved by SDS Groups
          </p>
        </div>
      </div>
    </footer>
  );
};

const App = () => {
  return (
    <div id="top">
      <Header />
      <main>
        <article>
          <HeroSection />
          {/* <CategorySection /> */}
          <AboutSection />
          <CategorySection/>
          <BlogSection /> 
          <CourseSection />
          <StatsSection />
          <VideoSection />
          

          <Footer />
        </article>
      </main>
    </div>
  );
};

export default App; 