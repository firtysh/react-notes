import React, { useState } from 'react'
import Editnote from './Editnote';

function Note({ title, note, date, appData, setAppdata, Modal,id }) {
    const [showModal,setShowmodal]=useState(false)
    const handleEdit = () => { 
        setShowmodal(true);
    };
    const handleDelete = () => {
        appData.set({
            ...appData.data,
            count:appData.data.count,
            notes:[...appData.data.notes.filter((elem)=>{return elem.id!==id})]
          })
        setAppdata((prevAppdata)=>{
          return{
            ...prevAppdata,
            data:{
              ...prevAppdata.data,
              count:prevAppdata.data.count,
              notes:[...prevAppdata.data.notes.filter((elem)=>{return elem.id!==id})]
            }
          }
        })
     }
    return (<>
        <Modal showModal={showModal}><Editnote title={title} note={note} id={id} appData={appData} setAppdata={setAppdata} setShowmodal={setShowmodal}/></Modal>
        <div className="note">
            <div className="note_title">
                {title}
            </div>
            <div className="note_body">
                {note}
            </div>
            <hr />
            <div className="note_footer">
                <div className="note_time">{date.split(',')[0] + date.split(',')[1]}<br />{date.split(',')[2]}</div>
                <div className="note_controls"><div onClick={handleEdit}>📝Edit </div><div onClick={handleDelete}>🚮Delete </div></div>
            </div>
        </div>
    </>
    )
}

export default Note