import React from 'react'
import {
  Nav,
  NavLink,
  NavbarContainer,
  Span,
  NavLogo,
  NavItems,
  GitHubButton,
  ButtonContainer,
  MobileIcon,
  MobileMenu,
  MobileLink
} from './NavbarStyledComponent'

import { DiCssdeck } from 'react-icons/di'
import { FaBars } from 'react-icons/fa'
import { Bio } from '../../data/constants'
import { useTheme } from 'styled-components'

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const theme = useTheme()

  return (
    <Nav>
      <NavbarContainer>
       <NavLogo to='/'
  style={{
    display: "flex",
    alignItems: "center",
    color: "white"
  }}
>
  <DiCssdeck size="2.5rem" />
  <Span>Abubakar</Span>
</NavLogo>

        {/* ✅ Mobile Menu Icon */}
        <MobileIcon>
          <FaBars onClick={() => setIsOpen(!isOpen)} />
        </MobileIcon>

        {/* ✅ Desktop Menu */}
        <NavItems>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </NavItems>

        {/* ✅ GitHub Button */}
        <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank">
            GitHub
          </GitHubButton>
        </ButtonContainer>

        {/* ✅ Mobile Menu */}
        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#skills" onClick={() => setIsOpen(false)}>
              Skills
            </MobileLink>
            <MobileLink href="#projects" onClick={() => setIsOpen(false)}>
              Projects
            </MobileLink>
            <MobileLink href="#contact" onClick={() => setIsOpen(false)}>
              Contact
            </MobileLink>

            <GitHubButton
              style={{
                padding: '10px 16px',
                background: theme.primary,
                color: 'white',
                width: 'max-content'
              }}
              href={Bio.github}
              target="_blank"
            >
              GitHub
            </GitHubButton>
          </MobileMenu>
        )}

      </NavbarContainer>
    </Nav>
  )
}

export default Navbar
