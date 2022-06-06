import { ContactData } from '../common-types';
import '../styles/contact-cards.css'
import { getClassName } from '../helpers'
import { default as logo } from '../image/noun-eye-12025.svg';
const ContactCards = (props: { contactData: ContactData[] }) => {
  return (
    <>
      {props.contactData?.map((contact: ContactData, index: number) => (
        <div className='card'>
          <img alt="user" className="profile-picture" src={contact.avatar} />
          <p className="name">
            {contact.first_name} {contact.last_name}
          </p>
          <p className="email">
            {contact.email}
          </p>
          {getClassName(contact.id) ?
            <button className={`button-${getClassName(contact.id)}`}>
              {getClassName(contact.id)}
            </button> : <button className='button-inactive'>no status</button>}
          <img
            src={logo}
          ></img>
        </div>
      ))}
    </>
  )
}

export default ContactCards;