import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Nav = () => {

  return (
    <>
      <StNav>
        <StLogoDiv>
          <StLogoSpan>
            AIdol
          </StLogoSpan>
        </StLogoDiv>

        <StBtnDiv>
          <StButton>
            <StImg src={process.env.PUBLIC_URL + '/images/search-icon-white.png'}></StImg>
          </StButton>
          <StButton>
            <StImg src={process.env.PUBLIC_URL + '/images/alarm-icon-white.png'}></StImg>
          </StButton>
          <StSignInBtn>
            <StBtnP>Sign In</StBtnP>
          </StSignInBtn>
        </StBtnDiv>
      </StNav>

      {/* <DropDownDiv>
        <DropDownImgDiv>
          <StImg src={process.env.PUBLIC_URL + '/images/search-icon-white.png'}></StImg>
        </DropDownImgDiv> 
        <DropDownInput 
        placeholder='아티스트 검색하기'
        />
      </DropDownDiv> */}
    </>
  )
}

// Dropdown
const DropDownDiv = styled.div`
width: 100vw;
height: 300px;
background-color: #3a3a3a;
padding-top: 80px;

display: flex;
align-items: center;
justify-content: center;
`
const DropDownImgDiv = styled.div`
  width: 50px;
  height: 50px;
`
const DropDownInput = styled.input`
  width: 40vw;
  height: 50px;

  background-color: transparent;
  border: none;
  border-bottom: 2px solid #292929;

  color: #c5c5c5;
  font-size: 18px;
  font-weight: bold;

  margin-left: 20px;
`



// TODO : 최소 사이즈 1000px 잡기
// Layout
const StNav = styled.nav`
position: fixed;
top: 0;
left: 0;
right: 0;
height: 80px;

background-color: #000000;

z-index: 100;

display: flex;
justify-content: center;
align-items: center;
`

// Logo
const StLogoDiv = styled.div`
    width: 75%;

`
const StLogoSpan = styled.span`
  color: white;
  font-size: 25px;
  font-weight: bold;
  margin-left: 30px;
`

// Button
const StBtnDiv = styled.div`
  width: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const StButton = styled.button`
  width: 30px;
  height: 30px;
  border: 0;
  padding: 0;
  background-color: transparent;
  cursor: pointer;
  margin-right: 40px;

  :hover {
    opacity: 0.5;
    transition: 0.5s;
  }
`
const StSignInBtn = styled.button`
  background-color: #693a8d;
  border: none;
  width: 100px;
  height: 35px;
  border-radius: 5px;
`
const StBtnP = styled.p`
  color: white;
  font-size: 15px;
  text-align: center;
  font-weight: bold;
`

const StImg = styled.img`
  width: inherit;
  height: inherit;
`




export default Nav