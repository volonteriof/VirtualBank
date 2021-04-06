import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { FaBars } from "@react-icons/all-files/fa/FaBars"

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  height: 80px;
  margin-top: -80px;
  background-color: #000000;
  font-size: 1rem;
  z-index: 2;

  @media (max-width: 960px) {
    transition: 0.8s all ease;
  }
`

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;
  height: 80px;
  padding: 0 24px;
`

const NavLogo = styled(Link)`
  display: flex;
  align-items: center;
  justify-self: flex-start;
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
`

const HamburgerIcon = styled.div`
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

const NavLink = styled.a`
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

const ButtonWrapper = styled.nav`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`

const NavButton = styled(Link)`
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

function Navbar({ toggle }) {
  return (
    <Nav>
      <NavContainer>
        <NavLogo to="/">VirtualBank</NavLogo>
        <HamburgerIcon onClick={toggle}>
          <FaBars />
        </HamburgerIcon>
        <NavMenu>
          <NavItem>
            <NavLink href="#about">About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#discover">Discover</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#services">Services</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#signup">Sign Up</NavLink>
          </NavItem>
        </NavMenu>
        <ButtonWrapper>
          <NavButton to="account">Sign In</NavButton>
        </ButtonWrapper>
      </NavContainer>
    </Nav>
  )
}

export default Navbar
