import React, { useState } from "react"
import Navbar from "../navbar/navbar"
import Sidebar from "../sidebar/sidebar"
import Hero from "../hero/hero"
import { createGlobalStyle } from "styled-components"
import "@fontsource/encode-sans-expanded/400.css"
import "@fontsource/encode-sans-expanded/700.css"

const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        font-family: "Encode Sans Expanded", sans-serif;
    }
`

function Layout(props) {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Hero />
      {props.children}
    </div>
  )
}

export default Layout
