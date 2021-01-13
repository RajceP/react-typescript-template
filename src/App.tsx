import React from 'react';
import styled from 'styled-components';
import logo from './logo.svg';
import GlobalStyle from './styles/Global';
import Theme from './styles/Theme';

const SApp = styled.div`
  text-align: center;
`;

const SAppLogo = styled.img`
  height: 40vmin;
  pointer-events: none;

  @media (prefers-reduced-motion: no-preference) {
    animation: App-logo-spin infinite 20s linear;
  }

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const SCode = styled.code`
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
`;

const SAppHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const SAppLing = styled.a`
  color: #61dafb;
`;

const App: React.FC = () => (
  <Theme>
    <GlobalStyle />
    <SApp>
      <SAppHeader>
        <SAppLogo src={logo} />
        <p>
          Edit <SCode>src/App.tsx</SCode> and save to reload.
        </p>
        <SAppLing href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </SAppLing>
      </SAppHeader>
    </SApp>
  </Theme>
);

export default App;
