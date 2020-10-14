import React, { useState } from 'react';
import style from './style.module.css';


const TodoElement = (props) => {

//Defining States

const [isEditing,setIsEditing] = useState(false)
const [val,setVal] = useState(props.item.task)


    return (
        <div className={style.todoelementcontainer}>
          {isEditing === true ? (
            <div className={style.todoelementdiv1}>
              <input
                type="text"
                className={style.todoelementinput}
                value={val}
                onChange={(e) => setVal(e.target.value)}
              />
              <button
                type="submit"
                className={style.todoelementbutton}
                onClick={() => {
                  props.editTodo(props.item.id, val);
                  setIsEditing(false)
                }}
              >
                Edit
              </button>
            </div>
          ) : (
            <div className={style.todoelementcheckboxtext}>
              <input
                type="checkbox"
                onChange={() => props.checkFun(props.item.id)}
                checked={props.item.isCompleted}
                className={style.todoelementcheckbox}
              />
              {props.item.isCompleted === true ? (
                <div style={{ textDecoration: "line-through" }}>
                  {val}
                </div>
              ) : (
                <div>{val}</div>
              )}
            </div>
          )}
          <div className={style.editdelbuttons}>
            <button
              aria-label="edit"
              onClick={() => {
                if (props.item.isCompleted === false) {
                 setIsEditing(true)
                } else {
                 setIsEditing(false)
                }
              }}
            >
              {props.item.isCompleted === false ? (
                <i className="fas fa-pen" style={{border:"none",backgroundColor: "#fff"}}></i>
              ) : (
                <i class="fas fa-pen" style={{opacity: "0.5",pointerEvents: "none"}}></i>  //disabled
              )}
            </button>
            <button
              aria-label="delete"
              onClick={() => props.deleteTask(props.item.id)}
            >
              <i className="fas fa-trash-alt"></i>
            </button>
          </div>
        </div>
      );
}


export default TodoElement;