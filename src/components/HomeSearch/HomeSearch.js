import "./HomeSearch.scss"

function HomeSearch() {
   return(
   <>
      <div className="container search">
         <h1 className="main__title">Chumchuq so’ysa ham qassob so’ysin</h1>
         <form className="search__form">
            <label className="search__label">
               <input className="search__input" type="text" placeholder="Xizmat yoki mutaxassis izlang" />
               <span className="search__span"></span>
            </label>
            <button className="search__btn update__btn" type="submit">Search</button>
         </form>
      </div>
   </>
   )
}

export default HomeSearch