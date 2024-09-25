import styles from './ContactBody.module.css'

import ContactForm from '../Form/ContactForm'

const ContactBody = () => {
  return (
    <div className= { `${styles.contactBody} container`}>
        
        <ContactForm />
        <img src='/images/Service 24_7-pana1.svg' alt='images'></img>
    </div>
  )
}

export default ContactBody