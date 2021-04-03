import React, { useState } from "react"
import styled from "styled-components"
import Video from "../../videos/video.mp4"
import { Link } from "gatsby"
import { MdArrowForward } from "@react-icons/all-files/md/MdArrowForward"
import { MdKeyboardArrowRight } from "@react-icons/all-files/md/MdKeyboardArrowRight"

const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 800px;
  padding: 0 30px;
  background-color: #0c0c0c;
`

const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

const VideoBackground = styled.video`
  width: 100%;
  height: 100%;
  background-color: #232a34;
  -o-object-fit: cover;
  object-fit: cover;
`

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  max-width: 1200px;
  padding: 8px 24px;
  z-index: 1;
`

const HeroHeading = styled.h1`
  color: #ffffff;
  font-size: 48px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 40px;
  }

  @media (max-width: 480px) {
    font-size: 32px;
  }
`

const HeroDesc = styled.p`
  max-width: 600px;
  margin-top: 24px;
  color: #ffffff;
  font-size: 24px;
  text-align: center;

  @media (max-width: 480px) {
    font-size: 18px;
  }
`

const HeroButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: content;
  margin-top: 32px;
`

const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`

const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`

function Hero() {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <HeroContainer>
      <HeroBackground>
        <VideoBackground autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBackground>
      <HeroContent>
        <HeroHeading>Virtual Banking Made Easy</HeroHeading>
        <HeroDesc>
          Sig up for a new account today and receive 250$ in credit towards your
          next payment.
        </HeroDesc>
        {/* <HeroButton>
          <HeroButtonLink
            to="signup"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
          >
            Get started {hover ? <ArrowForward /> : <ArrowRight />}
          </HeroButtonLink>
        </HeroButton> */}
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero
