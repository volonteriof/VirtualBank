import styled from "styled-components"
import { Link } from "gatsby"

export const Button = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#010606" : "#ffffff")};
  background-color: ${({ primary }) => (primary ? "#01bf71" : "#010606")};
  border: none;
  border-radius: 50px;
  outline: none;
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  text-decoration: none;
  white-space: nowrap;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: ${({ primary }) => (primary ? "#ffffff" : "#01bf71")};
    transition: all 0.2s ease-in-out;
  }
`
