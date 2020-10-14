import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import style from './style.module.css';



const Login = () => {

  const history = useHistory()


//Defining States
const [phoneNum,setPhoneNum] = useState("")
const [pass,setPass] = useState("")

const handleChange = (e) => {
    let name = e.target.name
    let value = e.target.value
    if(name === "phoneNum"){ setPhoneNum(value)}
    if(name === "pass") { setPass(value)}
   
}

const tokengen = () => {
    let token = `todo${phoneNum}todo${pass}`;
    localStorage.setItem("token", token);
    setPhoneNum("")
    setPass("")
    history.push("/dashboard")
}
    return (
        <div className={style.Loginmaindiv}>
        <form className={style.formdiv}>
          <div className={style.containerlogin}>
            <div className={style.headingcontainer}>
              <h1 className={style.headinglogin}>login</h1>
            </div>
            
            <div className={style.forminput}>
              <input
              className={style.inputlogin}
                placeholder="Phone Number"
                type="number"
                name="phoneNum"
                value={phoneNum}
                onChange={handleChange}
  
              />
              {/* {formError.phoneNum.length > 0 && <span className={style.errorfield}>{formError.phoneNum}</span>} */}
            </div>
            <div className={style.forminput}>
              <input
              className={style.inputlogin}
              placeholder="Password"
               type="password"
                name="pass"
                value={pass}
                onChange={handleChange}
              />
               {/* {formError.pass.length > 0 && <span className={style.errorfield}>{formError.pass}</span>} */}
            </div>
            <div className={style.formbuttondiv}>
             {phoneNum.length === 10 && pass.length >= 6 ? (
              <button
              id="sign-in-button"
              className={style.loginbutton}
                onClick={tokengen} 
              >
                Login
              </button>
             ) : (
               <button id="sign-in-button" disabled={true} className={style.loginbuttondisabled}>Login</button>
             )}
               
            </div>
          </div>
        </form>
        </div>
      );
}

export default Login