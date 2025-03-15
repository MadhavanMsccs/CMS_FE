import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import nikeImage from "../assets/1234.webp";
import spotifyImage from "../assets/Pla.png";
import airbnbImage from "../assets/placement.jpg";

// Styled Components
const SlideshowWrapper = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  background: linear-gradient(135deg,rgb(0, 206, 144),rgb(0, 255, 115));
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  overflow: hidden;
`;

const SlideshowContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const SlideshowItems = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
`;

const Item = styled.div`
  position: absolute;
  width: 100%;
  height: auto;
  opacity: ${(props) => (props.isActive ? 1 : 0)};
  transition: opacity 0.6s ease-in-out 0.4s;
  transform: ${(props) => (props.isActive ? "scale(1)" : "scale(0.95)")};
  transition: transform 0.3s ease-out;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 42%;
  margin: 20px auto;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
  &::before {
    content: '';
    position: absolute;
    top: -1px;
    left: 0;
    width: 101%;
    height: 101%;
    background: rgba(34, 34, 42, 0.8);
    border-radius: 15px;
    opacity: ${(props) => (props.isActive ? 0.6 : 0)};
    transition: opacity 0.4s ease-in-out;
  }
`;

const ItemImage = styled.img`
  position: relative;
  width: 100%;
  height: auto;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
`;

const Header = styled.div`
  position: absolute;
  top: 150px;
  left: 5%;
  z-index: 100;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
  .vertical-part {
    margin: 0 -4px;
    font-family: 'Montserrat', sans-serif;
    font-size: 7vw;
    color: #fff;
    overflow: hidden;
    display: inline-block;
    b {
      display: inline-block;
      transform: translateY(100%);
      transition: ${(props) => (props.isActive ? "transform 0.7s ease-in-out" : "transform 0.4s")};
      transform: ${(props) => (props.isActive ? "translateY(0)" : "translateY(100%)")};
    }
  }
`;

const Description = styled.div`
  position: absolute;
  top: 220px;
  right: 5%;
  width: 45%;
  padding: 20px;
  background: rgba(117, 117, 235, 0.96));
  border-radius: 15px;
  color:rgb(255, 139, 7);
  font-size: 1.1em;
  line-height: 1.8;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
`;

const Controls = styled.div`
  position: relative;
  text-align: right;
  z-index: 1000;
  padding: 10px 20px;
`;

const Control = styled.li`
  display: inline-block;
  width: 12px;
  height: 12px;
  margin: 5px;
  background: ${(props) => (props.isActive ? '#6a6a77' : '#bdbdd5')};
  border: ${(props) => (props.isActive ? '2px solid #4d4d56' : 'none')};
  border-radius: 50%;
  cursor: pointer;
  transition: background 0.3s, transform 0.3s;
  &:hover {
    background: #7c7c88;
    transform: scale(1.2);
  }
`;


const PostGradCard= () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      image: nikeImage,
      headerText: ["M", "S", "", "C"],
      descriptionText: ["LUCID IMAGING", "KGISL", "ZOHO", "TCS", "WIPRO", "ACCETURE", "HEXAWARE", "CHANGEPOND"],
    },
    {
      image: spotifyImage,
      headerText: ["M", "C", "A",],
      descriptionText: ["LUCID IMAGING", "KGISL", "ZOHO", "TCS", "WIPRO", "ACCETURE", "HEXAWARE", "CHANGEPOND"],
    },
    {
      image: airbnbImage,
      headerText: ["B", "S", "C",],
      descriptionText: ["LUCID IMAGING", "KGISL", "ZOHO", "TCS", "WIPRO", "ACCETURE", "HEXAWARE", "CHANGEPOND"],
    },
    {
      image: airbnbImage,
      headerText: ["B", "C", "A",],
      descriptionText: ["LUCID IMAGING", "KGISL", "ZOHO", "TCS", "WIPRO", "ACCETURE", "HEXAWARE", "CHANGEPOND"],
    },
    {
      image: airbnbImage,
      headerText: ["M", "B", "A",],
      descriptionText: ["LUCID IMAGING", "KGISL", "ZOHO", "TCS", "WIPRO", "ACCETURE", "HEXAWARE", "CHANGEPOND"],
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <SlideshowWrapper>
      <SlideshowContainer>
        <SlideshowItems>
          {slides.map((slide, index) => (
            <Item key={index} isActive={index === currentIndex}>
              <ImageContainer isActive={index === currentIndex}>
                <ItemImage src={slide.image} alt="slideshow" />
              </ImageContainer>
              <Header isActive={index === currentIndex}>
                {slide.headerText.map((letter, i) => (
                  <span className="vertical-part" key={i}>
                    <b>{letter}</b>
                  </span>
                ))}
              </Header>
              <Description>
                {slide.descriptionText.map((word, i) => (
                  <span className="vertical-part" key={i}>
                    <b>{word}</b>
                  </span>
                ))}
              </Description>
            </Item>
          ))}
        </SlideshowItems>
        <Controls>
          <ul>
            {slides.map((_, index) => (
              <Control
                key={index}
                isActive={index === currentIndex}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </ul>
        </Controls>
      </SlideshowContainer>
    </SlideshowWrapper>
  );
};

export default PostGradCard;
