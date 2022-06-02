import React, { useState } from 'react'
import Addnote from './Addnote'
import Note from './Note'
import './Notes.css'
import Search from './search.svg'
function Notes() {
  const userData = JSON.parse(localStorage.getItem('NotesAppData'))
  const [showModal, setShowmodal] = useState(false)

  return (<>
    {/* <Addnote showModal/> */}
    <div className="main_notes">
      <div className="notesBackdrop1"></div>
      <div className="notesBackdrop2"></div>
      <div className="container">
        <div className="header">
          Welcome {userData?.firstName}
          <div className="searchContainer">
            <input className='searchInput' placeholder='🔍 Search' type="search" /><img className='searchLogo' src={Search} alt="" />
          </div>
        </div>
        <div className="addNote">Add New Note</div>
        <div className="notes">
          <Note />
          <Note />
          <Note />
          <Note />
          <Note />
        </div>
      </div>
    </div>
  </>
  )
}

export default Notes