import "./AdminHeader.scss"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { client } from "../../utils/api-client"
import AvatarImage from "../../Assets/Image/avatar.png"
import config from "../../config"

const REACT_SHORT_URL = config.REACT_SHORT_URL

function AdminHeader() {
   const [data, setData] = useState([])
   const { id } = useParams()

   useEffect(() => {
      client(`user/${id}`).then(data => setData(data))
   }, [id])

   console.log(data);
   return (
      <>
         {
            data.success && <header className="admin__header">
               <ul className="admin__list">
                  <li className="admin__item ">
                     <img className="admin__img"
                        src={data.data.imageSrc ? `${REACT_SHORT_URL}${data.data.imageSrc}` : AvatarImage}
                        alt="Avatar" width="80" height="80" />
                  </li>
                  <li className="admin__item">
                     <span className="admin__bio">First name:</span>
                     <p className="admin__bio-name">{data.data.firstName}</p>
                  </li>
                  <li className="admin__item">
                     <span className="admin__bio">Last name:</span>
                     <p className="admin__bio-name">{data.data.lastName}</p>
                  </li>
                  <li className="admin__item">
                     <span className="admin__bio">Category:</span>
                     <p className="admin__bio-name">{data.data.Types.name}</p>
                  </li>
                  <li className="admin__item">
                     <span className="admin__bio">Phone number</span>
                     <p className="admin__bio-name">{data.data.phoneNumber}</p>
                  </li>
               </ul>
            </header>
         }
      </>
   )
}

export default AdminHeader