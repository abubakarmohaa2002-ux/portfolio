import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
  width: 320px;
  background: ${({ theme }) => theme.card};
  border-radius: 12px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`

const Image = styled.img`
  width: 100%;
  height: 180px;
  object-fit: contain;
  object-position: top;
  border-radius: 8px;
`

const Title = styled.h3`
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
`

const Description = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.text_secondary};
`

const Tags = styled.div`
  display: flex;
  justify-content: center;   /* ✅ centers horizontally */
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 6px;

`

const Tag = styled.span`
  font-size: 12px;
  padding: 4px 8px;
  background: ${({ theme }) => theme.primary};
  color: white;
  border-radius: 8px;
`

const Links = styled.div`
  display: flex;
  gap: 10px;
  margin-top: auto;
`

const ProjectLink = styled.a`
  flex: 1;
  padding: 8px 12px;
  border: 1px solid ${({ theme }) => theme.primary};
  border-radius: 8px;
  background: ${({ theme, $secondary }) =>
    $secondary ? 'transparent' : theme.primary};
  color: ${({ theme, $secondary }) =>
    $secondary ? theme.primary : 'white'};
  font-size: 13px;
  font-weight: 600;
  text-align: center;
  text-decoration: none;

  &:hover {
    opacity: 0.85;
  }
`

const ProjectCard = ({ project }) => {
  return (
    <Card>

      <Image
       src={project.image || "https://via.placeholder.com/300"}
       alt={`${project.title} screenshot`} />

      <Title>{project.title}</Title>

      <Description>{project.description}</Description>

      <Tags>
        {project.tags?.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
      </Tags>

      <Links>
       <ProjectLink
         href={project.github}
         target="_blank"
         rel="noopener noreferrer"
         $secondary
       >
        Source Code
       </ProjectLink>

       <ProjectLink
        href={project.webapp}
        target="_blank"
        rel="noopener noreferrer"
     >
        Live Demo
       </ProjectLink>
      </Links>

      

    </Card>
  )
}

export default ProjectCard
