import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "@restart/ui/esm/Button";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Registration from "./components/registration";
import Userlogin from "./components/login";
import Home from "./route";
import Transaction from "./components/transaction";
import Families from "./components/families";
import Location from "./components/location";
import Product from "./components/product";

function App() {
  return (
    <div className="App">
      <Router>
        <ul>
          <Link to="/registration">
            <Button>Register</Button>
          </Link>
          <br />
          <Link to="/userlogin">
            <Button>Login</Button>
          </Link>
          <br />
        </ul>
        <Routes>
          <Route path="/registration" element={<Registration />} />
          <Route path="/userlogin" element={<Userlogin />} />
          <Route path="/home" element={<Home />} />
          <Route path="/transation" element={<Transaction />} />
          <Route path="/families" element={<Families />} />
          <Route path="/location" element={<Location />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
