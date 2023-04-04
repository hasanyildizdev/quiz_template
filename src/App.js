import './App.css';
import Main from './components/main.components';
import Game from './components/quiz.components';
import Result from './components/result.components';
import Login from './components/login.component';
import Signup from './components/signup.component';
import Admin from './components/admin.component';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    
    <Router>
        <div className="App">
          <Routes>
            <Route path='/' element={<Main/>}/>
            <Route path='/quiz' element={<Game/> }/>
            <Route path='/result' element={<Result/>}/>
            <Route path='/admin' element={<Admin/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
          </Routes>
        </div>
    </Router>
  );
}

export default App;
