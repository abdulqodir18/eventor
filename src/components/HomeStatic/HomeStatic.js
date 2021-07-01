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
          <h1 className="about__title">Sayt qanday ishlaydi</h1>
          <ul className="about__lit">
            <li className="about__item about__item--start">
               <p className="about__text">Muammoingizni hal qiladigan mutaxassis toping! </p>
            </li>
            <hr className="hr" />
            <li className="about__item about__item--middle">
               <p className="about__text">U bilan aloqaga chiqing</p>
            </li>
            <hr className="hr" />
            <li className="about__item about__item--end">
               <p className="about__text">Ishingizni hal qiling</p>
            </li>
          </ul>
        </div>
      </section>

      {data.data?.length > 0 && <section className="categories">
        <div className="container about__container">
          <h1 className="about__title">Categories Lorem Ipsum is simpl</h1>
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
            Delivering real results for top companies
          </h2>
          <ul className="reviews__list">
            <li className="reviews__item">
              <p className="reviews__desc">
                {" "}
                “The team perfectly fit the specialized skill set required. They
                focused on the most essential features helping us launch the
                platform eight months faster than planned.”
              </p>
              <div className="reviews__user">
                <p className="reviews__user-name">Kady Baker</p>
                <p className="reviews__user-job">Product Manager at Bookmark</p>
              </div>
            </li>
            <li className="reviews__item">
              <p className="reviews__desc">
                {" "}
                “The team perfectly fit the specialized skill set required. They
                focused on the most essential features helping us launch the
                platform eight months faster than planned.”
              </p>
              <div className="reviews__user">
                <p className="reviews__user-name">Aiysha Reese</p>
                <p className="reviews__user-job">Founder of Manage</p>
              </div>
            </li>
            <li className="reviews__item">
              <p className="reviews__desc">
                {" "}
                “The team perfectly fit the specialized skill set required. They
                focused on the most essential features helping us launch the
                platform eight months faster than planned.”
              </p>
              <div className="reviews__user">
                <p className="reviews__user-name">Arthur Clarke</p>
                <p className="reviews__user-job">Co-founder of MyPhysio</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
export default HomeStatic
