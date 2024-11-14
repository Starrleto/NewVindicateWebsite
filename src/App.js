
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutComponent from './Components/AboutComponent';
import HomeComponent from './Components/HomeComponent';
import CharacterComponent from './Components/CharacterComponent';
import UpdatesComponent from './Components/UpdatesComponent';
import FooterComponent from './Components/FooterComponent';

function App() {
  return (
    <div className="bg">
      <BrowserRouter>
      
      <Routes>
          <Route path='/' element={<HomeComponent></HomeComponent>}></Route>
          <Route path='/about' element={<AboutComponent></AboutComponent>}></Route>
          <Route path='/concepts' element={<CharacterComponent></CharacterComponent>}></Route>
          <Route path='/updates' element={<UpdatesComponent></UpdatesComponent>}></Route>
          <Route path='/downloads'></Route> {/*<-For Later*/}
      </Routes>
        
      </BrowserRouter>

      <FooterComponent></FooterComponent>
    </div>
  );
}

export default App;
