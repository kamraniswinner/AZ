import React from 'react';
import styled from 'styled-components';

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

const ContactFormContainer = styled.div`
  max-width: 700px;
  margin: 80px auto;
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormLabel = styled.label`
  margin-bottom: 8px;
  font-weight: bold;
`;

const FormInput = styled.input`
  padding: 10px;
  margin-bottom: 36px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const FormTextArea = styled.textarea`
  padding: 10px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const FormButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const ContactForm = () => {
  return (
    <>
      <Heading><h1>Contact Us</h1></Heading>
      <ContactFormContainer>
        <Form>
          <FormLabel htmlFor="name">Name:</FormLabel>
          <FormInput type="text" id="name" name="name" required />

          <FormLabel htmlFor="email">Email:</FormLabel>
          <FormInput type="email" id="email" name="email" required />

          <FormLabel htmlFor="contact">Contact:</FormLabel>
          <FormInput type="tel" id="contact" name="contact" pattern="[0-9]{10}" required />
          {/* Use pattern="[0-9]{10}" to enforce a 10-digit number, adjust as needed. */}

          <FormLabel htmlFor="city">City:</FormLabel>
          <FormInput type="text" id="city" name="city" required />

          <FormLabel htmlFor="country">Country:</FormLabel>
          <FormInput type="text" id="country" name="country" required />

          <FormLabel htmlFor="pincode">Pin Code:</FormLabel>
          <FormInput type="text" id="pincode" name="pincode" required />
          {/* You may want to add additional validation for pin codes. */}

          <FormLabel htmlFor="message">Message:</FormLabel>
          <FormTextArea id="message" name="message" rows="4" required />

          <FormButton type="submit">Submit</FormButton>
        </Form>
      </ContactFormContainer>
    </>
  );
};
export default ContactForm;
