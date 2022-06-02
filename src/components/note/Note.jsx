import React from 'react'

function Note() {
    return (
        <div className="note">
            <div className="note_title">
                Note title
            </div>
            <div className="note_body">
                note body
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum fuga dignissimos omnis neque dolores eius eveniet, unde, ducimus suscipit hic illo! Neque veritatis fuga, qui possimus cum ratione, voluptas perspiciatis sapiente sed sequi ex placeat. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit ab laudantium expedita pariatur ipsam autem nihil, consectetur quibusdam, tenetur, officia excepturi possimus quod eveniet natus aperiam quisquam cupiditate sapiente quasi corrupti consequatur recusandae. Facere reiciendis pariatur officiis ut iure non fugiat quas dolorum provident? Pariatur nulla atque quisquam voluptates, rem eveniet omnis molestias provident, recusandae magni deserunt ullam voluptate eaque? Explicabo, labore natus! Voluptatem accusantium ab vel ducimus modi animi velit sint? Rerum earum voluptatem natus sed tempora. Atque nihil incidunt fugit veniam blanditiis repellendus odio minus illo a aut, nesciunt sequi adipisci dignissimos dolorum eos modi, quia dicta autem.
            </div>
            <hr/>
            <div className="note_footer">
                <div className="note_time">Note date</div>
                <div className="note_controls"><span>📝Edit </span><span>🚮Delete </span></div>
            </div>
        </div>
    )
}

export default Note