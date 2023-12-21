import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import ListPage from "./Components/ListPage";
import { UserContextProvider } from "./Components/Usercontext";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <UserContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ListPages" element={<ListPage />} />
          </Routes>
        </UserContextProvider>
      </Router>
    </div>
  );
}

export default App;
