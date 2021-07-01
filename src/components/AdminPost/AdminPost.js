import "./AdminPost.scss"
import Delete from "../SVGS/Delete"
import { client } from "../../utils/api-client"
import useToken from "../../hooks/useToken"
import { useEffect, useRef, useState } from "react"


function AdminPost() {
   const [sToken, setToken] = useToken()
   const tokenData = JSON.parse(sToken)
   const [data, setData] = useState([])
   const [post, setPost] = useState(data)
   const photo = useRef()
   const bio = useRef()

   
   useEffect( ()=> {
      client("posts/user/"+ tokenData.id).then(data => {
         setPost(data.data)
         setData(data)
      })
   }, [tokenData.id])
   
   ;async function Deleted(e) {
      let id = e.target.dataset.id
      await fetch(`http://eventor.uz:5000/api/post/${id}`, {
         method: 'DELETE',
         headers: {
            authorization:`Bearer `+tokenData.token,
            'Content-Type': "application/json"
         },
      }).then(() => {
         window.location = "/admin/"+tokenData.id+"/post"
      })
   }
   
   function Create(e) {
         e.preventDefault()

      const formData = new FormData();

      formData.append("image", photo.current.files[0], photo.current.files[0].name)
      formData.append("title", bio.current.value)

         fetch(`http://eventor.uz:5000/api/posts `, {
            method: 'POST',
            body: formData,
            headers: {
               authorization:`Bearer `+tokenData.token,
            },
         }).then((data) => data.json()).then(data => {
            setPost([...post, data.data])
         })
  }
   return(
      <>
         <div className="wrapper post-wrapper">
            <form className="update__form  post__form" onSubmit={Create}>
               <div className="uploade__inner">
                  <img className="uploade__img" src="" alt=""  width="300" height="300"/>
                  <label className="post__img-label">
                     <span className="uploade__img-label-span">Upload</span> 
                     <input ref={photo} className="visually-hidden uploade__img-input" type="file" required/>
                  </label>
               </div>
               <label className="update__label post__label">
                  <span>Bio</span>
                  <textarea ref={bio} required className="update__input post__textarea" minLength="50" placeholder="Lorem Ipsum is simpl" cols="30" rows="10"></textarea>
               </label>
               <button className="update__btn post__btn" type="submit" >Saqlamoq</button>
            </form>

            <h2 className="post__title">Your postes</h2>
            <ul className="post__list">
               {
                 post.length && post.map(e => (
                    
                  <li key={e.postId} className="post__item">

                     <div className="post__item-inner">
                        <img className="post__img" src={"http://eventor.uz:5000"+e.imageSrc} alt="a" width="60" height="60"/>
                        <div>
                           <span className="post__span">{e.title}</span>
                           <span className="post__text">{e.createdAt}</span>
                        </div>
                     </div>
                     <button className="post__btn-delete" data-id={e.postId} onClick={Deleted}>
                        <Delete/>
                     </button>
                  </li>
                  ))
               }
              
            </ul>
         </div>
      </>
   )
}

export default AdminPost