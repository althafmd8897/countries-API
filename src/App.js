import { Route, Routes } from 'react-router-dom';
import './App.css';
import First from './First';
import About from './About';
import Api from './Components/Api';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Api />} />
        <Route path="/about" element={<About />} />
      </Routes>

    </div>
  );
}

export default App;
