import './App.css';
import Main from './components/main.components';
import Game from './components/quiz.components';
import Result from './components/result.components';
import Timer from './components/timer.components';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
        <div className="App">
          <Routes>
            <Route path='/' element={<Main/>}/>
            <Route path='/quiz' element={<Game/> }/>
            <Route path='/result' element={<Result/>}/>
            <Route path='/timer' element={<Timer/>}/>
          </Routes>
        </div>
    </Router>
  );
}

export default App;
