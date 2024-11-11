import clsx from 'clsx'
import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { RiCloseLine } from 'react-icons/ri';

const Modal = ({ isOpen, onClose, children }) => {
    useEffect(() => {
        if(isOpen){
            document.body.style.overflow = 'hidden'
        } else{
            document.body.style.overflow = 'auto'
        }

        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [isOpen])

    if(!isOpen) return null

    return createPortal(
        <div className='content'>
            <div className='modal'>
                <div className='title'>
                    <button
                        onClick={onClose}>
                        <RiCloseLine />
                    </button>
                </div>
                <div className='wrapper'>
                    {children}
                </div>
            </div>
        </div>,
        document.body,
    )
}

export default Modal;