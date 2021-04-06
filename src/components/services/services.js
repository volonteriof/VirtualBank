import React from "react"
import styled from "styled-components"
import Icon1 from "../../../static/images/svg-4.svg"
import Icon2 from "../../../static/images/svg-5.svg"
import Icon3 from "../../../static/images/svg-6.svg"

const ServicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 900px;
  background-color: #010606;

  @media (max-width: 768px) {
    height: 1300px;
  }
`

const ServicesHeading = styled.h1`
  margin-bottom: 64px;
  color: #ffffff;
  font-size: 2.5rem;

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`

const ServicesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  grid-gap: 16px;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 50px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const ServicesCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  max-height: 340px;
  padding: 30px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`

const ServicesIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`

const ServicesTitle = styled.h2`
  margin-bottom: 2rem;
  font-size: 1rem;
`

const ServicesDesc = styled.p`
  font-size: 1rem;
  text-align: center;
`

function Services() {
  return (
    <ServicesContainer id="services">
      <ServicesHeading>I nostri servizi</ServicesHeading>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesTitle>Riduci le spese</ServicesTitle>
          <ServicesDesc>
            Ti aiutiamo a ridurre le spese e aumentare i guadagni.
          </ServicesDesc>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesTitle>Sportelli vitruali</ServicesTitle>
          <ServicesDesc>
            Puoi accedere al tuo conto da qualunque parte del mondo.
          </ServicesDesc>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesTitle>Offerte premium</ServicesTitle>
          <ServicesDesc>
            Ottieni la nostra carta di credito che offre un cash back del 5%.
          </ServicesDesc>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services
