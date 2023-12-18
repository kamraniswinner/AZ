import React from 'react'
import styled from 'styled-components'

const Herodiv = styled.div`
background-image : url('https://img.freepik.com/free-vector/realistic-background-futuristic-style_23-2149129125.jpg?w=740&t=st=1702911204~exp=1702911804~hmac=9ff57c43deb6034e3aa7c0255317de5611db45fed420681c2a443f99f5d1a774');
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