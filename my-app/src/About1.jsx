import React from "react";
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';

const Wrapper = styled.div`
display:flex;
flex-direction: column;
width:100%;
height:auto;
background-color:black;
padding:2px;
`

const Heading = styled.div`
display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto; /* Change height to auto */
  line-height: 60px; /* Set line-height to center content vertically */
  background-color: black;
  h1{
    color:white;
  }
`

const Aboutwrapper = styled.div`
display: flex;
flex-direction: row;
width:100%;
height:100%;
background-color: black;

`
const Aboutleft = styled.div`
flex:1;
background-color:pink;
background-image: url('https://plus.unsplash.com/premium_photo-1690971631360-c7b4f08b4f94?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'); 
background-size: cover; 
background-position: center; 
`
const Aboutright = styled.div`
flex:1;
background-color:pink;
padding:20px;
`
const TextDiv = styled.div`
font-family: 'Arial', sans-serif;
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background-color: #f8f8f8;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.3);
  h1 {
    color: #333;
    font-size: 24px;
    margin-bottom: 20px;
  }

  p {
    color: #555;
    font-size: 16px;
    line-height: 1.5;
    margin-bottom: 15px;
  }

  ul {
    list-style-type: none;
    padding: 0;
    font-family: 'Arial', sans-serif;
    font-size: 16px;
  }

  li {
    margin-bottom: 10px;
    font-family: 'Arial', sans-serif;
    line-height: 1.5;
    color: #555;

    strong {
      font-weight: bold;
    }
  }

  h2 {
    margin-top: 30px;
    margin-bottom: 30px;
    color: #333;
    font-size: 24px;

  }
`

const Button = styled.div`
  background-color: black;
  color: white;
  width:140px;
  padding: 10px 20px; 
  border: 2px solid pink; 
  border-radius: 5px; 
  cursor: pointer; 
  font-size: 16px;
  margin-left:20px;
  box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.3);
`

export default function About1() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/About'); // Replace '/about' with your desired route
  };
  return (
    <div>
      <Wrapper>
        <Heading><h1>About</h1></Heading>
        <Aboutwrapper>
          <Aboutleft></Aboutleft>
          <Aboutright>
            <TextDiv>
            <h1>Welcome to dearsoft.</h1>
      <p>
        As a leading provider of cutting-edge IT solutions, we pride ourselves on delivering unparalleled services tailored to meet the unique needs of your business. Our team of skilled professionals is committed to optimizing your technology infrastructure, enhancing efficiency, and ensuring your organization stays ahead in the rapidly evolving digital landscape.We take immense pride in our ability to deliver exceptionally crafted services that are intricately tailored to precisely meet the distinctive needs of your business. 
      </p>

      <h2>Why Choose dearsoft.?</h2>
      <ul>
        <li>
          <strong>Expertise:</strong> Our team comprises experienced professionals with a deep understanding of the latest technologies and industry best practices.
        </li>
        <li>
          <strong>Customer-Centric Approach:</strong> We prioritize your unique needs and goals, delivering customized solutions that align with your business strategy.
        </li>
        <li>
          <strong>Reliability:</strong> Count on us for dependable and responsive support. We are dedicated to keeping your systems running smoothly.
        </li>
        <li>
          <strong>Innovation:</strong> Stay at the forefront of technology with our innovative solutions designed to future-proof your business.
        </li>
      </ul>
            </TextDiv>
            <Button onClick={handleButtonClick}>Read more</Button>
          </Aboutright>
        </Aboutwrapper>
      </Wrapper>
    </div>
  );
}
