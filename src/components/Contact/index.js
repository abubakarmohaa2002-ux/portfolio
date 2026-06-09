import React from 'react'
import styled from 'styled-components'
import { Bio } from '../../data/constants'

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 60px 20px;
`

const Wrapper = styled.div`
  max-width: 600px;
  text-align: center;
`

const Title = styled.h2`
  font-size: 36px;
  color: ${({ theme }) => theme.text_primary};
`

const Desc = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.text_secondary};
  margin: 10px 0 30px;
`

const Button = styled.a`
  display: inline-block;
  margin: 10px;
  padding: 10px 18px;
  background: ${({ theme }) => theme.primary};
  color: white;
  border-radius: 8px;
  text-decoration: none;
  font-size: 14px;
`

const Contact = () => {
  return (
    <Container id="contact">
      <Wrapper>

        <Title>Contact</Title>

        <Desc>
          Feel free to reach out for opportunities or collaboration.
        </Desc>

        <Button href={Bio.github} target="_blank">
          GitHub
        </Button>

        <Button href={Bio.linkedin} target="_blank">
          LinkedIn
        </Button>

        <Button href="mailto:youremail@example.com">
          Email Me
        </Button>

      </Wrapper>
    </Container>
  )
}

export default Contact