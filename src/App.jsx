import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./layouts/Navbar";
import Home from "./components/Home";
import Newtasks from "./components/Newtasks";
import Tasks from "./components/Tasks";
import Edit from "./components/Edit"

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="newtask" element={<Newtasks />} />
          <Route path="alltasks" element={<Tasks />} />
          <Route path="edit" element={ <Edit/> } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
