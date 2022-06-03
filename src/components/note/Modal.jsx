import React from 'react'

function Modal({ showModal, children }) {

    if (showModal) {
        return (
            <div className="modal">
                <section className='modal_main'>
                    {children}
                </section>
            </div>
        )
    }
    else {
        return <></>
    }
}

export default Modal