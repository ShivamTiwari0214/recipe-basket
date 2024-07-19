import './App.css';
import Home from './components/home/Home';
import { Header } from './components/header/Header';
import {BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import { PromptDataState } from './context/PromptDataState';
import SavedFood from "./components/savedFood/SavedFood"

function App() {
  return (
    <PromptDataState>
    <Router>
    <div className="App">
    <Header />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/saved' element={<SavedFood />}/>
    </Routes>
    </div>
    </Router>
    </PromptDataState>
  );
}

export default App;
