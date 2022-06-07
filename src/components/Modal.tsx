import { useEffect } from 'react';
import { ModalProps } from '../common-types';
import '../styles/modal.css';
const Modal = (props: ModalProps) => {
    const closeModal = () => {
        props.handleClose(false);
    }
    const showHideClassName = props.showModal ? "modal d-block" : "modal d-none";
    useEffect(() => {
        document.body.addEventListener('click', closeModal, true);
        return () => {
            document.body.removeEventListener('click', closeModal, true);
        }
    });
    return (
        <div className={showHideClassName}>
            <div className="modal-container">
                <div className='card'>
                    <img alt="user" className="profile-picture" src={props.contactData.avatar} />
                    <p className="name">
                        {props.contactData.first_name} {props.contactData.last_name}
                    </p>
                    <p className="email">
                        {props.contactData.email}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Modal;