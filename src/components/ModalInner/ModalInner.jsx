import React from 'react'
import './Modal.scss'


function Modal({children, innerModal, setInnerModal}) {


const exitBtnClick = (evt) =>{
    if(evt.target.id == "modal-wrapper"){
      setInnerModal(false)
    }
}

  return (
    <div onClick={exitBtnClick} id="modal-wrapper" className={` transition-[0.4s] modal ${innerModal ? "" : "scale-0"}`}>
     <div className="modal-content">
        {children}
     </div>
    </div>
  )
}

export default Modal