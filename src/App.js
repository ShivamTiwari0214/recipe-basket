import './App.css';
import Home from './components/home/Home';
import { Header } from './components/header/Header';
import {BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import { PromptDataState } from './context/PromptDataState';

function App() {
  return (
    <PromptDataState>
    <Router>
    <div className="App">
    <Header />
    <Routes>
      
      <Route path='/' element={<Home />}/>
    
    </Routes>
    </div>
    </Router>
    </PromptDataState>
  );
}

export default App;
