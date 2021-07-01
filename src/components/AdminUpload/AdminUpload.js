import "./AdminUpload.scss"
import { useEffect, useRef, useState } from "react"
import useToken from "../../hooks/useToken"
import { client } from "../../utils/api-client"
import { useParams } from "react-router-dom"
import AvatarImage from "../../Assets/Image/avatar.png"
import config from "../../config"

const REACT_SHORT_URL = config.REACT_SHORT_URL

function AdminUpload() {
   const photo = useRef()
   const [sToken, setToken] = useToken()
   const token = JSON.parse(sToken).token
   const tokenId = JSON.parse(sToken).id


   const [img, setData] = useState([])
   const [data, setBigData] = useState([])
   const { id } = useParams()
   // console.log(img.data?.imageSrc);

   useEffect(() => {
      client(`user/${id}`).then(data => setData(data))
   }, [id])

   function Upload(e) {
      e.preventDefault()
      const formData = new FormData()
      formData.append("image", photo.current.files[0])
      console.log(photo.current.files[0]);
      fetch(`${REACT_SHORT_URL}/api/user/uploadPhoto`, {
         method: 'PUT',
         body: formData,
         headers: {
            authorization: `Bearer ${token}`,
         }
      }).then(res => res.json()).then(data => {
         setBigData(data)
         window.location = "/admin/" + tokenId + '/upload'
      })
   }

   return (
      <>
         <div className="wrapper">
            <form className="uploade__form" onSubmit={e => Upload(e)}>
               <div className="uploade__inner">
                  <img className="uploade__img" src={img.data?.imageSrc ? REACT_SHORT_URL + img.data.imageSrc : AvatarImage} alt="user" width="300" height="300" />
                  <label className="uploade__img-label">
                     <span className="uploade__img-label-span"> Upload</span>
                     <input ref={photo} className="visually-hidden uploade__img-input" type="file" required />
                  </label>
                  <button className="update__btn" type="submit">Save</button>
               </div>
            </form>
            <div className="uploade__info">
               <h2 className="uploade__title">Tavsiya</h2>
               <p className="uploade__text">Cursus eget scelerisque in erat adipiscing purus. Dolor rhoncus est sed posuere malesuada aliquam nam. Pellentesque neque elementum tincidun.</p>
            </div>
         </div>
      </>
   )
}

export default AdminUpload