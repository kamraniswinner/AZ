import React from 'react'
import styled from 'styled-components'
import ServicesData from './Servicedata'
import ServiceCard from './ServiceCard'

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

const ServiceSectionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
 & > *:hover {
    transform: scale(1.02);
    background-color:pink;
    transition: transform 0.3s ease, background-color 0.3s ease;
  } 
`;

const Service = () => {
  return (
    <>
    <Heading><h1>Our Services</h1></Heading>
    <ServiceSectionContainer>
    {ServicesData.map((service, index) => (
      <ServiceCard key={index} {...service} />
    ))}
  </ServiceSectionContainer>
  </>
  )
}

export default Service