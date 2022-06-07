import { useState } from 'react';
import { ContactData } from '../common-types';
import '../styles/contact-cards.css'
import { getClassName } from '../helpers'
import { default as logo } from '../image/noun-eye-12025.svg';
import Modal from './Modal';
const ContactCards = (props: { contactData: ContactData[] }) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [activeObject, setActiveObject] = useState<ContactData>({
    id: 1,
    email: 'string',
    first_name: 'string',
    last_name: 'string',
    avatar: 'string'
  });
  return (
    <>
      {props.contactData?.map((contact: ContactData, index: number) => (
        <div key={index} className='card'>
          <img alt="user" className="profile-picture" src={contact.avatar} />
          <p className="name">
            {contact.first_name} {contact.last_name}
          </p>
          <p className="email">
            {contact.email}
          </p>
          {getClassName(contact.id) ?
            <button onClick={() => {
              setActiveObject(contact);
              setShowModal(true);
            }} className={`button-${getClassName(contact.id)}`}>
              {getClassName(contact.id)}
            </button> : <button onClick={() => {
              setActiveObject(contact);
              setShowModal(true);
            }} className='button-inactive'>no status</button>}
          <img
            src={logo}
          ></img>
        </div>
      ))}
      {showModal ? <Modal contactData={activeObject} showModal={showModal} handleClose={setShowModal}></Modal> : null}
    </>
  )
}

export default ContactCards;