import { ModalContainer, Modal, CloseModal } from './Modal.styled'
import { IDeleteContact } from '../../utils/interfaces';
import { useContext } from 'react';
import { ContactContext } from '../../context/ContactContext';

export const ConfirmationModal = ({ show, idContato, telefone, setModal }: IDeleteContact) => {
    const { deleteContact } = useContext(ContactContext);

    if (!show) {
        return null;
    }

    function handleDeleteUser() {
        if (idContato) {
            deleteContact(idContato);
            setModal(false);
        }
    }

    function closeModal() {
        setModal(false);
    }

    return (
        <ModalContainer>
            <CloseModal onClick={closeModal} />
            <Modal>
                <h3>Tem certeza que deseja deletar o número
                    <br /> <span>{telefone}</span>?</h3>
                <button onClick={handleDeleteUser} > Sim, deletar </button>
                <button onClick={closeModal} > Cancelar </button>
            </Modal>
        </ModalContainer>
    )
}
