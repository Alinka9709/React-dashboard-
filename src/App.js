import './App.css';
import Dashboard from './components/Dashboard';
import Results from './components/Results'
import Finalize from './components/Finalize';


import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className='body'>

      <Router>

        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/results" element={<Results />} />
          <Route exact path="/finalize" element={<Finalize />} />

        </Routes>

      </Router>
    </div>
  );
}

export default App;

