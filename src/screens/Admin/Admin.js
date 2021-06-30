import { Switch, Route, useParams } from "react-router-dom"
import AdminHeader from "../../components/AdminHeader/AdminHeader"
import AdminNavbar from "../../components/AdminNavbar/AdminNavbar"
import AdminPost from "../../components/AdminPost/AdminPost"
import AdminSocial from "../../components/AdminSocial/AdminSocila"
import AdminUpdata from "../../components/AdminUpdate/AdminUpdate"
import AdminUpload from "../../components/AdminUpload/AdminUpload"
import useToken from "../../hooks/useToken"
import "./Admin.scss"

function Home() {
   // const [sToken, setToken] = useToken()
   // const token = JSON.parse(sToken)

   return(
   <>
      <section className="admin">
         <div className="container">
            <AdminHeader/>

            <div className="admin__wrapper">
               <AdminNavbar />
                  <Switch>
                    <Route path={"/admin/:id"} component={AdminUpdata} exact />
                    <Route path={"/admin/:id/upload"} component={AdminUpload} exact />
                    <Route path={"/admin/:id/post"} component={AdminPost} exact />
                    <Route path={"/admin/:id/social"} component={AdminSocial} exact />
                </Switch>
            </div>
         </div>
      </section>
   </>
   )
}

export default Home