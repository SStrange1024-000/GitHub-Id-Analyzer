import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import HomeSectoin2 from './components/HomeSectoin2';
import NavBar from './components/NavBar';
import About from './components/About';
import MainApp from './components/MainApp';
import Contact from './components/Contact';
import Result from './components/Result'
import Repos from './components/Repos'


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/*' element={<h1>This is not found....!</h1>}></Route>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/mainApp' element={<MainApp/>}></Route>        
        <Route path="/result" element={<Result />} />
      </Routes>
      {/* <Result/> */}
      {/* <Repos/> */}
      <HomeSectoin2/>
    </div>
  );
}

export default App;
