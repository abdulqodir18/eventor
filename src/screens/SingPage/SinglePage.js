import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { client } from "../../utils/api-client"
import moment  from "moment"

import "./SinglePage.scss"

function SinglePage() {
   const [data, setData] = useState([])
   const {id} = useParams()

   useEffect(()=> {
      client(`user/${id}`).then(data => setData(data))
   }, [id])

   return (
      <>
      {
         data.success && <div className="container single-page">
         <header className="admin__header">
            <ul className="admin__list">
               <li className="admin__item">
                  <img className="admin__img" src={"http://rajabov.uz:5000"+ data.data.imageSrc} alt="" width="125" height="125"/>
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
         <div className="singl-page__main">
            <ul className="single-page__social">
               {
                  data.data.Socials.map(e => (
                  <li key={e.socialId} className="single-page__item-social">
                     <a className="single-page___link" href={e.link} target="blank">{e.name}</a>
                  </li>

                  ))
               }
            </ul>

               <ul className="single-page__posts">
                  {
                     data.data.Posts.map(e => (
                        <li key={e.postId} className="single-page__item">
                           <img className="single-page__img" src={"http://rajabov.uz:5000" + e.imageSrc} alt=""  width="317" height="247"/>
                           <p className="single-page__name">{e.title}</p>
                           <span className="single-page__date">{moment(e.createdAt).format('lll')}</span>
                        </li>
                     ))
                  }
               </ul>
         </div>
         </div>
      }
         
      </>
   );
}
export default SinglePage;