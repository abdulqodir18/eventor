import "./HomeStatic.scss"
import { client } from "../../utils/api-client";
import { useEffect, useState } from "react";
import config from "../../config"

const REACT_SHORT_URL = config.REACT_SHORT_URL

function HomeStatic() {

  const [data, setData] = useState([]);

  useEffect(()=> {
    client('posts?limit=9&page=1').then(data => setData(data))
  }, [])
  return (
    <>
      <section className="about">
        <div className="container about__container">
          <h1 className="about__title">How the site works</h1>
          <ul className="about__lit">
            <li className="about__item about__item--start">
               <p className="about__text">Find an eventor who can organize your event!</p>
            </li>
            <hr className="hr" />
            <li className="about__item about__item--middle">
               <p className="about__text">Contact the eventor to make a deal for organizing event!</p>
            </li>
            <hr className="hr" />
            <li className="about__item about__item--end">
               <p className="about__text">Hold your event and rest!</p>
            </li>
          </ul>
        </div>
      </section>

      {data.data?.length > 0 && <section className="categories">
        <div className="container about__container">
          <h1 className="about__title">The work done by our adventurers</h1>
          <ul className="about__lit">
            {
              data.data?.length && data.data.map(e => (
              <li className="categorys__item">
                <img src={REACT_SHORT_URL+e.imageSrc} alt="test" width="400" height="250"/>
                <p className="category__text">{e.title}</p>
              </li>
              ))
            }
          </ul>
        </div>
      </section>}

      <section className="reviews">
        <div className="container reviews__container">
          <h2 className="reviews__header">
          Delivering the comments of Eventors on website usefulness! 
          </h2>
          <ul className="reviews__list">
            <li className="reviews__item">
              <p className="reviews__desc">
                {" "}
                "The website helped the agency a lot, as we worked in traditional way of finding customers. Website provided us the chance to go online and make good sales!" 
              </p>
              <div className="reviews__user">
                <p className="reviews__user-name">Amirullaeva Farangiz</p>
                <p className="reviews__user-job">Project Manager of YourEvents agency</p>
              </div>
            </li>
            <li className="reviews__item">
              <p className="reviews__desc">
                {" "}
                "I was always getting trouble on finding the client and getting job offers, however, Eventor.uz gave me an opportunity to get new clients on the platform where majority of the Event makers gathered"
              </p>
              <div className="reviews__user">
                <p className="reviews__user-name">Russel</p>
                <p className="reviews__user-job">Professional DJ</p>
              </div>
            </li>
            <li className="reviews__item">
              <p className="reviews__desc">
                {" "}
                "We have been getting less clients over the past 6 moths until we registered on the Eventor.uz. The website changed the restaurant's online presence completely, as we already had social media pages to interact with customers."
              </p>
              <div className="reviews__user">
                <p className="reviews__user-name">Kseniya Pak </p>
                <p className="reviews__user-job">Oq Saroy restaurant</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
export default HomeStatic
