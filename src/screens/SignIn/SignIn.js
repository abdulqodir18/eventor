import "./SignIn.scss";
import { Link, Redirect } from "react-router-dom";
import { client } from "../../utils/api-client"
import useToken  from "../../hooks/useToken"
import { useRef } from "react";


function SignIn() {
   const [token, setToken] = useToken()

   const firstName = useRef()
   const lastName = useRef()
   const password = useRef()
   const phoneNumber = useRef()
   const typeId = useRef()

  function Register(e) {
     e.preventDefault()
   client("register", {
      data: {
         "firstName": firstName.current.value,
         "lastName": lastName.current.value,
         "password": password.current.value,
         "phoneNumber": phoneNumber.current.value,
         "typeId":"76177434-c160-4e74-896f-c906b41e0256"
      }
   }).then(data => {
      setToken(JSON.stringify({token:data.token, id: data.data.userId}))
      window.location = '/'
   })
  }
  return (
    <>
      <section className="login container">
        <form className="register__form" onSubmit={ e => Register(e) }>
          <h1 className="register__title">Ro'yxatdan o'tish</h1>
          <div className="register__form-top">
            <div className="reg-in">
              <label  className="register__form-label" htmlFor="first-Name">
                First name
              </label>
              <input
                ref={firstName}
                className="register__form-input"
                type="text"
                name="fitstName"
                id="first-Name"
                placeholder="John"
                required
              />
            </div>
            <div className="reg-in">
              <label className="register__form-label " htmlFor="lastName">
                Last name
              </label>
              <input
               ref={lastName}
                className="register__form-input last"
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Doe"
                required
              />
            </div>
          </div>
          <label className="register__form-label" htmlFor="phone">
            Phone number
          </label>
          <input
            ref={phoneNumber}
            className="register__form-input"
            type="tel"
            name="phone"
            id="phone"
            placeholder="+998901234567"
            required
            pattern="^(?:\d{10,12}|\+\d{10,12}|\w+@\w+\.\w{2,4})$"
          />
          <label className="register__form-label" htmlFor="password">
            Password
          </label>
          <input
            ref={password}
            className="register__form-input"
            type="password"
            name="password"
            id="password"
            placeholder="secret key"
            required=""
          />
          <p className="register__form-desc">
            Have You already account? <Link to="./login" className="register__form-link-auth">
              Login
            </Link>
          </p>
          <button type="submit" className="register__form-button">
            Submit
          </button>
        </form>
      </section>
    </>
  );
}
export default SignIn;
