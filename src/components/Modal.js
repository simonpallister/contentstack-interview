const Modal = ({modal, setModal, content}) => {

  const handleCLick = () => {

  }

  return (
    <>
    {modal ? 

      <div className="modal">
        <div className="modalContent">
          {content.modal_content}
        </div>
        <button onClick={() => setModal(false)} className="button-dark">Close</button>
      </div>

      : null

    }
    </>
  )
  
}

export default Modal