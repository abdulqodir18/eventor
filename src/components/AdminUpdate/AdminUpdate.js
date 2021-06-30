import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { client } from "../../utils/api-client"
import "./AdminUpdate.scss"
import useToken from "../../hooks/useToken"



function AdminUpdata() {
   const firstName = useRef()
   const lastName = useRef()
   const bio = useRef()
   const phoneNumber = useRef()
   const [sToken, setToken] = useToken()
   const token = JSON.parse(sToken).token
   const tokenId = JSON.parse(sToken).id

   const [data, setData] = useState([])
   const {id} = useParams()

   useEffect(()=> {
      client(`user/${id}`).then(data => setData(data))
   }, [id])

   function Update(e) {
      e.preventDefault()
      fetch(`http://eventor.uz:5000/api/user`, {
         method: 'PUT',
         body: JSON.stringify({
            "firstName": firstName.current.value,
            "lastName": lastName.current.value,
            "phoneNumber": phoneNumber.current.value,
            "bio":  bio.current.value
         }),
         headers: {
            authorization:`Bearer ${token}`,
	         'Content-Type': "application/json"
         }
      }).then(res => res.json()).then(data =>  window.location = "/admin/"+tokenId
      )
   }

   return(
      <>
         <div className="update wrapper">
           {
              data.success &&  <form className="update__form" onSubmit={e => Update(e)}>
              <div className="update__form-wrapper">
                 <div className="update__inner">
                    <label className="update__label">
                       <span>Ism</span>
                       <input required ref={firstName} className="update__input" defaultValue={data.data.firstName} type="text"/>
                    </label>
                    <label className="update__label">
                       <span>Familiya</span>
                       <input required ref={lastName} className="update__input" defaultValue={data.data.lastName} type="text"/>
                    </label>
                 </div>
                 <label className="update__label">
                    <span>Telefon raqamingiz</span>
                    <input required ref={phoneNumber} className="update__input" defaultValue={data.data.phoneNumber} type="tel" placeholder="98 989-24-24" pattern="^(?:\d{10,12}|\+\d{10,12}|\w+@\w+\.\w{2,4})$"/>
                 </label>
              </div>

              <div className="update__wrapper">
                 <label className="update__label">
                    <span>Bio</span>
                    <textarea required className="update__input update__textarea" defaultValue={data.data.bio} cols="30" rows="10" ref={bio}></textarea>
                 </label>
                 <button className="update__btn" type="submit">Saqlamoq</button>
              </div>
           </form>
           }
         </div>
      </>
   )
}

export default AdminUpdata