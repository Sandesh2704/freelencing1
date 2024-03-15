import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Page from './Component/Page.js'

import Footers from './Component/Footers';

function App() {
  return (
    <Router>       
        <Page />
       <Footers/>
    </Router>
  );
}

export default App;
