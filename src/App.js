import './App.css';
import {Routes, Route, Navigate, useLocation} from 'react-router-dom'
import Chat from './Components/Chat';
import Login from './Components/Login';
import Signup from './Components/Signup';
import 'antd/dist/antd.css';
import ProtectedRoute from './Components/ProtectedRoute';


function App() {
  
  const isLoggedIn =  localStorage.getItem("chat-user")
  const user = localStorage.getItem("chat-userId")
    

  let isLoggedInJsonObject = {};
  try {
    isLoggedInJsonObject = JSON.parse(isLoggedIn);
  } catch (e) {
    isLoggedInJsonObject = isLoggedIn;
  }
  console.log(user);

  return (
    <div className='App'>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route exact path="/" element={user ? <Chat /> : <Navigate to='/login' />} />
      </Routes>
      {/* {user ? <Chat /> : <Login />} */}
   
    </div>
  );
}

export default App;