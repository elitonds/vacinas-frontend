import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Client from "./pages/client/client";
import Company from "./pages/company/company";
import Home from "./pages/home";

function App() {
  return (
    <div className="App">
      <Home>
        <Router>
          <Routes>
            <Route path="/client" element={<Client />} />
            <Route path="/company" element={<Company />} />
          </Routes>
        </Router>
      </Home>
    </div>
  );
}

export default App;
