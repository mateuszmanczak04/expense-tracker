import Summary from 'components/Summary/Summary';
import './App.css';
import Add from './components/Add/Add';
import Header from './components/Header/Header';
import History from './components/History/History';
// import { AppProvider } from 'AppContext';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Add />
      <Summary />
      <History />
    </div>
  );
};

export default App;
