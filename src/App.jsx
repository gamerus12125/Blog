import React from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer";
import Posts from "./components/Posts/Posts";
import Profile from "./components/Profile/Profile";
import "./styles/main.css";
const App = () => {
  return (
    <>
      <Header />
      <Main title="web blog">
        <Profile />
          <Posts />
      </Main>
      <Footer text="&copy; _web.blog 2021" />
    </>
  );
};

export default App;
