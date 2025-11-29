import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import Header from "./components/header.jsx";
import EventsPage from "./pages/EventsPage.jsx";
import EventDetailPage from "./pages/EventDetailPage.jsx";
import BackLink from "./components/getBackButton.jsx";
import SavedLessonsPage from "./pages/SavedLessonsPage.jsx";
import ToSavePage from "./components/GetToSave.jsx";

function App() {
  const location = useLocation();
  const showBackLink = location.pathname !== "/";
  return (
    <>
      <Header></Header>
      <div className="w-1/4">{showBackLink && <BackLink />}</div>
      <ToSavePage></ToSavePage>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Events" element={<EventsPage />}></Route>
        <Route path="/saved-lessons" element={<SavedLessonsPage />} />
        <Route path="/event/:id" element={<EventDetailPage />} />
      </Routes>
    </>
  );
}

export default App;
