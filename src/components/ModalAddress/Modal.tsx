import { useContext } from 'react';
import { ModalContainer, Modal, CloseModal } from './Modal.styled'
import { AddressContext } from '../../context/AddressContext';
import { IDeleteAddress } from '../../utils/interfaces';

export const ConfirmationModal = ({ show, idEndereco, cep, setModal }: IDeleteAddress) => {
    const { deleteAddress } = useContext(AddressContext);

    if (!show) {
        return null;
    }

    function handleDeleteUser() {
        if (idEndereco) {
            deleteAddress(idEndereco);
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
                <h3>Tem certeza que deseja deletar o endereço de CEP <br /> <span>{cep}</span>?</h3>
                <button onClick={handleDeleteUser} > Sim, deletar </button>
                <button onClick={closeModal} > Cancelar </button>
            </Modal>
        </ModalContainer>
    )
}
