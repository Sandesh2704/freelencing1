import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Page from './Component/Page.js'
 import Forntpage from './Component/Forntpage'
import Footers from './Component/Footers';
import NavBar from './Component/NavBar.js';

function App() {
  return (
    <Router>      
      <NavBar/>
      <Forntpage/>
      <Page />
        <Footers/> 
    </Router>
  );
}

export default App;
