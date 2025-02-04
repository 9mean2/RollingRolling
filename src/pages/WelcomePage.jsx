import React from 'react';
import styled from 'styled-components';
import Button from '../components/elements/Button';
//npm install react-transition-group
import { CSSTransition } from 'react-transition-group';
import { useBgAnimation } from '../hooks/useBgAnimation';
import { useNavigate } from 'react-router-dom';
import MainTyping from '../components/home/MainTyping';

export default function WelcomePage() {
  const backgrounds = [
    'https://i.imgur.com/SvyQWWU.jpg',
    'https://i.imgur.com/GFBmTcM.jpg',
  ];

  const backgroundIndex = useBgAnimation(backgrounds);

  const navigate = useNavigate();

  return (
    <WelcomeTitleWrapper>
      <WelcomeContainer>
        <StP>
          <MainTyping />
        </StP>
        <BtnContainer>
          <Button defaultBorder onClick={() => navigate('/login')}>
            시작하기
          </Button>
        </BtnContainer>
      </WelcomeContainer>

      {backgrounds.map((url, index) => (
        <CSSTransition
          key={index}
          in={backgroundIndex === index}
          timeout={2000}
          classNames="fade"
          unmountOnExit
        >
          <Background bg={url} />
        </CSSTransition>
      ))}
    </WelcomeTitleWrapper>
  );
}

const WelcomeTitleWrapper = styled.div`
  ${(props) => props.theme.FlexCol}
  width: 100vw;
  height: 100vh;

  * {
    font-family: 'BMJUA';
  }
  .fade-enter {
    opacity: 0;
  }

  .fade-enter-active {
    opacity: 1;
    transition: opacity 2s ease-in-out;
  }

  .fade-exit {
    opacity: 1;
  }

  .fade-exit-active {
    opacity: 0;
    transition: opacity 2s ease-in-out;
  }
`;

const WelcomeContainer = styled.div`
  ${(props) => props.theme.FlexCol}
`;

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: url(${(props) => props.bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
  position: absolute;
`;

const StP = styled.h1`
  font-size: 50px;
  position: relative;
  z-index: 1;
`;

const BtnContainer = styled.div`
  margin-top: 5rem;
  position: relative;
  z-index: 1;
`;
