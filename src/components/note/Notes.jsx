import React from 'react'
import Note from './Note'
import './Notes.css'
import Search from './search.svg'
function Notes() {
  const userData = JSON.parse(localStorage.getItem('NotesAppData'))

  return (
    <div className="main_notes">
      <div className="container">
        <div className="header">
          Welcome {userData?.firstName}
          <div className="searchContainer">
            <input className='searchInput' placeholder='🔍 Search' type="search" /><img className='searchLogo' src={Search} alt="" />
          </div>
        </div>
        <div className="notes">
          {/* <form className="form_addNote">
            <input type="text" className='input_noteTitle' />
            <input type="text" className='input_noteBody' />
            <button>Add Note</button>
          </form> */}
          <Note/>
          <Note/>
          <Note/>
          <Note/>

  
        </div>
      </div>
    </div>
  )
}

export default Notes