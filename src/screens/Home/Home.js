import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { client } from "../../utils/api-client";
import HomeStatic from "../../components/HomeStatic/HomeStatic";
import "./Home.scss";

function Home() {
  const [data, setData] = useState([]);
  const [dataSearch, setDataSearch] = useState([]);
  const [dataS, setDataS] = useState([]);
  const [search, setSearch] = useState('');
  const [type, setType] = useState([]);
  const [typeByID, setTypeByID] = useState([]);
  const [typeId, setTypeId] = useState("");
  const [page, setPage] = useState(8);

  const searchInp = useRef()

  useEffect(() => {
    client(`users?limit=${page}&page=1`).then((data) => setData(data));
    client(`users?limit=${50000}&page=1`).then((data) => setDataSearch(data));
    client("types").then((data) => setType(data));
    client(`/user/type/${typeId}?limit=${20}&page=1`).then((data) =>
      setTypeByID(data)
    );
  }, [typeId, page]);


  useEffect(()=> {
   if (search) {
      const Data = dataSearch?.data?.filter(e => e.firstName.toLowerCase().includes(search.toLowerCase()))
      setDataS(Data)
   }
  }, [search])
  return (
    <>
      <main className="main">

        <div className="container search">
          <h1 className="main__title">Chumchuq so’ysa ham qassob so’ysin</h1>
          <form className="search__form" onSubmit={e => {
             e.preventDefault(); 
             setSearch(searchInp.current.value) 
             searchInp.current.value = ''
             }}>
            <label className="search__label">
              <input
               ref={searchInp} 
                className="search__input"
                type="text"
                placeholder="Xizmat yoki mutaxassis izlang"
              />
              <span className="search__span"></span>
            </label>
            <button className="search__btn update__btn" type="submit">
              Search
            </button>
          </form>
        </div>

        {!dataS?.length && <div className="container category-part">
          <ul className="category__list">
            <li className="category__item">
              <button
                className={`category__btn ${
                  typeId === "" ? "category__btn--acv" : ""
                }`}
                type="button"
                onClick={(e) => setTypeId("")}
              >
                All
              </button>
            </li>
            {type.success &&
              type.data.map((e, i) => (
                <li key={i} className="category__item">
                  <button
                    className={`category__btn ${
                      typeId === e.typeId ? "category__btn--acv" : ""
                    }`}
                    type="button"
                    data-id={e.typeId}
                    onClick={(e) => setTypeId(e.target.dataset.id)}
                  >
                    {e.name}
                  </button>
                </li>
              ))}
          </ul>

          <ul className="category__list-content list-content">
            { typeId &&
              typeByID.success &&
              typeByID.data.map((e, i) => (
                <li key={i} className="list-content__item">
                  <img
                    src={
                      e.imageSrc
                        ? "http://rajabov.uz:5000" + e.imageSrc
                        : "https://picsum.photos/300/300"
                    }
                    alt=""
                    width="282"
                    height="220"
                  />
                  <p className="list-content__name">
                    {e.firstName} {e.lastName}
                  </p>
                  <p className="list-content__prof">{e.bio}</p>
                  <a
                    className="list-content__tel"
                    href={"tel:" + e.phoneNumber}
                  >
                    <b>Telefon:</b>
                    {e.phoneNumber}
                  </a>
                  <p className="list-content__category">
                    <b>Category:</b> {e.Types.name}
                  </p>
                  <Link className="list-content__btn" to={e.userId}>
                    read more
                  </Link>
                </li>
              ))}
            {!typeId &&
              data.success &&
              data.data.map((e, i) => (
                <li key={i} className="list-content__item">
                  <img
                    src={
                      e.imageSrc
                        ? "http://rajabov.uz:5000" + e.imageSrc
                        : "https://picsum.photos/300/300"
                    }
                    alt=""
                    width="282"
                    height="220"
                  />
                  <p className="list-content__name">
                    {e.firstName} {e.lastName}
                  </p>
                  <p className="list-content__prof">{e.bio}</p>
                  <a
                    className="list-content__tel"
                    href={"tel:" + e.phoneNumber}
                  >
                    <b>Telefon:</b>
                    {e.phoneNumber}
                  </a>
                  <p className="list-content__category">
                    <b>Category:</b> {e.Types.name}
                  </p>
                  <Link
                    className="list-content__btn"
                    to={"/single/" + e.userId}
                  >
                    read more
                  </Link>
                </li>
              ))}
          </ul>
         {page === data?.data?.length &&  <button className="more" type="button" onClick={() => setPage(page+4)}>
            See more
          </button>}
        </div>}

        {dataS && <div className="container category-part">
        <ul className="category__list-content list-content">
            {!typeId &&
              dataS.map((e, i) => (
                <li key={i} className="list-content__item">
                  <img
                    src={
                      e.imageSrc
                        ? "http://rajabov.uz:5000" + e.imageSrc
                        : "https://picsum.photos/300/300"
                    }
                    alt=""
                    width="282"
                    height="220"
                  />
                  <p className="list-content__name">
                    {e.firstName} {e.lastName}
                  </p>
                  <p className="list-content__prof">{e.bio}</p>
                  <a
                    className="list-content__tel"
                    href={"tel:" + e.phoneNumber}
                  >
                    <b>Telefon:</b>
                    {e.phoneNumber}
                  </a>
                  <p className="list-content__category">
                    <b>Category:</b> {e.Types.name}
                  </p>
                  <Link
                    className="list-content__btn"
                    to={"/single/" + e.userId}
                  >
                    read more
                  </Link>
                </li>
              ))}
          </ul>
        </div>
         }

        <HomeStatic />
      </main>
    </>
  );
}

export default Home;
