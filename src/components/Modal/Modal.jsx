import React from 'react'
import './Modal.scss'


function Modal({children, modal, setModal}) {


const exitBtnClick = (evt) =>{
    if(evt.target.id == "modal-wrapper"){
       setModal(false)
    }
}

  return (
    <div onClick={exitBtnClick} id="modal-wrapper" className={` transition-[0.4s] modal ${modal ? "" : "scale-0"}`}>
     <div className="modal-content">
        {children}
     </div>
    </div>
  )
}

export default Modal