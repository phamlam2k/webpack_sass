import { Fragment, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

import styles from './Modal.module.scss'
import { CloseIcon } from '@assets/icons/icons'
import useClickOutside from '@hooks/useClickOutside'

type IModalProps = {
  isOpen: boolean
  children: React.ReactNode

  onClose: () => void
}

const Modal = ({ isOpen, children, onClose }: IModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null)

  useClickOutside(modalRef, () => {
    if (isOpen) {
      onClose()
    }
  })

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [onClose])

  if (!isOpen) return <Fragment></Fragment>

  return createPortal(
    <div className={styles.modal}>
      <div className={styles.modal__content} ref={modalRef}>
        <span className={styles.modal__close} onClick={onClose}>
          <CloseIcon />
        </span>
        {children}
      </div>
    </div>,
    document.body
  )
}

export default Modal
