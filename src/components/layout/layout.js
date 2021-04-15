import React, { useState } from "react"
import { Helmet } from "react-helmet"
import Navbar from "../navbar/navbar"
import Sidebar from "../sidebar/sidebar"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: "Encode Sans Expanded", sans-serif;
      scroll-behavior: smooth;
      scroll-margin-top: 80px;
    }
`

function Layout(props) {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Encode+Sans+Expanded:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <title>VirtualBank</title>
      </Helmet>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      {props.children}
    </>
  )
}

export default Layout
