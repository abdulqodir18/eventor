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
                  <NavLink className="admin-navbar__link" activeClassName="admin-navbar__link--acv" to={`/admin/`+token.id+`/upload`}>Upload photo</NavLink>
               </li>
               <li className="admin-navbar__item">
                  <NavLink className="admin-navbar__link" activeClassName="admin-navbar__link--acv" to={`/admin/`+token.id+`/post`}>Add Post</NavLink>
               </li>
               <li className="admin-navbar__item">
                  <NavLink className="admin-navbar__link" activeClassName="admin-navbar__link--acv" to={`/admin/`+token.id+`/social`}>Add Social link</NavLink>
               </li>
            </ul>
         </nav>
      </>
   )
}

export default AdminNavbar