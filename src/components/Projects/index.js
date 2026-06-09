import React from 'react'
import styled from 'styled-components'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 60px 20px;
`

const Wrapper = styled.div`
  max-width: 1100px;
  width: 100%;
  text-align: center;
`

const Title = styled.h2`
  font-size: 36px;
  color: ${({ theme }) => theme.text_primary};
`

const Desc = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.text_secondary};
  margin: 10px 0 40px;
`

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`

const Projects = () => {
  return (
    <Container id="projects">
      <Wrapper>

        <Title>Projects</Title>

        <Desc>
          Here are some of the projects I have built using modern web technologies.
        </Desc>

        <CardContainer>
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </CardContainer>

      </Wrapper>
    </Container>
  )
}

export default Projects