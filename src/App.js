
import About from './components/About';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <div className='main_container'>
          <Sidebar />
          <div className="home_container">
            <Routes>
              <Route exact path='/' element={<Home />}></Route>
              <Route exact path='/about' element={<About />}></Route>
              <Route exact path='/portfolio' element={<Portfolio />}></Route>
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
