import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import MainPage from "./components/MainPage";
import Paginate from "./components/Paginate";
import Detail from "./components/Detail";

function App() {
  return (
    <div className="App h-screen">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/detail/:id" element={<Detail />}></Route>
          <Route exact path="/" element={<MainPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
