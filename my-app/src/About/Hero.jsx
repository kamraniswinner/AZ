import React from 'react'
import styled from 'styled-components'

const Herodiv = styled.div`
background-image : url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
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