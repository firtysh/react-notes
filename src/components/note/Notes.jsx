import React, { useState } from 'react'
import Addnote from './Addnote'
import Note from './Note'
import './styles/Notes.css'
import Search from './search.svg'
import Modal from './Modal'
function Notes({appData,setAppdata}) {
  const [showModal, setShowmodal] = useState(false)
  const promptModal = ()=>{setShowmodal(true)} 
  console.log(appData,'inside notes');
  return (<>
  <Modal showModal={showModal}><Addnote appData={appData} setAppdata={setAppdata} setShowmodal={setShowmodal}/></Modal>
    <div className="main_notes">
      <div className="notesBackdrop1"></div>
      <div className="notesBackdrop2"></div>
      <div className="container">
        <div className="header">
          Welcome {appData?.data?.firstName}
          <div className="searchContainer">
            <input className='searchInput' placeholder='🔍 Search' type="search" /><img className='searchLogo' src={Search} alt="" />
          </div>
        </div>
        <div className="addNote" onClick={promptModal}>Add New Note</div>
        <div className="notes">
            {appData.data.notes.map((elem)=>{
              console.log(elem);
              return <Note title={elem.title} key={elem.id} note={elem.note} date={elem.date} />
            })}
        </div>
      </div>
    </div>
  </>
  )
}

export default Notes