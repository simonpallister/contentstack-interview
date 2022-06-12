import { useState, useEffect } from "react"
import Modal from './Modal'

const Banner = ({content}) => { 

  const [modal, setModal] = useState(false)

  return (
    <>
      <div className="banner">
        {content.modal_bar_content} <a href="#" onClick={() => setModal(true)}>{content.modal_bar_cta}</a>
      </div>
      <Modal modal={modal} setModal={setModal} content={content}></Modal>
    </>
  )

}

export default Banner
