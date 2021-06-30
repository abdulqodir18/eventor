import { NavLink } from "react-router-dom"
import useToken from "../../hooks/useToken"
import "./AdminNavbar.scss"

function AdminNavbar() {
   const [sToken, setToken] = useToken()
   const token = JSON.parse(sToken)

   return(
      <>
         <nav className="admin__navbar admin-navbar">
            <ul className="admin-navbar__list">
               <li className="admin-navbar__item">
                  <NavLink className="admin-navbar__link" activeClassName="admin-navbar__link--acv" to={`/admin/`+token.id} exact>Update profile</NavLink>
               </li>
               <li className="admin-navbar__item">
                  <NavLink className="admin-navbar__link" activeClassName="admin-navbar__link--acv" to={`/admin/`+token.id+`/upload`}>Uploda photo</NavLink>
               </li>
               <li className="admin-navbar__item">
                  <NavLink className="admin-navbar__link" activeClassName="admin-navbar__link--acv" to={`/admin/`+token.id+`/post`}>Post qoshish</NavLink>
               </li>
               <li className="admin-navbar__item">
                  <NavLink className="admin-navbar__link" activeClassName="admin-navbar__link--acv" to={`/admin/`+token.id+`/social`}>Social link add</NavLink>
               </li>
            </ul>
         </nav>
      </>
   )
}

export default AdminNavbar