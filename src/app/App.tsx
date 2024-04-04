import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

import "./App.css";
import MainPage from "../pages/MainPage";
import PostPage from "../pages/PostPage";

function App() {
  return (
    <>
      <header>
        <h1>Posts test</h1>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="post/:id" element={<PostPage />}></Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
