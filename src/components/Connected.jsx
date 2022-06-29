import { useState } from 'react'
import { Contact as ContactModel } from '../models/contact.class'
import PropTypes from "prop-types"

const Connected = ({contact}) => {
  const [isConnected, setIsConnected] = useState(contact.isConnected)

  const handleConnected = () => {
    setIsConnected(!isConnected)
  }
  return (
    <>
      <h5>{isConnected ? "CONTACT ONLINE" : "CONTACT UNAVAILABLE"}</h5>
      <button type='button' onClick={handleConnected}>{isConnected ? "CONNECT" : "DISCONNECT"}</button>
    </>
    
  )
}

Connected.propTypes = {
  contact : PropTypes.instanceOf(ContactModel)
}

export default Connected