import { Contact as ContactModel } from '../models/contact.class'
import Connected from './Connected'

const Contact = () => {

  const defaultContact = new ContactModel("Juan Camilo", "Posada", "juan@posada.com", false)
  console.log(defaultContact);

  return (
    <div>
      <h2>Contact name: {defaultContact.name}</h2>
      <h3>Last name: {defaultContact.lastName}</h3>
      <h4>Email: {defaultContact.email}</h4>
      <Connected contact={defaultContact} />
    </div>
  )
}



export default Contact