import styled from 'styled-components';
import { Bio } from '../../data/constants';

const FooterContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
`;

const FooterWrapper = styled.footer`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  color: ${({ theme }) => theme.text_primary};
`;

const Logo = styled.h1`
  font-size: 18px;
  color: ${({ theme }) => theme.primary};
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  font-size: 14px;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 10px;
`;

const Button = styled.a`
  padding: 6px 12px;
  background: ${({ theme }) => theme.primary};
  color: white;
  border-radius: 6px;
  font-size: 12px;
  text-decoration: none;
`;

const Copyright = styled.p`
  margin-top: 10px;
  font-size: 12px;
  color: ${({ theme }) => theme.text_secondary};
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>

        {/* ✅ Your Name */}
        <Logo>Abubakar Mohammed</Logo>

        {/* ✅ Clean Navigation */}
        <Nav>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </Nav>

        {/* ✅ Important Links Only */}
        <SocialLinks>
          <Button href={Bio.github} target="_blank">GitHub</Button>
          <Button href={Bio.linkedin} target="_blank">LinkedIn</Button>
        </SocialLinks>

        {/* ✅ Clean Footer */}
        <Copyright>
          © 2026 Abubakar Mohammed
        </Copyright>

      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;