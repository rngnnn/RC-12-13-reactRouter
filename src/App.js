import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MyNavbar from "./components/MyNavbar";



function App() {
  return (
    <div>
      <Router>
      <MyNavbar/>


        <Routes>
          <Route path="/" element={<Home />} />
          
        </Routes>


      </Router>
    </div>
  );
}

export default App;
