import "./Login.scss"
import { Link } from "react-router-dom"
import { client } from "../../utils/api-client";
import useToken from "../../hooks/useToken";
import { useRef } from "react";

function Login() {
   const [token, setToken] = useToken()
   const phoneNumber = useRef()
   const password = useRef()


   function Login(e) {
     e.preventDefault()
      client("login", {
         data: {
            "password": password.current.value,
            "phoneNumber": phoneNumber.current.value
         }
   }).then(data => {
      setToken(JSON.stringify({token:data.token, id: data.data.userId}))
      window.location = '/'
   })
}
   return (
      <>
      <section className="login container">
      <form className="login__form" onSubmit={e => Login(e)}>
         <h1 className="login__title">Ro'yxatdan o'tish  </h1>
         <label className="login__form-label" htmlFor="phone">Phone number</label>
         <input ref={phoneNumber} className="login__form-input" type="tel" name="phone" id="phone" placeholder="+998901234567" required pattern="^(?:\d{10,12}|\+\d{10,12}|\w+@\w+\.\w{2,4})$"/>
         <label className="login__form-label" htmlFor="password">Password</label>
         <input ref={password} className="login__form-input" type="password" name="password" id="password" placeholder="secret key" required=""/>
         <p className="login__form-desc">
         Do not have account yet? <Link to="./signin" className="login__form-link-auth">Sign in</Link>
         </p>
         <button type="submit" className="login__form-button">Submit</button>
         </form>
      </section>
      </>
   );
}
export default Login;