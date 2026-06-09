import React from 'react'
import styled from 'styled-components'
import { skills } from '../../data/constants'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 20px;
  margin-bottom: 40px;

`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1100px;
  width: 100%;
  gap: 12px;
`

export const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

export const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const SkillsContainer = styled.div`
  
 display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-top: 30px;
  width: 100%;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

`

const Skill = styled.div`
  max-width: 450px;
  width: 100%;
  background: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.primary};
  border-radius: 12px;
  padding: 20px;
`

const SkillTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  text-align: center;
`

const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  margin-top: 15px;
`

const SkillItem = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.text_primary};
  border: 1px solid ${({ theme }) => theme.text_secondary};
  border-radius: 10px;
  padding: 8px 12px;
`

const Skills = () => {
  return (
    <Container id="skills">
      <Wrapper>

        <Title>Skills</Title>

        <Desc>
          Here are the technologies I use to build modern web applications.
        </Desc>

        <SkillsContainer>
          {skills.map((skill) => (
            <Skill key={skill.title}>
              <SkillTitle>{skill.title}</SkillTitle>

              <SkillList>
                {skill.skills.map((item, index) => (
                  <SkillItem key={index}>
                    {item.name}
                  </SkillItem>
                ))}
              </SkillList>

            </Skill>
          ))}
        </SkillsContainer>

      </Wrapper>
    </Container>
  )
}

export default Skills