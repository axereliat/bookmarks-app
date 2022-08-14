import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";

export default function ConfirmModal({modalTitle, toggle, toggleCallback, modalOpen}) {

    return (
        <Modal isOpen={modalOpen} toggle={toggle} size="s">
            <ModalHeader>{modalTitle}</ModalHeader>
            <ModalBody>
                <p>Are you sure?</p>
            </ModalBody>
            <ModalFooter>
                <Button color="secondary" onClick={() => toggle()}>No</Button>{' '}
                <Button color="danger" onClick={() => toggle(toggleCallback)}>Yes</Button>
            </ModalFooter>
        </Modal>
    );
}
