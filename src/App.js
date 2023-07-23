import {BrowserRouter,Routes,Route} from 'react-router-dom'

import Header from './components/Header'
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import { NotFound } from './components/NotFound';

const App =()=>(
  <BrowserRouter>
  
  <div className='app-container'>
    <div className="responsive-container">
    <Header/>

    <Routes>
      <Route exact path="/" Component={Home}/>
      <Route exact path="/about" Component={About}/>
      <Route exact path="/contact" Component={Contact}/>
      <Route path="*" Component={NotFound}/>
      </Routes>
    </div>
  </div>

  </BrowserRouter>
)

export default App