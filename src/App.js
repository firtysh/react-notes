import { Route, Routes } from "react-router-dom";
import Protected from "./components/Protected";
import Notes from "./components/note/Notes";
import Home from "./components/home/Home";
import { useState } from "react";




function App() {
  const [reRender,setRerender]=useState(false);
  const loggedIn = JSON.parse(localStorage.getItem('NotesAppData'))?.flag || false;
  console.log(reRender);
  return (
    <Routes>
    <Route exact path="/" element={<Protected redirect={loggedIn} path="/notes"><Home setRerender={setRerender}/></Protected>} />
    <Route  path="/notes" element={<Protected redirect={!loggedIn} path="/"><Notes setRerender={setRerender}/></Protected>} />
  </Routes>
  );
}

export default App;
