import { Link as LinkR } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.div`
  background-color: ${({theme}) => theme.card};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 10;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  padding: 0 20px;
`;

export const NavLogo = styled(LinkR)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

export const Span = styled.div`
  margin-left: 8px;
  font-weight: bold;
  font-size: 18px;
`;

export const NavItems = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

export const ButtonContainer = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

export const GitHubButton = styled.a`
  border: 1px solid ${({ theme }) => theme.primary};
  padding: 6px 14px;
  border-radius: 8px;
  color: ${({ theme }) => theme.primary};
  text-decoration: none;

  &:hover {
    background: ${({ theme }) => theme.primary};
    color: white;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    cursor: pointer;
  }
`;

export const MobileMenu = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  flex-direction: column;
  gap: 12px;
  background: ${({ theme }) => theme.card};
  padding: 20px;
  position: absolute;
  top: 80px;
  width: 100%;
`;

export const MobileLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;