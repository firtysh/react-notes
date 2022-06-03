import React, { useState } from 'react'

function Addnote({setShowmodal,appData,setAppdata}) {
  const [noteData, setNotedata] = useState(
    {
      id: 0,
      title: "",
      note: "",
      color: "#acacca",
      date: new Date().toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric',hour: 'numeric', minute: 'numeric', hour12: true })
    }
  );
  const updateNote = (e) => {
    setNotedata((prevNotedta) => {
      return {
        ...prevNotedta,
        [e.target.name]: e.target.value,
        date: new Date().toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric',hour: 'numeric', minute: 'numeric', hour12: true }),
        id:appData.data.count +1,
      }
    })
    console.log(noteData)
  }
  console.log(appData,"logging app data inside add noe");
  const handleAddnote =(e)=>{
    e.preventDefault();
    appData.set({
        ...appData.data,
        count:appData.data.count+1,
        notes:[...appData.data.notes,noteData]
      })
    setAppdata((prevAppdata)=>{
      return{
        ...appData,
        data:{
          ...appData.data,
          count:appData.data.count+1,
          notes:[...appData.data.notes,noteData]
        }
      }
    })
    handleClose();
  };
  const handleClose=()=>{
    setShowmodal(false)
  };
  return (
    <form className='form_addNote' onSubmit={handleAddnote}>
      <input required className='input_addNote' name='title' placeholder='Enter Note Title' type="text" onChange={updateNote} />
      <textarea required className='input_addNote' name='note' placeholder='Enter Note Here...' type="text" onChange={updateNote} />
      <div className="color-select">Select Color :
        <select defaultValue={'#0ac6f652'} name='color' disabled onChange={updateNote}>
          <option  className='color1' value="rgba(1, 134, 167, 0.322)|rgba(10, 198, 246, 0.322)">#0ac6f652</option>
        </select>
        <div className="btns"><button type='submit'>Add Note</button><button type='button' onClick={handleClose} >Close</button></div>
      </div>
    </form>
  )
}

export default Addnote