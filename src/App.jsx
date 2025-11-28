// src/App.jsx
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import Header from "./components/header.jsx";
import EventsPage from "./pages/EventsPage.jsx";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Events" element={<EventsPage />}></Route>
        {/* Add more routes here for other pages like /about, /contact */}
      </Routes>
    </>
  );
}

export default App;
