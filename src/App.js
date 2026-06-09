import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { darkTheme, lightTheme } from "./utils/Themes.js";
import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import styled from "styled-components";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  background: linear-gradient(
      38.73deg,
      rgba(59, 130, 246, 0.1) 0%,
      rgba(59, 130, 246, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(59, 130, 246, 0) 50%,
      rgba(59, 130, 246, 0.1) 100%
    );
  width: 100%;
  
`;

function App() {
  const [darkMode] = useState(true);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router>
        <Navbar />
        <Body>

          <HeroSection />

          <Wrapper>
            <Skills />
          </Wrapper>

          <Projects />

          <Wrapper>
            <Contact />
          </Wrapper>

          <Footer />

        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
