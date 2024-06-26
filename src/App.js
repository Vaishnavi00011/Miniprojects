import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Calculator from "./pages/Calc";
import Practice from "./pages/Practice";
import TicTacToe from "./pages/TicTacToe";
import SnakeLadder from "./pages/SnakeLadder";
import Practice1 from "./pages/Practice1";
import Laser from "./camponent/Laser";
import Todo from "./pages/Todo";
import Toprectice from "./pages/Toprectice";
import Clock from "./pages/Clock";
import Clockprectice from "./pages/Clockprectice";
import TodoBackend from "./pages/TodoBackend";
import MovieTicket from "./pages/MovieTicket";
import Bar from "./pages/Bar";
import ImageUpload from "./pages/ImageUpload";
import List from "./pages/List";
import KBC from "./pages/KBC";
import Bollywood from "./pages/Bollywood";
import Googlemap from "./pages/Googlemap";
import Gasnumber from "./pages/Gasnumber";
import Password from "./pages/Password";
import Student from "./pages/Student";
import Function from "./pages/Function";







function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/calci" element={<Calculator />}></Route>
        <Route path="/practice" element={<Practice />}></Route>
        <Route path="/tic-tac-toe" element={<TicTacToe />}></Route>
        <Route path="/snakeladder" element={<SnakeLadder />}></Route>
        <Route path="/practice1" element={<Practice1/>}></Route>
        <Route path="/laser" element={<Laser/>}></Route>
        <Route path="/todo" element={<Todo/>}></Route>
        <Route path="/toprectice" element={<Toprectice/>}></Route>
        <Route path="/clock" element={<Clock/>}></Route>
        <Route path="/clockprectice" element={<Clockprectice/>}></Route>
        <Route path="/todo-backend" element={<TodoBackend/>}></Route>
        <Route path="/movie-ticket" element={<MovieTicket/>}></Route>
        <Route path="/bar" element={<Bar/>}></Route>
        <Route path="/ImageUpload" element={<ImageUpload/>}></Route>
        <Route path="/List" element={<List/>}></Route>
        <Route path="/kbc" element={<KBC/>}></Route>
        <Route path="/bollywood" element={<Bollywood/>}></Route>
        <Route path="/google-map" element={<Googlemap/>}></Route>
        <Route path="/gas-number" element={<Gasnumber/>}></Route>
        <Route path="/password" element={<Password/>}></Route>
        <Route path="/student" element={<Student/>}></Route>
        <Route path="/function" element={<Function/>}></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
