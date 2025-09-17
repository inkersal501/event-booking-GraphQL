import './App.css' 
import Events from './pages/Events';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() { 

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Events />} /> 
      </Routes>
    </BrowserRouter>
  )
}

export default App;
