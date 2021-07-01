import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AdmonHeader from "../../components/AdminHeader/AdminHeader";
import { client } from "../../utils/api-client"
import moment from "moment"

import "./SinglePage.scss"

import config from "../../config"

const REACT_SHORT_URL = config.REACT_SHORT_URL

function SinglePage() {
   const [data, setData] = useState([])
   const { id } = useParams()

   useEffect(() => {
      client(`user/${id}`).then(data => setData(data))
   }, [id])

   return (
      <>
         {
            data.success && (
               <div className="container single-page">
                  <AdmonHeader />
                  <div className="singl-page__main">
                     <ul className="single-page__social">
                        {
                           data.data.Socials.length ? data.data.Socials.map(e => (
                              <li key={e.socialId} className="single-page__item-social">
                                 <a className="single-page___link" href={e.link} target="blank">{e.name}</a>
                              </li>

                           )) : "No socials avaible"
                        }
                     </ul>

                     <ul className="single-page__posts">
                        {
                           data.data.Posts.length ? data.data.Posts.map(e => (
                              <li key={e.postId} className="single-page__item">
                                 <img className="single-page__img" src={REACT_SHORT_URL + e.imageSrc} alt="" width="317" height="247" />
                                 <p className="single-page__name">{e.title}</p>
                                 <span className="single-page__date">{moment(e.createdAt).format('lll')}</span>
                              </li>
                           )) : "No posts avaible"
                        }
                     </ul>
                  </div>
               </div>
            )
         }

      </>
   );
}
export default SinglePage;