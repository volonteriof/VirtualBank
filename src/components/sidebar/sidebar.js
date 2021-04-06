import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { FaTimes } from "@react-icons/all-files/fa/FaTimes"

const SideContainer = styled.aside`
  display: grid;
  align-items: center;
  position: fixed;
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #0d0d0d;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  transition: 0.3s ease-in-out;
  z-index: 3;
`

const CloseIcon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  color: #ffffff;
  background-color: transparent;
  outline: none;
  font-size: 2rem;
  cursor: pointer;
`

const SideWrapper = styled.div`
  color: #ffffff;
`

const SideMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;
  list-style: none;

  @media (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`

const SideLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-size: 1.5rem;
  text-decoration: none;
  transition: 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    color: #01bf71;
    transition: 0.2s ease-in-out;
  }
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const SideButton = styled(Link)`
  padding: 16px 64px;
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

function Sidebar({ isOpen, toggle }) {
  return (
    <SideContainer isOpen={isOpen} onClick={toggle}>
      <CloseIcon onClick={toggle}>
        <FaTimes />
      </CloseIcon>
      <SideWrapper>
        <SideMenu>
          <SideLink href="#about" onClick={toggle}>
            About
          </SideLink>
          <SideLink href="#discover" onClick={toggle}>
            Discover
          </SideLink>
          <SideLink href="#services" onClick={toggle}>
            Services
          </SideLink>
          <SideLink href="#signup" onClick={toggle}>
            Sign Up
          </SideLink>
        </SideMenu>
        <ButtonWrapper>
          <SideButton to="account">Sign In</SideButton>
        </ButtonWrapper>
      </SideWrapper>
    </SideContainer>
  )
}

export default Sidebar
