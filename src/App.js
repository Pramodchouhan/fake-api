import logo from './logo.svg';
import './App.css';
import Registration from './components/registration';
import 'bootstrap/dist/css/bootstrap.min.css';
import Userlogin from './components/login';
import Button from '@restart/ui/esm/Button';
import {BrowserRouter as Router ,Route,Routes,Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
          <ul>
           <Link to="/registration"><Button>Register</Button></Link><br />
           <Link to="/userlogin"><Button>Login</Button></Link><br />
          </ul>
          <Routes>
            <Route path="/registration" element={<Registration/>} />
            <Route path="/userlogin" element={<Userlogin/>} />
          </Routes>
     </Router>
       
     
    </div>
  );
}

export default App;
