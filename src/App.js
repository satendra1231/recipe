
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Home from './pages/Home';
import Navbar from './component/Navbar';
import SingleRecipe from './pages/SingleRecipe';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/single' element={<SingleRecipe/>}/>
         
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
