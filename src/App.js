import './App.css';
import {Routes, Route} from 'react-router-dom'
import Chat from './Components/Chat';
import Login from './Components/Login';
import Signup from './Components/Signup';
import 'antd/dist/antd.css';


function App() {
  

  return (
    <div className='App'>
    <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route exact path="/" element={<Chat />} />
    </Routes>
    </div>
  );
}

export default App;
