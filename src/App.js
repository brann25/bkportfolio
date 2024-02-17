import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import P1 from './component/P1';
import P2 from './component/P2';
import P3 from './component/P3';
import P4 from './component/P4';
import P5 from './component/P5';
import P6 from './component/P6';
import PHp from './component/PHp';
import PAb from './component/PAb';

function App() {
  return (
    <>
    <div className="App">
      <Routes>
        <Route exact path = "/" element = {<PHp />}></Route>
        <Route exact path = "/about_me" element = {<PAb />}></Route>
        <Route exact path = "/project1" element = {<P1 />}></Route>
        <Route exact path = "/project2" element = {<P2 />}></Route>
        <Route exact path = "/project3" element = {<P3 />}></Route>
        <Route exact path = "/project4" element = {<P4 />}></Route>
        <Route exact path = "/project5" element = {<P5 />}></Route>
        <Route exact path = "/project6" element = {<P6 />}></Route>
      </Routes>
    </div>
    </>
  );
}

export default App;
