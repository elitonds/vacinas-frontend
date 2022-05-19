import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Pacient from "./pages/pacient/pacient";
import Company from "./pages/company/company";
import Home from "./pages/home/home";

function App() {
  return (
    <div className="App">
      <Router>
        <Home />
        <Routes>
          <Route key="pacient-route" path="/pacient" element={<Pacient />} />
          <Route key="company-route" path="/company" element={<Company />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
