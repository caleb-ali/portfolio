import { useState, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import "inter-ui/inter.css";
import profilePicture from "./images/calebali.png";
import Github from "./images/github-brands.svg";
import Linkedin from "./images/linkedin-brands.svg";
import Envelope from "./images/envelope-solid.svg";
import Dot from "./images/dot.png";
import Arrow from "./images/right-up.png";

// Global styles to remove default margins
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #151515;
  }
`;

// Add this at the top with your other imports
const orangePalette = {
  primary: "#FF7A00",
  secondary: "#FF9A42",
  accent: "#FF5E00",
};

const AppContainer = styled.div`
  font-family: "Inter", sans-serif;
  min-height: 100vh;
  width: 100%;
  background-color: #151515;
  display: flex;
  justify-content: center;
  overflow-x: hidden;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1560px;
  width: 100%;
  @media (max-width: 1000px) {
    flex-direction: column;
    min-height: 100vh; // Ensure container takes full height
  }
`;

const Left = styled.div`
  width: 45%;
  background-color: #151515;
  position: fixed;
  @media (max-width: 1000px) {
    width: 100%;
    position: static; // Ensure normal document flow
  }
`;

const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  margin: 1rem;
  @media (min-width: 1000px) {
    margin: 2rem;
  }
  @media (min-width: 1240px) {
    margin: 6rem;
  }
  @media (max-width: 1000px) {
    padding-bottom: 2rem; // Add space before right content
  }
`;

const Right = styled.div`
  width: 55%;
  background-color: #151515;
  position: relative;
  margin-left: 45%;
  @media (max-width: 1000px) {
    width: 100%;
    position: static; // Ensure normal document flow
    margin-left: 0;
  }
`;

const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  margin: 1rem;
  @media (min-width: 1000px) {
    margin: 2rem;
  }
  @media (min-width: 1240px) {
    margin: 6rem;
  }
`;

// const MobileHeader = styled.div`
//   display: none;
//   @media (max-width: 1000px) {
//   display: block;
//   margin-bottom: 1.5rem;
//   }
 
// `;

const MobileHeader = styled.div<{ $isSticky?: boolean }>`
  display: none;
  @media (max-width: 1000px) {
    display: block;
    margin-bottom: 1.5rem;
    position: sticky;
    top: 0;
    padding: 1rem 0;
    z-index: 100;
    background-color: ${props => props.$isSticky ? "#202022" : "transparent"};
    transition: background-color 0.3s ease;
  }
`;

const MobileHeaderText = styled.p`
  font-size: 16px;
  color: #ffffff;
  line-height: 1.5;
  margin: 0;
  font-weight: 600;
`;

const SmallText = styled.p`
  font-size: 18px;
  color: #949495;
  line-height: 1.5;
  margin: 0;
`;

const CardHeader = styled.p`
  margin: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px; /* Add gap between elements */
  img:last-of-type {
    /* Arrow image */
    transition: all 0.3s ease;
    transform: translateY(3px); /* Initial position - slightly lower */
  }
`;

const CardText = styled.p`
  font-size: 14px;
  color: #949495;
  line-height: 1.5;
  margin: 0;
`;

const CardText2 = styled.p`
  font-size: 16px;
  color: #949495;
  line-height: 1.5;
  margin: 0;
`;

const SmallTextWhite = styled.p`
  font-size: 16px;
  color: #ffffff;
  margin: 0;
`;

const SmallTextBold = styled.p`
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  margin: 0;
`;

