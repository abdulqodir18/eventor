import { Switch, Route, Link } from "react-router-dom"
import Home from "./screens/Home/Home"
import Admin from "./screens/Admin/Admin"
import useToken from "./hooks/useToken"
import "./app.scss"
import Login from "./screens/Login/Login"
import SinglePage from "./screens/SingPage/SinglePage"

import Logo from "./Assets/Image/eventor.png"
import SignIn from "./screens/SignIn/SignIn"


function App() {
   const [sToken, setToken] = useToken()
   const token = JSON.parse(sToken)

    // setToken()
    return( 
        <>
        <header className="site-header">
            <div className="container site-header__container">
            <Link className="header__link-log" to="/">
                <img src={Logo} alt=""  width="100" height="40"/>
            </Link>

            <div className="header__inner">
                <Link className="header__link" to="/"> How To work</Link>

                {token ? <Link className="header__btn header__login" to="/" onClick={() => setToken(false)}>Log out</Link> : <Link className="header__btn header__login" to="/login">Login</Link>}
               {token && <Link className="header__btn header__checkIn" to={`/admin/` + token.id}>Check In</Link>}
            </div>
            </div>
            
        </header>

            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/single/:id" component={SinglePage}/>
                <Route  path="/login" component={Login}/>
                <Route path="/signin" component={SignIn}/>
                <Route path="/admin/:id" component={Admin}/>
            </Switch>

            <footer className="footer">
                <div className="container footer__container">
                    <Link className="footer__logo-link" to="/">
                        <img src={Logo} alt=""  width="100" height="40"/>
                    </Link>
                    <p className="footer__text">Copyright © 2021. <b>Eventor</b>. All rights reserved.</p>
                </div>
            </footer>
        </>
    )
}

export default App
