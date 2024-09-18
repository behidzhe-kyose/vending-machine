import { createPortal } from 'react-dom';
import ModalContent from './ModalContent';

const Modal = ({ purchasedProduct, closeModalState, denomination }) => {
    if (!purchasedProduct) return null; 

    const onClose = () => {
        closeModalState();
    }

    return createPortal(
        <ModalContent purchasedProduct={purchasedProduct} denomination={denomination} onClose={onClose} />,
        document.body
    );
}

export default Modal;