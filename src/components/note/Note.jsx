import React from 'react'

function Note() {
    return (
        <div className="note">
            <div className="note_title">
                Note title
            </div>
            <div className="note_body">
                note body
            </div>
            <div className="note_footer">
                <div className="note_time">Note date</div>
                <div className="note_controls"><img src="" alt="edit" /><img src="" alt="delete" /></div>
            </div>
        </div>
    )
}

export default Note