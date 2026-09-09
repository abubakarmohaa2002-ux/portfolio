import React from 'react'
import HeroBgAnimation from '../HeroBgAnimation'
import {
  HeroContainer,
  HeroBg,
  HeroLeftContainer,
  Img,
  HeroRightContainer,
  HeroInnerContainer,
  TextLoop,
  Title,
  Span,
  SubTitle,
  ResumeButton,
  ResumeLink,
  RolePrefix
} from './HeroStyle'

import HeroImg from '../../images/HeroImage.jpg'
import Typewriter from 'typewriter-effect'
import { Bio } from '../../data/constants'

const HeroSection = () => {
  return (
    <div id="home">
      <HeroContainer>

        {/* Background animation */}
        <HeroBg>
          <HeroBgAnimation />
        </HeroBg>

        <HeroInnerContainer>

          {/* LEFT SIDE */}
          <HeroLeftContainer>

            <Title>
              Hi, I’m {Bio.name}
            </Title>

            <TextLoop>
              <RolePrefix>I am a</RolePrefix>
              <Span>
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Span>
            </TextLoop>

            <SubTitle>
              {Bio.description}
            </SubTitle>

            {/* ✅ Better CTA */}
            <ResumeButton href="#projects">
              View My Work
            </ResumeButton>

            <ResumeLink
              href="/Abubakar_Mohammed_Bakar_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
        >
              View Resume (PDF)
            </ResumeLink>

          </HeroLeftContainer>

          {/* RIGHT SIDE */}
          <HeroRightContainer>

            <Img src={HeroImg} alt="Profile" />

          </HeroRightContainer>

        </HeroInnerContainer>

      </HeroContainer>
    </div>
  )
}

export default HeroSection
