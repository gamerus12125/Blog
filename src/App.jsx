import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Posts from "./components/Posts";
import Profile from "./components/Profile";
import "./styles/main.css";
const App = () => {
  return (
    <>
      <Header />
      <Main title="web blog">
        <Profile />
        <Posts />
      </Main>
      <Footer />
    </>
  );
};

export default App;
