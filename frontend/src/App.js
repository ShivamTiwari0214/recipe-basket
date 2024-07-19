import './App.css';
import Home from './components/home/Home';
import RecipePage from './components/Recipe/RecipePage'; // Added Recipe Page
import { Header } from './components/header/Header';
import {BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import { PromptDataState } from './context/PromptDataState';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Added Font Awesome Directory

function App() {
  return (
    <PromptDataState>
    <Router>
    <div className="App">
    <Header />
    <Routes>
      
      <Route path='/' element={<Home />}/>
      <Route path="/recipes" element={<RecipePage />}/>
    
    </Routes>
    </div>
    </Router>
    </PromptDataState>
  );
}

export default App;
