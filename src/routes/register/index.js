import React from "react";
import style from "./style.module.css"

const Register = () => {

  return (
    <div  className={style.division}>
      <div className={style.parttwo}>
        <div className={style.vertical}>
        <div>
        <i class="fas fa-people-carry" ></i>
        <h3  className={style.heading}>Together we can do more!</h3>
        </div>
        </div>
        </div>
   
    <div className={style.Registermaindiv}>
    <form className={style.formdiv}>
      <div className={style.containerregister}>

        <div className={style.forminput}>
          <input className={style.inputregister} type="text" placeholder="Full Name"/>
        </div>

        <div className={style.forminput}>
          <input className={style.inputregister}  type="email" placeholder="Email"/>
        </div>

        <div className={style.forminput} >
          <input className={style.inputregister} type="number" placeholder="Phone Number"/>
        </div>
        <div className={style.formbuttondiv}>
          <button className={style.registerbutton}>
            Register
          </button>
        </div>
      </div>
    </form>
    </div>
    </div>
  );
};

export default Register;
