import React from 'react';
import styled from 'styled-components';

const Mainwrapper = styled.div`

`

const FooterContainer = styled.div`
  background-color: black;
  color: white;
  padding: 20px;
  display: flex;
  justify-content: space-between;
`;

const AddressColumn = styled.div`
  flex: 1;
`;

const CenterColumn = styled.div`
  flex: 1;
  text-align: center;

  ul {
    padding: 0;
    list-style: none;
  }

  li {
    text-decoration: none;
    color: white;
    margin-bottom:12px;
  }
  a {
    text-decoration: none; /* Remove underline */
    color: white; /* Set text color to white */
  }
`;

const ContactColumn = styled.div`
  flex: 1;
  text-align: right;
`

const Footertext = styled.div`
  width: 100%;
  background-color: black;
  color: white;
  padding: 10px;
  text-align: center;
`

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Mainwrapper>
    <FooterContainer>
      <AddressColumn>
        <h4>Address</h4>
        <p>123 Street Name</p>
        <p>City, Country</p>
      </AddressColumn>

      
      <CenterColumn>
        <h4>Quick Links</h4>
        <ul>
          <li><a href="/about-us">About Us</a></li>
          <li><a href="/faq">FAQ</a></li>
          <li><a href="/terms">Terms of Service</a></li>
          <li><a href="/support">Help or Support</a></li>
          </ul>
      </CenterColumn>

      <ContactColumn>
        <h4>Contact Information</h4>
        <p>Phone: +123 456 789</p>
        <p>Email: example@example.com</p>
      </ContactColumn>
    </FooterContainer>
    <Footertext>
    © {currentYear} dearsoft.
    </Footertext>
    </Mainwrapper>
  );
};

export default Footer;
