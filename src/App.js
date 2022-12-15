import {BrowserRouter,Route,Routes} from 'react-router-dom';
import './App.css';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Home from './pages/home/Home';
import Tools from './pages/tools/Tools';
import Tool from './pages/tool/Tool';
// import Imagegenerator from './pages/imagegenerator/Imagegenerator';
import Imagegenerator from './components/Imagegenerator';
import data from '../src/data/db.json'
import Comingsoon from './components/Comingsoon';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} ></Route>
      <Route path='/signup' element={<Signup/>} ></Route>
      <Route path='/login' element={<Login/>} ></Route>
      <Route path='/tools' element={<Tools/>} ></Route>
      <Route path='/tool' element={<Tool/>} ></Route>
      {/* <Route path='/imagegenerator' element={<Imagegenerator/>} ></Route>
     */}
     {data.map(tool=>(
       <Route path={`/tools/${tool.route}`} element={(tool.status==="Coming Soon") ? <Comingsoon /> : <Imagegenerator value={tool} />}></Route>
     ))}
    
    
    
    </Routes>
    </BrowserRouter>
    </div>
  );
}
export default App;
