import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage/HomePage";
import PostsPage from "./pages/PostsPage";
import SectionPage from "./pages/SectionPage";
import UsefulPage from "./pages/UsefulPage";
import AboutMePage from "./pages/AboutMePage";
import "./styles/main.css";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="posts" element={<PostsPage />} />
          <Route path="sections" element={<SectionPage />} />
          <Route path="useful" element={<Use />} />
          <Route path="aboutMe" element={<AboutMePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
