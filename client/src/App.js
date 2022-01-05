import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { useState } from 'react'
import AddProduct from './components/AddProduct';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Update from './components/Update';



function App() {

const [user,setLoginUser] = useState({})

  return (
    <div className="App">
      <Router>
          <Routes>

              <Route 
                path="/" element={user && user._id ? <Home setLoginUser={setLoginUser}/> : <Login setLoginUser={setLoginUser}/>}
              />
              <Route 
                path="/login" element={<Login/>}
              />
              <Route 
                path="/register" element={<Register/>}
              />
              <Route
                path='/addProduct' element={<AddProduct/>}
              />
            <Route
                path='/update' element={<Update/>}
              />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
