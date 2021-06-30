import "./HomeStatic.scss"
function HomeStatic() {
  return (
    <>
      <section className="about">
        <div className="container about__container">
          <h1 className="about__title">Sayt qanday ishlaydi</h1>
          <ul className="about__lit">
            <li className="about__item about__item--start">
               <p className="about__text">O’z muammoingizni batafsil bayon qiling</p>
            </li>
            <hr className="hr" />
            <li className="about__item about__item--middle">
               <p className="about__text">O’z muammoingizni batafsil bayon qiling</p>
            </li>
            <hr className="hr" />
            <li className="about__item about__item--end">
               <p className="about__text">O’z muammoingizni batafsil bayon qiling</p>
            </li>
          </ul>
        </div>
      </section>

      <section className="categories">
        <div className="container about__container">
          <h1 className="about__title">Categories Lorem Ipsum is simpl</h1>
          <ul className="about__lit">
            <li className="categorys__item">
               <img src="https://picsum.photos/400/250?100" alt="test" width="400" height="250"/>
               <p className="category__text">O’z muammoingizni batafsil bayon qiling</p>
            </li>
            <li className="categorys__item">
               <img src="https://picsum.photos/400/250?500" alt="test" width="400" height="250"/>
               <p className="category__text">O’z muammoingizni batafsil bayon qiling</p>
            </li>
            <li className="categorys__item">
               <img src="https://picsum.photos/400/250?850" alt="test" width="400" height="250"/>
               <p className="category__text">O’z muammoingizni batafsil bayon qiling</p>
            </li>
          </ul>
        </div>
      </section>

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
