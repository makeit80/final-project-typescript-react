import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Nav = () => {
  
  return (
    <StNav>
      <StLogoSpan>
        AIdol
      </StLogoSpan>

      <DropDownDiv>
        <DropDownUl>
          <StyledLink to={"Artist"}>Artist</StyledLink>
          <StyledLink to={"Community"}>Community</StyledLink>
          <StyledLink to={"Mypage"}>Mypage</StyledLink>
        </DropDownUl>
      </DropDownDiv> 

      <StBtnDiv>
        {/* TODO : Dropdown, search 아이콘 두께 변경 */}
        <StButton>
          <StImg src={process.env.PUBLIC_URL + '/images/search-icon-white.png'}></StImg>
        </StButton> 
        <StButton>
          <StImg src={process.env.PUBLIC_URL + '/images/alarm-icon-white.png'}></StImg>
        </StButton>
        <StButton>
          <StImg src={process.env.PUBLIC_URL + '/images/navbar-icon_white.png'}></StImg>
        </StButton>
      </StBtnDiv>
    </StNav>
  )
}

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
const StLogoSpan = styled.span`
  color: white;
  font-size: 25px;
  font-weight: bold;
  margin-left: 30px;
`

// Dropdown
const DropDownDiv = styled.div`
  width: 80%;
`
const DropDownUl = styled.ul`
  
`
const StyledLink = styled(Link)`
display: none;
  text-decoration: none;
  color: white;
`

// Button
const StBtnDiv = styled.div`
  width: 15%;
  display: flex;
  justify-content: flex-end;
`
const StButton = styled.button`
  width: 30px;
  height: 30px;
  border: 0;
  padding: 0;
  background-color: transparent;
  cursor: pointer;
  margin-right: 30px;

  :hover {
    opacity: 0.5;
    transition: 0.5s;
  }
`

const StImg = styled.img`
  width: inherit;
  height: inherit;
`

export default Nav