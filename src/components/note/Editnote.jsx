import React,{useState} from 'react'

function Editnote({appData,setAppdata,setShowmodal,note,title,id}) {
        const [noteData, setNotedata] = useState(
          {
            id: id,
            title: title,
            note: note,
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
            }
          })
        }
        const handleEditnote =(e)=>{
          e.preventDefault();
          appData.set({
              ...appData.data,
              count:appData.data.count,
              notes:[...appData.data.notes.filter((elem)=>{return elem.id!==id}),noteData]
            })
          setAppdata((prevAppdata)=>{
            return{
              ...prevAppdata,
              data:{
                ...prevAppdata.data,
                count:prevAppdata.data.count,
                notes:[...prevAppdata.data.notes.filter((elem)=>{return elem.id!==id}),noteData]
              }
            }
          })
          handleClose();
        };
        const handleClose=()=>{
          setShowmodal(false)
        };
  return (
    <form className='form_addNote' onSubmit={handleEditnote}>
      <input required className='input_addNote'defaultValue={title} name='title' placeholder='Enter Note Title' type="text" onChange={updateNote} />
      <textarea required className='input_addNote' defaultValue={note} name='note' placeholder='Enter Note Here...' type="text" onChange={updateNote} />
      <div className="color-select">Select Color :
        <select defaultValue={'#0ac6f652'} name='color' disabled onChange={updateNote}>
          <option  className='color1' value="rgba(1, 134, 167, 0.322)|rgba(10, 198, 246, 0.322)">#0ac6f652</option>
        </select>
        <div className="btns"><button type='submit'>Save</button><button type='button' onClick={handleClose} >Close</button></div>
      </div>
    </form>
  )
}

export default Editnote