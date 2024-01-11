import React from 'react'
import styled from 'styled-components'

const Home = () => {
  return (
    <StTestImg src={process.env.PUBLIC_URL + '/images/testImg.jpg'} />
  )
}

const StTestImg = styled.img`
  width: 100vw;
  height: 100vh;  
  background-size: cover;
  object-fit: cover;
`

export default Home