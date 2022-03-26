import logo from './logo.svg';
import './App.css';
import About from './components/pages/About';
import Main from './components/pages/Main';
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="Main" element={<Main />} />
    </Routes>
  );
}

export default App;
