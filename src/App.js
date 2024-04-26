import logo from './Assets/Images/moff.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutComponent from './Components/AboutComponent';
import NasvbarComponent from './Components/NasvbarComponent';
import HomeComponent from './Components/HomeComponent';
import CharacterComponent from './Components/CharacterComponent';
import UpdatesComponent from './Components/UpdatesComponent';

function App() {
  return (
    <div className="bg">
      <BrowserRouter>
      <div className='header-bg'>
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className='title'>Vindicate</h1>
        <div>
          <NasvbarComponent></NasvbarComponent>
        </div>
      </div>
      
      <Routes>
          <Route path='/' element={<HomeComponent></HomeComponent>}></Route>
          <Route path='/about' element={<AboutComponent></AboutComponent>}></Route>
          <Route path='/concepts' element={<CharacterComponent></CharacterComponent>}></Route>
          <Route path='/updates' element={<UpdatesComponent></UpdatesComponent>}></Route>
          <Route path='/downloads'></Route> {/*<-For Later*/}
      </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