const Top = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Middle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media (max-width: 1000px) {
    display: none;
  }
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;
  @media (min-width: 1001px) {
    position: fixed;
    bottom: 6rem;
  }
  @media (max-width: 1000px) {
    position: static; // Normal flow on mobile
    margin: 2rem 0;
  }
  @media (max-width: 450px) {
    gap: 0.5rem;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Description = styled.div``;

const StyledSVG = styled.img`
  width: 16px;
  height: auto;
`;

const ProfilePic = styled.div``;

const About = styled.div`
  scroll-margin-top: 100px;
`;

const Articles = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  margin-top: 5rem;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

const ArticlesColoum1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 50%;
  @media (max-width: 1000px) {
    width: 100%;
  }
`;

const ArticlesColoum2 = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 50%;
  @media (max-width: 1000px) {
    width: 100%;
    margin-top: 0;
  }
`;

const ArticlesTop = styled.div``;

const ArticlesBottom = styled.div``;

const Experience = styled.div`
  margin-top: 5rem;
`;

const Projects = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 5rem;
`;

const ProjectText1 = styled.p`
  font-size: 16px;
  color: #ffffff;
  margin: 0;
  font-weight: 600;
`;

const ProjectText2 = styled.p`
  font-size: 14px;
  color: #ffffff;
  margin: 0;
  font-weight: 500;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ProjectText3 = styled.p`
  font-size: 14px;
  color: #949495;
  line-height: 1.5;
  margin: 0;

  a {
    color: #ffffff;
    text-decoration: none;
    transition: color 0.3s ease;
    font-size: 15px;
    
    @media (min-width: 1001px) {
      &:hover {
        color: ${orangePalette.secondary};
      }
    }
  }
`;

const ProjectText4 = styled.p`
  font-size: 14px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px; /* Add gap between elements */
  img:last-of-type {
    /* Arrow image */
    transition: all 0.3s ease;
    transform: translateY(2px); /* Initial position - slightly lower */
  }
`;

const ArticlesCard = styled.div<ArticleCardProps>`
  width: calc(50%-0.5rem);
  display: flex;
  flex-direction: column;
  gap: 5rem;
  padding: 1rem 2rem;
  background-color: #202022;
  color: #ffffff;
  opacity: ${(props) =>
    props.$ishoveredArticle === "true" || props.$ishoveredArticle === null
      ? 1
      : 0.5};
  transition: all 0.3s ease;
  transform-origin: center;

  @media (min-width: 1001px) {
    &:hover {
      background-color: #202022;
      transform: scale(1.11);
      cursor: pointer;
      opacity: 1;
    }
  }
`;

const ProjectsCard = styled.div<ProjectsCardProps>`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 2rem;
  color: #ffffff;
  background-color: #202022;
  transition: all 0.3s ease;
  transform-origin: center;
  opacity: ${(props) =>
    props.$ishovered === "true" || props.$ishovered === null ? 1 : 0.5};

  @media (min-width: 1001px) {
    &:hover {
      background-color: #202022;
      transform: scale(1.11);
      cursor: pointer;
      opacity: 1;

      ${ProjectText4} {
        color: ${orangePalette.secondary};

        img:last-of-type {
          filter: brightness(0) saturate(100%) invert(58%) sepia(98%)
            saturate(1037%) hue-rotate(359deg) brightness(101%) contrast(105%);
          transform: translateY(-2px) translateX(2px);
        }
      }
    }
  }
`;
const ExperienceCard = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  margin-bottom: 4rem;
  padding: 1rem 2rem;
  margin-left: -2rem;
  color: #ffffff;
  transition: all 0.3s ease;
  transform-origin: center;

  @media (max-width: 640px) {
    flex-direction: column;
    gap: 1rem;
  }

  @media (min-width: 1001px) {
    &:hover {
      background-color: #202022;
      transform: scale(1.05);
      cursor: pointer;

      ${CardHeader} {
        color: ${orangePalette.secondary};

        img:first-of-type {
          filter: brightness(0) saturate(100%) invert(58%) sepia(98%)
            saturate(1037%) hue-rotate(359deg) brightness(101%) contrast(105%);
        }

        img:last-of-type {
          filter: brightness(0) saturate(100%) invert(58%) sepia(98%)
            saturate(1037%) hue-rotate(359deg) brightness(101%) contrast(105%);
          transform: translateY(-2px) translateX(2px);
        }
      }
    }
  }
`;
const ViewResume = styled.div`
  color: #ffffff;
  transition: all 0.3s ease;
  transform-origin: center;

  @media (min-width: 1001px) {
    &:hover {
      cursor: pointer;

      ${CardHeader} {
        color: ${orangePalette.secondary};

        img {
          filter: brightness(0) saturate(100%) invert(58%) sepia(98%)
            saturate(1037%) hue-rotate(359deg) brightness(101%) contrast(105%);
          transform: translateY(-2px) translateX(2px);
        }
      }
    }
  }
`;


const CardLeft = styled.div`
  width: 30%;
  @media (max-width: 640px) {
    flex-direction: column;
    gap: 1rem;
    width: 100%;
  }
`;

const CardRight = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media (max-width: 640px) {
    flex-direction: column;
    gap: 1rem;
    width: 100%;
  }
`;

const CardRightTop = styled.div``;
const CardRightMiddle = styled.div``;

const CardRightBottom = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

// Then update these components:
const LargeText = styled.h1`
  line-height: 1.25;
  font-weight: 700;
  font-size: 60px;
  margin: 0;
  color: #ffffff; /* Changed from orange to white */
  @media (max-width: 430px) {
    font-size: 50px;
  }
`;

const OrangeText = styled.span`
  color: ${orangePalette.secondary};
`;

const LargeText2 = styled.h1`
  line-height: 1.25;
  font-weight: 700;
  font-size: 25px;
  margin: 0;
  color: #ffffff;
`;

const Section = styled.div<{ $active?: boolean }>`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${(props) => (props.$active ? orangePalette.secondary : "#949495")};
  font-weight: ${(props) => (props.$active ? "600" : "normal")};
  transition: all 0.3s ease;

  @media (min-width: 1001px) {
    &:hover {
      color: ${orangePalette.secondary};
      font-weight: 600;
    }

    &:hover::before,
    &::before {
      content: "";
      display: inline-block;
      width: ${(props) => (props.$active ? "60px" : "30px")};
      height: 1px;
      background-color: ${(props) =>
        props.$active ? orangePalette.secondary : "#949495"};
      margin-right: 10px;
      transition: all 0.3s ease;
    }

    &:hover::before {
      width: 60px;
      background-color: ${orangePalette.secondary};
    }
  }

  // For mobile (keep the active state styling)
  &::before {
    content: "";
    display: inline-block;
    width: ${(props) => (props.$active ? "60px" : "30px")};
    height: 1px;
    background-color: ${(props) =>
      props.$active ? orangePalette.secondary : "#949495"};
    margin-right: 10px;
    transition: all 0.3s ease;
  }
`;

const Tools = styled.div`
  border-radius: 15px;
  background-color: rgba(255, 122, 0, 0.05); /* Orange with 10% opacity */
  color: ${orangePalette.secondary};
  padding: 0 12px;
  font-size: 12px;
  line-height: 30px;
  margin-right: 10px;
  margin-bottom: 10px;
  display: inline-flex;
  align-items: center;
`;

const Profile = styled.img`
  width: 70px;
  height: auto;
  border-radius: 50%;
  border: 2px solid ${orangePalette.secondary};
  padding: 2px;
`;

const SocialLink = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
    color: #ffffff;
    transition: all 0.3s ease;

    @media (min-width: 1001px) {
      &:hover {
        color: ${orangePalette.secondary};

        p {
          color: inherit;
        }
        img {
          filter: brightness(0) saturate(100%) invert(58%) sepia(98%)
            saturate(1037%) hue-rotate(359deg) brightness(101%) contrast(105%);
        }
      }
    }
  }
