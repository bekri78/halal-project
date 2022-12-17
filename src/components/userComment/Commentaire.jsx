import { onAuthStateChanged } from 'firebase/auth'
import React, {useState} from 'react'
import { auth } from '../../utils/Firebase.config'

export default function Commentaire() {

    const [user,setUser]= useState(null)

    onAuthStateChanged(auth,(currentUser)=> {
        setUser(currentUser)
      })
  return (
    <>
    <div>Commentaire</div>
    {/* map */}
 { user ? ( <form>
    <textarea placeholder='envoyer un commentaire'></textarea>
    <input type="submit" value="envoyer"/>
 </form>): (
    <p> Vous devez etre connecter pour poster un commentaire</p>
 )}
    </>
  )
}
