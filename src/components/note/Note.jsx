import React from 'react'

function Note({title,note,date,id}) {
    return (
        <div className="note">
            <div className="note_title">
                {title}
            </div>
            <div className="note_body">
                {note}
            </div>
            <hr />
            <div className="note_footer">
                <div className="note_time">{date.split(',')[0] + date.split(',')[1] }<br/>{date.split(',')[2]}</div>
                <div className="note_controls"><div>📝Edit </div><div>🚮Delete </div></div>
            </div>
        </div>
    )
}

export default Note