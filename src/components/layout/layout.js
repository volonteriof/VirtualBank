import React from "react"
import Navbar from "../navbar/navbar"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        font-family: "Encode Sans Expanded", sans-serif;
    }
`

function Layout(props) {
  return (
    <div>
      <GlobalStyle />
      <Navbar />
      {props.children}
    </div>
  )
}

export default Layout