`;

const DotImage = styled.img`
  width: 14px;
  height: 14px;
`;

const Footer = styled.div`
  margin-top: 8rem;
  margin-bottom: 2rem;
`;

interface ProjectsCardProps {
  $ishovered?: string | null;
}

interface ArticleCardProps {
  $ishoveredArticle?: string | null;
}




const App = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [hoveredArticle, setHoveredArticle] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState("about");


  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "experience", "projects", "articles"];
      const scrollPosition = window.scrollY + 200; // Adjust this offset as needed

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Container>
          <Left>
            <LeftContent>
              <Top>
                <Header>
                  <LargeText>
                    <OrangeText>Hi,</OrangeText> I'm Caleb
                  </LargeText>
                  <LargeText2>Front End Developer</LargeText2>
                </Header>
                <Description>
                  <SmallText>
                    I build Pixel-Perfect UIs and Scalable Frontend Solutions
                  </SmallText>
                </Description>
              </Top>
              <Middle>
                <Section
                  onClick={() => scrollToSection("about")}
                  $active={activeSection === "about"}
                >
                  <SmallTextBold>ABOUT</SmallTextBold>
                </Section>
                <Section
                  onClick={() => scrollToSection("experience")}
                  $active={activeSection === "experience"}
                >
                  <SmallTextBold>EXPERIENCE</SmallTextBold>
                </Section>
                <Section
                  onClick={() => scrollToSection("projects")}
                  $active={activeSection === "projects"}
                >
                  <SmallTextBold>PROJECTS</SmallTextBold>
                </Section>
                <Section
                  onClick={() => scrollToSection("articles")}
                  $active={activeSection === "articles"}
                >
                  <SmallTextBold>ARTICLES</SmallTextBold>
                </Section>
              </Middle>
              <Bottom>
                <ProfilePic>
                  <Profile src={profilePicture} />
                </ProfilePic>
                <SocialLink>
                  <a
                    href="https://github.com/caleb-ali"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <StyledSVG src={Github} alt="Github" />
                    <SmallTextWhite>Github</SmallTextWhite>
                  </a>
                </SocialLink>
                <SocialLink>
                  <a
                    href="https://linkedin.com/in/caleb-ali"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <StyledSVG src={Linkedin} alt="Linkedin" />
                    <SmallTextWhite>Linkedin</SmallTextWhite>
                  </a>
                </SocialLink>
                <SocialLink>
                  <a
                    href="mailto:calebali413@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <StyledSVG src={Envelope} alt="Mail" />
                    <SmallTextWhite>Mail</SmallTextWhite>
                  </a>
                </SocialLink>
              </Bottom>
            </LeftContent>
          </Left>
          <Right>
            <RightContent>
             
              <About id="about">
              <MobileHeader>
                <MobileHeaderText>ABOUT</MobileHeaderText>
              </MobileHeader>
                <SmallText>
                  I'm a frontend developer passionate about building responsive,
                  user-centered interfaces that merge elegant design with solid
                  engineering. I specialize in creating seamless experiences
                  across all devices, focusing on clean, maintainable code that
                  supports both performance and usability. I thrive in
                  collaborative environments where thoughtful design meets
                  functional execution.
                  <br />
                  <br />
                  Currently, I’m a Frontend Developer at Evendy, where I focus
                  on building and maintaining a role-based access control
                  dashboard and vendor marketplace. I work on crafting
                  responsive and secure user interfaces that ensure seamless
                  experiences across devices, while collaborating closely with
                  backend teams to integrate frontend logic and maintain
                  efficient user sessions.
                  <br />
                  <br />
                  In my spare time, I’m usually learning something new, watching
                  movies or taking a walk{" "}
                </SmallText>
              </About>
     
              <Experience id="experience">
              <MobileHeader>
                <MobileHeaderText>EXPERIENCE</MobileHeaderText>
              </MobileHeader>
                <a
                  href="https://www.evendy.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <ExperienceCard>
                    <CardLeft>
                      <CardText>2024 - PRESENT</CardText>
                    </CardLeft>
                    <CardRight>
                      <CardRightTop>
                        <CardHeader>
                          Frontend Developer
                          <DotImage src={Dot} />
                          Evendy
                          <img src={Arrow} alt="arrow" />
                        </CardHeader>
                      </CardRightTop>
                      <CardRightMiddle>
                        <CardText2>
                          Build and maintain a role-based access control
                          dashboard and responsive web interfaces. Collaborate
                          with backend engineers to implement secure API
                          integrations and real-time data handling. Translate
                          Figma designs into production-ready UIs and advocate
                          for performance and design consistency across web and
                          mobile platforms.
                        </CardText2>
                      </CardRightMiddle>
                      <CardRightBottom>
                        <Tools>TypeScript</Tools>
                        <Tools>React</Tools>
                        <Tools>React Query</Tools>
                        <Tools>Styled Components</Tools>
                        <Tools>Ant Design</Tools>
                        <Tools>Recharts</Tools>
                      </CardRightBottom>
                    </CardRight>
                  </ExperienceCard>
                </a>
                <a
                  href="https://thriveagric.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <ExperienceCard>
                    <CardLeft>
                      <CardText>MAY - NOV 2023</CardText>
                    </CardLeft>
                    <CardRight>
                      <CardRightTop>
                        <CardHeader>
                          Frontend Developer intern <DotImage src={Dot} />{" "}
                          ThriveAgric <img src={Arrow} alt="arrow" />
                        </CardHeader>
                      </CardRightTop>
                      <CardRightMiddle>
                        <CardText2>
                          Led a cross-functional team in building a user-focused
                          React.js web app, streamlining project delivery
                          through effective version control and collaboration.
                          Integrated frontend with backend services, improved
                          cross-browser compatibility, and optimized performance
                          for responsiveness across devices.
                        </CardText2>
                      </CardRightMiddle>
                      <CardRightBottom>
                        <Tools>HTML</Tools>
                        <Tools>CSS</Tools>
                        <Tools>React</Tools>
                        <Tools>JavaScript</Tools>
                        <Tools>Tailwind CSS</Tools>
                        <Tools>React Native</Tools>
                      </CardRightBottom>
                    </CardRight>
                  </ExperienceCard>
                </a>
                <ViewResume>
                  <CardHeader>
                    View Full Résumé
                    <img src={Arrow} alt="arrow" />
                  </CardHeader>
                </ViewResume>
              </Experience>

              <Projects id="projects">
              <MobileHeader>
                <MobileHeaderText>PROJECTS</MobileHeaderText>
              </MobileHeader>
                <a
                  href="https://calebali.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <ProjectsCard
                    onMouseEnter={() => setHoveredCard(1)}
                    onMouseLeave={() => setHoveredCard(null)}
                    $ishovered={
                      hoveredCard === null || hoveredCard === 1
                        ? "true"
                        : "false"
                    }
                  >
                    <ProjectText1>Rekruit</ProjectText1>
                    <ProjectText2>
                      Javascript <DotImage src={Dot} /> React{" "}
                      <DotImage src={Dot} /> Tailwind css
                    </ProjectText2>
                    <ProjectText3>
                      A recruitment management platform
                    </ProjectText3>
                    <ProjectText4>
                      View Project
                      <img src={Arrow} alt="arrow" />
                    </ProjectText4>
                  </ProjectsCard>
                </a>
                <a
                  href="https://calebali.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <ProjectsCard
                    onMouseEnter={() => setHoveredCard(2)}
                    onMouseLeave={() => setHoveredCard(null)}
                    $ishovered={
                      hoveredCard === null || hoveredCard === 2
                        ? "true"
                        : "false"
                    }
                  >
                    <ProjectText1>Portfolio Page</ProjectText1>
                    <ProjectText2>
                      Javascript <DotImage src={Dot} /> React{" "}
                      <DotImage src={Dot} /> Tailwind css
                    </ProjectText2>
                    <ProjectText3>My previous portfolio page</ProjectText3>
                    <ProjectText4>
                      View Project
                      <img src={Arrow} alt="arrow" />
                    </ProjectText4>
                  </ProjectsCard>
                </a>
                <a
                  href="https://github.com/caleb-ali/mobile-taskManager"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <ProjectsCard
                    onMouseEnter={() => setHoveredCard(3)}
                    onMouseLeave={() => setHoveredCard(null)}
                    $ishovered={
                      hoveredCard === null || hoveredCard === 3
                        ? "true"
                        : "false"
                    }
                  >
                    <ProjectText1>Mobile Task Manager</ProjectText1>
                    <ProjectText2>React Native</ProjectText2>
                    <ProjectText3>
                      A simple mobile task manager built using react native
                    </ProjectText3>
                    <ProjectText4>
                      View Project
                      <img src={Arrow} alt="arrow" />
                    </ProjectText4>
                  </ProjectsCard>
                </a>
              </Projects>
              <Articles id="articles">
              <MobileHeader>
                <MobileHeaderText>ARTICLES</MobileHeaderText>
              </MobileHeader>
                <ArticlesColoum1>
                  <a
                    href="https://dev.to/calebali/how-to-build-dynamic-charts-in-react-with-recharts-including-edge-cases-3e72"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    <ArticlesCard
                      onMouseEnter={() => setHoveredArticle(1)}
                      onMouseLeave={() => setHoveredArticle(null)}
                      $ishoveredArticle={
                        hoveredArticle === null || hoveredArticle === 1
                          ? "true"
                          : "false"
                      }
                    >
                      <ArticlesTop>
                        <ProjectText2>Frontend</ProjectText2>
                        <ProjectText3>May 21, 2025</ProjectText3>
                      </ArticlesTop>
                      <ArticlesBottom>
                        <ProjectText2>
                          How to Build Dynamic Charts in React with Recharts
                        </ProjectText2>
                        <ProjectText3>20min read</ProjectText3>
                      </ArticlesBottom>
                    </ArticlesCard>
                  </a>

                  <a
                    href="https://www.linkedin.com/feed/update/urn:li:activity:7161334636189483009/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    <ArticlesCard
                      onMouseEnter={() => setHoveredArticle(2)}
                      onMouseLeave={() => setHoveredArticle(null)}
                      $ishoveredArticle={
                        hoveredArticle === null || hoveredArticle === 2
                          ? "true"
                          : "false"
                      }
                    >
                      <ArticlesTop>
                        <ProjectText2>Personal</ProjectText2>
                        <ProjectText3>Febuary 08, 2024</ProjectText3>
                      </ArticlesTop>
                      <ArticlesBottom>
                        <ProjectText2>
                          Finding Consistency in my Journey as a Frontend
                          Developer
                        </ProjectText2>
                        <ProjectText3>5min read</ProjectText3>
                      </ArticlesBottom>
                    </ArticlesCard>
                  </a>
                </ArticlesColoum1>
                <ArticlesColoum2>
                  <a
                    href="https://www.linkedin.com/feed/update/urn:li:activity:7137837311353929728/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    <ArticlesCard
                      onMouseEnter={() => setHoveredArticle(3)}
                      onMouseLeave={() => setHoveredArticle(null)}
                      $ishoveredArticle={
                        hoveredArticle === null || hoveredArticle === 3
                          ? "true"
                          : "false"
                      }
                    >
                      <ArticlesTop>
                        <ProjectText2>Personal</ProjectText2>
                        <ProjectText3>December 05, 2023</ProjectText3>
                      </ArticlesTop>
                      <ArticlesBottom>
                        <ProjectText2>
                          My journey as a frontend developer intern
                        </ProjectText2>
                        <ProjectText3>5min read</ProjectText3>
                      </ArticlesBottom>
                    </ArticlesCard>
                  </a>
                  <a
                    href="https://www.linkedin.com/feed/update/urn:li:activity:7134870313862914048/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    <ArticlesCard
                      onMouseEnter={() => setHoveredArticle(4)}
                      onMouseLeave={() => setHoveredArticle(null)}
                      $ishoveredArticle={
                        hoveredArticle === null || hoveredArticle === 4
                          ? "true"
                          : "false"
                      }
                    >
                      <ArticlesTop>
                        <ProjectText2>Personal</ProjectText2>
                        <ProjectText3>November 27, 2023</ProjectText3>
                      </ArticlesTop>
                      <ArticlesBottom>
                        <ProjectText2>
                          Reflecting on DevFest Abuja 2023
                        </ProjectText2>
                        <ProjectText3>5min read</ProjectText3>
                      </ArticlesBottom>
                    </ArticlesCard>
                  </a>
                </ArticlesColoum2>
              </Articles>
              <Footer>
                <ProjectText3>
                  Inspired by{" "}
                  <a
                    href="https://www.sarahdayan.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Sarah Dayan
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://brittanychiang.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Brittany Chiang.
                  </a>
                </ProjectText3>
              </Footer>
            </RightContent>
          </Right>
        </Container>
      </AppContainer>
    </>
  );
};

export default App;
