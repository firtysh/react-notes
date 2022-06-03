import { Route, Routes } from "react-router-dom";
import Protected from "./components/Protected";
import Notes from "./components/note/Notes";
import Home from "./components/home/Home";
import { useState } from "react";
function App() {
  let storageData;
  try {
     storageData = JSON.parse(localStorage.getItem('NotesAppData'));
  }catch(e){};
  const [appData,setAppdata] = useState({data: storageData,set:(data)=>{localStorage.setItem('NotesAppData',JSON.stringify(data))}})
  const loggedIn = storageData?.flag===true;
  return (
    <Routes>
    <Route exact path="/" element={<Protected redirect={loggedIn} path="/notes"><Home setAppdata={setAppdata} appData={appData}/></Protected>} />
    <Route  path="/notes" element={<Protected redirect={!loggedIn} path="/"><Notes setAppdata={setAppdata} appData={appData}/></Protected>} />
  </Routes>
  );
}

export default App;
