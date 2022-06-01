import React from 'react'

function Notes() {
  const userData = JSON.parse(localStorage.getItem('NotesAppData'))

  return (
    <div className="container">
      <div className="header">
        Welcome {userData?.firstName}
      </div>
      <div className="form">
        <form>

        </form>
      </div>
      <div className="notes">
        <div className="note"></div>
      </div>
    </div>
  )
}

export default Notes