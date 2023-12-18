import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const ServiceCardContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  width: 380px;
  margin: 20px;
  box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.3);
`;

const ServiceCardHeader = styled.div`
  background-color: transparent;
  color: #333;
  padding: 15px;
  text-align: center;
`;

const ServiceCardImage = styled.img`
  width: 100%;
  height: 280px;
  object-fit: cover;
`;

const ServiceCardBody = styled.div`
  padding: 15px;
  width: 100%;
  display:flex;
  text-align:center;
`;

const ServiceCardText = styled.p`
  font-size: 14px;
  color: #555;
`;

const ServiceCardButton = styled.button`
  background-color: black;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  box-sizing: border-box;
  width: 100%;
  margin-top: 15px;
  text-decoration: none;
  left:10px;
  right:10px;
`;

const ServiceCard = ({ title, imageUrl, description, buttonText }) => {
  return (
    <ServiceCardContainer>
      <ServiceCardHeader>{title}</ServiceCardHeader>
      <ServiceCardImage src={imageUrl} alt={title} />
      <ServiceCardBody>
        {/*<ServiceCardText>{description}</ServiceCardText>*/}
        <ServiceCardButton as={Link} to={encodeURIComponent(description)}>{buttonText}</ServiceCardButton>
      </ServiceCardBody>
    </ServiceCardContainer>
  );
};

export default ServiceCard;