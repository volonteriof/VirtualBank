import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  min-height: 692px;
  background: linear-gradient(
    180deg,
    rgba(1, 147, 86, 1) 0%,
    rgba(10, 201, 122, 1) 100%
  );
  overflow: hidden;
  z-index: 0;
`

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;

  @media (max-width: 400px) {
    height: 80%;
  }
`

const Icon = styled(Link)`
  margin-top: 32px;
  margin-left: 32px;
  color: #ffffff;
  font-weight: 700;
  text-decoration: none;

  @media (max-width: 480px) {
    margin-top: 8px;
    margin-left: 16px;
  }
`

const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;

  @media (max-width: 480px) {
    padding: 10px;
  }
`
const Form = styled.form`
  display: grid;
  width: 100%;
  max-width: 400px;
  height: auto;
  margin: 0 auto;
  padding: 80px 32px;
  background-color: #010101;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
  z-index: 1;

  @media (max-width: 400px) {
    padding: 32px 32px;
  }
`

const FormHeading = styled.h1`
  margin-bottom: 40px;
  color: #ffffff;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`

const FormLabel = styled.label`
  margin-bottom: 8px;
  color: #ffffff;
  font-size: 14px;
`

const FormInput = styled.input`
  margin-bottom: 32px;
  padding: 16px 16px;
  border: none;
  border-radius: 4px;
`

const FormButton = styled.button`
  padding: 16px 0;
  color: #ffffff;
  background-color: #01bf71;
  border: none;
  border-radius: 4px;
  font-size: 20px;
  cursor: pointer;
`

const Text = styled.span`
  margin-top: 24px;
  color: #ffffff;
  font-size: 14px;
  text-align: center;
`

function SignIn() {
  return (
    <Container>
      <FormWrapper>
        <Icon to="/">Virtual Bank</Icon>
        <FormContent>
          <Form action="#">
            <FormHeading>Sign in to your account</FormHeading>
            <FormLabel htmlFor="for">Email</FormLabel>
            <FormInput type="email" required />
            <FormLabel htmlFor="for">Password</FormLabel>
            <FormInput type="password" required />
            <FormButton type="submit">Continue</FormButton>
            <Text>Forgot password?</Text>
          </Form>
        </FormContent>
      </FormWrapper>
    </Container>
  )
}

export default SignIn
