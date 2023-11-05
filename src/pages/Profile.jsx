import React from 'react'
import Menu from '../components/Menu'
import { useParams } from 'react-router-dom'
function Profile() {
  let{facebookId,whatsAppId}=useParams()
  return (
    <div>
      <p>facebookId:{facebookId}</p>
      <p>whatsAppId:{whatsAppId}</p>
        <Menu/>
      <h1>this is profilePage</h1>
    </div>
  )
}

export default Profile
