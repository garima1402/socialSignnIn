import "./App.css";
import Success from "./socialsignin/successPage";
import Home from "./socialsignin";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { LinkedInCallback } from "react-linkedin-login-oauth2";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/success" element={<Success />} />
          <Route path="/" element={<Home />} />
          <Route
            path="/linkedin"
            element={<LinkedInCallback />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
