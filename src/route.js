import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Product from "./components/product";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function Home() {
  return (
    <div className="App">
      <ul>
        <Link to="/transation">
          <Button>transaction</Button>
        </Link>
        <br />
        <Link to="/families">
          <Button>families</Button>
        </Link>
        <br />
        <Link to="/location">
          <Button>location</Button>
        </Link>
        <br />
        <Link to="/product">
          <Button>product</Button>
        </Link>
        <br />
      </ul>
    </div>
  );
}
export default Home;
