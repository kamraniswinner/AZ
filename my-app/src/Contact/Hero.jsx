import React from 'react'
import styled from 'styled-components'

const Herodiv = styled.div`
background-image : url('https://img.freepik.com/free-photo/glowing-blue-lines-dark-background_1017-19953.jpg?w=900&t=st=1702910493~exp=1702911093~hmac=067411776f6356cf01b0738718532991098032f0d7a58695b3c21e04bcbaf166');
width:100%;
height:90vh;
background-size: cover; 
background-position: center;
`

const Hero = () => {
  return (
    <div>
        <Herodiv/>
    </div>
  )
}

export default Hero