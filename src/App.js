import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import TodoList from "./Components/TodoList";
import "./App.css";
import { ProtectedRoute } from "./ProtectedRoute";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" exact element={Login()} />
          <Route exact path="/login" exact element={Login()} />
          <Route exact path="/todo" exact element={TodoList()} />
          <Route exact path="/register" exact element={Register()} />
          <Route path="*" element={() => "404 NOT FOUND"} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
