//Imports
import './App.css';
import { Routes, Route } from 'react-router-dom';
//Pages
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
    {/* Routes to pages */}
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
