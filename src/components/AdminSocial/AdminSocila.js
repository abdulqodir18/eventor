import "./AdminSocial.scss"
import { client } from "../../utils/api-client"
import useToken from "../../hooks/useToken"
import { useEffect, useRef, useState } from "react"
import moment from "moment"

import config from "../../config"

const REACT_SHORT_URL = config.REACT_SHORT_URL
function AdminSocial() {
   const name = useRef()
   const link = useRef()
   const [post, setPost] = useState([])

   const [err, setErr] = useState({})


   
   const [sToken, setToken] = useToken()
   const tokenData = JSON.parse(sToken)

   function Create(e) {
      e.preventDefault()
      
      client("socials", {
         token: tokenData.token,
         data: {
            name: name.current.value,
            link: link.current.value
         }
      }).then(data => setPost([...post, data.data])).catch(err => setErr(err))
   }

   ;async function Deleted(e) {
      let id = e.target.dataset.id
      await fetch(`${REACT_SHORT_URL}/api/social/${id}`, {
         method: 'DELETE',
         headers: {
            authorization:`Bearer `+tokenData.token,
            'Content-Type': "application/json"
         },
      }).then(() => {
         window.location = "/admin/"+tokenData.id+"/social"
      })
   }

   useEffect(()=> {
      client("socials/user/"+tokenData.id).then(data => setPost(data.data))
   }, [tokenData.id])

   console.log(err);

   return(
      <>
         <div className="wrapper post-wrapper">
         <form className="social__form" onSubmit={e => Create(e)}>
            <label className="update__label">
               <span>Social Media name</span>
               <input required ref={name} className="update__input social__input" type="text"/>
            </label>
            <label className="update__label">
               <span>Social media link</span>
               <input required ref={link} className="update__input social__input" type="text"/>
            </label>
            <button className="update__btn" type="submit">Save</button> 
            {err.success === false && <span className="err err__social">{err.message}</span>}

         </form>

         <h2 className="post__title">Your links</h2>

         <ul className="social__list">
            {
               post.length && post.map(e => (
            <li key={e.socialId} className="post__item social__item">
            <div className="post__item-inner">
               <div>
                  <span className="post__span">{e.name}</span>
                  <span className="post__text">{moment(e.createdAt).format('L')}</span>
               </div>
            </div>
            <button className="post__btn-delete" type="button" data-id={e.socialId} onClick={e => Deleted(e)}>
            </button>
         </li>
               ))
            }
         
         </ul>
         </div>
      </>
   )
}

export default AdminSocial

// all ok