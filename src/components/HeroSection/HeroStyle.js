import styled from "styled-components";

export const HeroContainer = styled.div`
  background: ${({ theme }) => theme.card};
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px;

  @media (max-width: 960px) {
    padding: 66px 16px;
  }

  @media (max-width: 640px) {
    padding: 32px 16px;
  }

  z-index: 1;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;

export const HeroBg = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  max-width: 1360px;
  overflow: hidden;
`;

export const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const HeroLeftContainer = styled.div`
  width: 100%;

  @media (max-width: 960px) {
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const HeroRightContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;

  @media (max-width: 960px) {
    justify-content: center;
    margin-bottom: 60px;
  }
`;

export const Img = styled.img`
  width: 100%;
  max-width: 350px;
  border-radius: 50%;
  border: 3px solid ${({ theme }) => theme.primary};

  @media (max-width: 640px) {
    max-width: 260px;
  }
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 50px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 64px;

  @media (max-width: 640px) {
    font-size: 38px;
    text-align: center;
  }
`;

export const TextLoop = styled.div`
  font-weight: 600;
  font-size: 28px;
  display: flex;
  gap: 8px;
  color: ${({ theme }) => theme.text_primary};

  @media (max-width: 640px) {
    font-size: 20px;
    justify-content: center;
  }
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.primary};
`;

export const SubTitle = styled.div`
  font-size: 18px;
  line-height: 30px;
  margin: 20px 0 30px;
  color: ${({ theme }) => theme.text_secondary};

  @media (max-width: 640px) {
    text-align: center;
    font-size: 16px;
  }
`;

export const ResumeButton = styled.a`
  display: inline-block;
  text-align: center;
  padding: 12px 24px;
  max-width: 220px;
  color: ${({ theme }) => theme.white};
  border-radius: 12px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  background: ${({ theme }) => theme.primary};
  text-decoration: none;
  transition: 0.3s;

  &:hover {
    transform: scale(1.05);
    background: ${({ theme }) => theme.primary};
    opacity: 0.9;
  }

  @media (max-width: 640px) {
    margin: auto;
  }
`;