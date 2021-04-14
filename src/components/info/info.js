import React from "react"
import styled from "styled-components"
import { Button } from "../button/button"

const InfoContainer = styled.div`
  color: #ffffff;
  background-color: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#010606")};

  @media (max-width: 768px) {
    padding: 100px 0;
  }
`

const InfoWrapper = styled.div`
  display: grid;
  justify-content: center;
  width: 100%;
  max-width: 1100px;
  height: 860px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  z-index: 1;

  @media (max-width: 480px) {
    height: 660px;
  }
`

const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `"col2 col1"` : `"col1 col2"`};

  @media (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `"col1" "col2"` : `"col1 col1" "col2 col2"`};
  }
`

const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`

const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`

const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`

const TopLine = styled.p`
  margin-bottom: 16px;
  color: #01bf71;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
`

const Heading = styled.h1`
  margin-bottom: 24px;
  color: ${({ lightText }) => (lightText ? "#f7f8f8" : "#010606")};
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;

  @media (max-width: 480px) {
    font-size: 32px;
  }
`

const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  color: ${({ darkText }) => (darkText ? "#010606" : "#ffffff")};
  font-size: 18px;
  line-height: 24px;
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`

const ImgWrapper = styled.div`
  max-width: 555px;
  height: 100%;
`

const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`

function Info({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  heading,
  darkText,
  description,
  primary,
  dark,
  buttonLabel,
  imgSrc,
  alt,
}) {
  return (
    <InfoContainer lightBg={lightBg} id={id}>
      <InfoWrapper>
        <InfoRow imgStart={imgStart}>
          <Column1>
            <TextWrapper>
              <TopLine>{topLine}</TopLine>
              <Heading lightText={lightText}>{heading}</Heading>
              <Subtitle darkText={darkText}>{description}</Subtitle>
              <ButtonWrapper>
                <Button
                  to="account"
                  primary={primary ? 1 : 0}
                  dark={dark ? 1 : 0}
                >
                  {buttonLabel}
                </Button>
              </ButtonWrapper>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrapper>
              <Img src={imgSrc} alt={alt} />
            </ImgWrapper>
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>
  )
}

export default Info
