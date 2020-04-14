import React,{useState} from 'react'
import Modal from 'react-modal'

Modal.setAppElement('#root')

const ReactModal = () => {
    const [ open,setOpen ] = useState(false)
    return (
        <div>
            <button 
            onClick={()=>setOpen(!open)}
            >
                open modal
            </button>
            <Modal 
            isOpen={open} 
            onRequestClose={()=>setOpen(!open)}
            shouldCloseOnOverlayClick={false}
            style={{
                overlay:{
                    backgroundColor:'grey'
                },
                content:{
                    color:'green'
                }
            }}
            >
                <h2>model title</h2>
                <p>modal body</p>
                <div onClick={()=>setOpen(!open)}>
                    <button>close modal</button>
                </div>
            </Modal>
        </div>
    )
}

export default ReactModal
