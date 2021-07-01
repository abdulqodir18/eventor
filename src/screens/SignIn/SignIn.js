import "./SignIn.scss";
import { Link } from "react-router-dom";
import { client } from "../../utils/api-client"
import useToken  from "../../hooks/useToken"
import { useEffect, useRef, useState } from "react";


function SignIn() {
   const [token, setToken] = useToken()
  const [type, setType] = useState([]);
  const [err, setErr] = useState(true);


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
         "typeId":typeId.current.value
      }
   }).then(data => {
     console.log(data);
      setToken(JSON.stringify({token:data.token, id: data.data.userId}))
      window.location = '/'
   }).catch(err => setErr(err))
  }

   useEffect(()=> {
    client("types").then((data) => setType(data));
   }, [])

  return (
    <>
      <section className="login container">
        <form className="register__form" onSubmit={ e => Register(e) }>
          <h1 className="register__title">Login</h1>
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
          <select ref={typeId} className="register__form-input">
            {
              type.success && type.data.map((e) => (
                <option key={e.typeId} value={e.typeId}>{e.name}</option>
              ))
            }
          </select>
          <p className="register__form-desc">
            Have You already account? <Link to="./login" className="register__form-link-auth">
              Login
            </Link>
          </p>
          <button type="submit" className="register__form-button">
            Submit
          </button>

          {err.success === false && <span className="err">{err.message}</span>}
        </form>
      </section>
    </>
  );
}
export default SignIn;
