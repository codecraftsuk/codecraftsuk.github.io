import styled from 'styled-components';
import './App.css';
import Navigation from './components/Navigation';
import Router from './routing';

const AppWrapper = styled.div`
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primaryText};
`;

function App() {
  return (
    <div className="app">
      <AppWrapper>
        <Navigation />
        <Router />
      </AppWrapper>
    </div>
  );
}

export default App;
