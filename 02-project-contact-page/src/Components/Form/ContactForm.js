import Button from "../Button/Button"
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMessage } from "react-icons/md";
import { IoIosMail } from "react-icons/io";

import styles from './ContactForm.module.css'

const ContactForm = () => {
  return (
    <div className={styles.contact_form}>
      <div className={styles.contactBtn}>
          <Button text="VIA SUPPORT CHAT" icon={<MdOutlineMessage />}/>
          <Button text="VIA CALL" icon={<IoCallOutline />}/>
      </div>
      <div>
      <Button text="VIA EMAIL FORM" icon={<IoIosMail />} isOutline={true} />
      </div>
      <form >
        <div className={styles.form_handler}>
          <label htmlFor="name">Name</label>
          <input type="text" name="name"></input>
        </div>
        <div className={styles.form_handler}>
          <label htmlFor="email">Email</label>
          <input type="email" name="email"></input>
        </div>
        <div className={styles.form_handler}>
          <label htmlFor="text">TEXT</label>
          <textarea  name="text" rows="8"/>
        </div>
        <div style={{
          display: "flex",
          justifyContent: "end",
          width: "100%"
        }}>
        <Button text="Submit" />
        </div>
        
      </form>

    </div>
  )
}

export default ContactForm