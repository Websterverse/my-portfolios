
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NAV from './Components/NAV';
import HOME from './Components/HOME';
import More from './Components/More';

function App() {
  return (
    <Router>
      <NAV />
      <Routes>
        <Route path="/" element={<HOME />} />
        <Route path="/more" element={<More />} />
      </Routes>
    </Router>
  );
}

export default App;

