import styled, { createGlobalStyle } from "styled-components";
import "inter-ui/inter.css";

// Global styles to remove default margins
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;

const AppContainer = styled.div`
  font-family: "Inter", sans-serif;
  display: flex;
  flex-direction: row;
  background-color: #151515;
  height: 100vh;
  width: 100%;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

const Container = styled.div``;

const Left = styled.div`
  position: fixed;
  width: 50%;
  height: 100vh;
  background-color: #151515;
  @media (max-width: 1000px) {
    position: static; // Remove fixed positioning on smaller screens
    width: 100%; // Full width on smaller screens
  }
`;

const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 6rem;
`;

const RightContent = styled.div``;

const Right = styled.div`
  position: relative;
  margin-left: 50%;
  height: 100vh;
  overflow-y: auto; // Enable vertical scrolling
  width: 50%;
  background-color: #151515;
  @media (max-width: 1000px) {
    margin-left: 0; // Remove margin on smaller screens
    width: 100%; // Full width on smaller screens
  }
`;

const LargeText = styled.h1`
  line-height: 1.25;
  font-weight: 700;
  font-size: 60px;
  margin: 0;
  color: #ffffff;
`;

const LargeText2 = styled.h1`
  line-height: 1.25;
  font-weight: 700;
  font-size: 40px;
  margin: 0;
  color: #ffffff;
`;

const MediumTextBold = styled.h2`
  line-height: 1.25;
  font-weight: 600;
  font-size: 22px;
  margin: 0;
  color: #ffffff;
`;

const SmallText = styled.p`
  font-size: 18px;
  color: #949495;
`;

const SmallTextBold = styled.p`
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
`;

const Top = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Middle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 4rem;
`;

const Bottom = styled.div``;

const Header = styled.div``;

const Description = styled.div``;

const Section = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #949495;
  transition: all 0.3s ease;

  &:hover {
    color: #ffffff;
    font-weight: 600;
  }

  &:hover::before {
    width: 50px;
    background-color: #ffffff;
  }

  &::before {
    content: '';
    display: inline-block;
    width: 20px;
    height: 1px;
    background-color: #949495;
    margin-right: 10px;
    transition: all 0.3s ease;
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Container>
          <Left>
            <LeftContent>
              <Top>
                <Header>
                  <LargeText>Hi. I'm Caleb</LargeText>
                  <LargeText2> Frontend Developer</LargeText2>
                </Header>
                <Description>
                  <SmallText>
                    I build Pixel-Perfect UIs and Scalable Frontend Solutions
                  </SmallText>
                </Description>
              </Top>
              <Middle>
                <Section>About</Section>
                <Section>Skills</Section>
                <Section>Experience</Section>
                <Section>Projects</Section>
              </Middle>
              <Bottom></Bottom>
            </LeftContent>
          </Left>
          <Right>
            <RightContent></RightContent>
          </Right>
        </Container>
      </AppContainer>
    </>
  );
};

export default App;