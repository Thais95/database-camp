import { ModalContainer, Modal, CloseModal } from './Modal.styled'
import { IDeletePersona } from '../../utils/interfaces';
import { PersonasContext } from '../../context/PersonasContext';
import { useContext } from 'react';

export const ConfirmationModal = ({ show, idPessoa, nome, setModal }: IDeletePersona) => {
    const { deletePersona } = useContext(PersonasContext);

    if (!show) {
        return null;
    }

    function handleDeleteUser() {
        if (idPessoa) {
            let idPersona = idPessoa.toString();
            deletePersona(idPersona);
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
                <h3>Tem certeza que deseja deletar <span>{nome}</span>?</h3>
                <button onClick={handleDeleteUser} > Sim, deletar </button>
                <button onClick={handleDeleteUser} > Cancelar </button>
            </Modal>
        </ModalContainer>
    )
}
