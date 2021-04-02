import React from "react"
import { FaBars } from "@react-icons/all-files/fa/FaBars"
import { Link } from "gatsby"
import styled from "styled-components"

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  height: 80px;
  /* margin-top: -80px; */
  background-color: #000000;
  font-size: 1rem;
  z-index: 1;

  @media (max-width: 960px) {
    transition: 0.8s all ease;
  }
`

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;
  height: 80px;
  padding: 0 24px;
  z-index: 1;
`

const NavLogo = styled(Link)`
  display: flex;
  align-items: center;
  justify-self: flex-start;
  margin-left: 24px;
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
`

const MobileIcon = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    color: #ffffff;
    font-size: 1.8rem;
    transform: translate(-100%, 60%);
    cursor: pointer;
  }
`

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  margin-right: -22px;
  text-align: center;
  list-style: none;

  @media (max-width: 768px) {
    display: none;
  }
`

const NavItem = styled.li`
  height: 80px;
`

const NavLinks = styled(Link)`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 1rem;
  color: #ffffff;
  text-decoration: none;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #01bf71;
  }
`

const NavButton = styled.nav`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`

const NavButtonLink = styled(Link)`
  padding: 10px 22px;
  color: #010606;
  background-color: #01bf71;
  border: none;
  border-radius: 50px;
  outline: none;
  font-size: 16px;
  white-space: nowrap;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    color: #010606;
    background-color: #ffffff;
    transition: all 0.2s ease-in-out;
  }
`

function Navbar() {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">VirtualBank</NavLogo>
          <MobileIcon>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="discover">Discover</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="services">Services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="signup">Sign Up</NavLinks>
            </NavItem>
          </NavMenu>
          <NavButton>
            <NavButtonLink to="/signin">Sign In</NavButtonLink>
          </NavButton>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar
