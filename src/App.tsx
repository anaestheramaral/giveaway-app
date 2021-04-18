import GlobalStyle from './styles/global';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';

const App:React.FC = () => {
  return (
    <>
      <GlobalStyle />
      
      <Router>
        <Routes />
      </Router>
    </>
  );
}

export default App;
