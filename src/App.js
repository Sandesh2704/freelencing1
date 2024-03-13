import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Page from './Component/Page';

function App() {
  return (
    <Router>
      <div className=" w-[100%] h-[100%] px-2 mb-5 md:px-16 lg:px-32 ">
        <Page />
      </div>
    </Router>
  );
}

export default App;
