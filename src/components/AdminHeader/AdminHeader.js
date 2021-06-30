import "./AdminHeader.scss"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { client } from "../../utils/api-client"

function AdminHeader() {
   const [data, setData] = useState([])
   const {id} = useParams()

   useEffect(()=> {
      client(`user/${id}`).then(data => setData(data))
   }, [id])

   return(
   <>
      {
         data.success && <header className="admin__header">
         <ul className="admin__list">
            <li className="admin__item">
               <img className="admin__img" src={"http://eventor.uz:5000"+ data.data.imageSrc} alt="" width="125" height="125"/>
               <p className="admin__name">{data.data.firstName} {data.data.lastName}</p>
            </li>
            <li className="admin__item">
               <span className="admin__bio">Job title:</span>
               <p className="admin__bio-name">{data.data.bio}</p>
            </li>
            <li className="admin__item">
               <span className="admin__bio">Telefon raqamingiz:</span>
               <p className="admin__bio-name">{data.data.phoneNumber}</p>
            </li>
            <li className="admin__item">
               <span className="admin__bio">Category:</span>
               <p className="admin__bio-name">{data.data.Types.name}</p>
            </li>
            <li className="admin__item">
               <span className="admin__bio">Category:</span>
               <p className="admin__bio-name">Lorem Ipsum is simpl</p>
            </li>
         </ul>
      </header>
      }
   </>
   )
}

export default AdminHeader