import React, { useState } from 'react'
import TodoElement from "../../components/TodoElement/TodoElement.js"
import {Redirect} from "react-router-dom"
import style from "./style.module.css"


const Todo = () => {
    
//Defining States

    const [todo,setTodo] = useState([])
    const [task,setTask] = useState("")
    const [value,setValue] = useState(0)
    const [navigate,setNavigate] = useState(false)

//Functions for functionality

const logout = () => {
    localStorage.clear("token")
    setNavigate(true)
}
if (navigate) {
    return <Redirect to="/" push={true} />;
  }

const handleChange = (e) => {
    setTask(e.target.value)
} 

const addItem = () => {
    const newTask = {
        id: Date.now(),
        task: task,
        isCompleted: false
    }

    const newTodo = [...todo,newTask] //Not sure whether correct or not
    setTodo(newTodo)
    setTask("")
    setValue(0)   
}

const deleteTask = (cid) => {
 const delTodo = todo.filter((dtod) => dtod.id !== cid)
 setTodo(delTodo) 
}

const editTodo = (cid,val) => {
    const edTodo = todo.map(edtodo => {
        if(edtodo.id === cid){
            edtodo.task = val
        }
        return edtodo
    })

    setTodo(edTodo)
}

const checkFun = (id) => {
    const filtertodo = todo.map((at) => {
        if(at.id === id) {
            at.isCompleted = true;
            return at
        }
        else {
            return at
        }
    })
    setTodo(filtertodo)
}

const TodoFunction = () => {
    let todoitems;
    if (value === 0) {
      todoitems = todo.filter((t) => {
        return t;
      });
    } else if (value === 1) {
      todoitems = todo.filter((t) => {
        return t.isCompleted !== true;
      });
    } else if (value === 2) {
      todoitems = todo.filter((t) => {
        return t.isCompleted === true;
      });
    }

    return todoitems;
  };

  let todoitems = TodoFunction();
 


    return (
        <div className={style.todomaindiv}>
          <div className={style.todologoutdiv}>
            {" "}
            <button onClick={logout} className={style.todologoutbutton}> {" "}
            <i className="fas fa-sign-out-alt"></i>
              Logout
            </button>
          </div>
          <div className={style.todocontainer}>
            <div className={style.todoheadingdiv}>
              <h1 className={style.todoheading}>todos</h1>
            </div>
            <div className={style.todocontainer2}>
              <div className={style.todowrapper1}>
                  <div className={style.inputbuttondiv}>
                    <input
                     className={style.inputlogin}
                      value={task}
                      onChange={handleChange}
                      placeholder="What needs to be done ?"
                    ></input>
                    <button
                     className={style.todoaddbutton}
                      variant="contained"
                      color="secondary"
                      onClick={addItem}
                    >
                      Add
                    </button>
                  </div>
                <div className={style.todowrapper2}>
                  <div className={style.alltag}>
                    <button className={style.allbutton}  onClick={() => setValue(0)}>All</button>
                    <div className={style.alltodoitems}>
                    {todoitems.length !== 0 && value === 0
                      ? todoitems.map((item) => {
                          return (
                            <div key={item.id}>
                              <TodoElement
                                item={item}
                                deleteTask={deleteTask}
                                editTodo={editTodo}
                                checkFun={checkFun}
                              />
                            </div>
                          );
                        })
                      : null}
                    </div>
                  </div>
                  <div className={style.activetag}>
                    <button className={style.activebutton} onClick={() => setValue(1)}>Active</button>
                    <div className={style.activetodoitems}>
                    {todoitems.length !== 0 && value === 1
                      ? todoitems.map((item, index) => {
                          return (
                            <div key={index} className="internal-todoitems">
                              {item.task}
                            </div>
                          );
                        })
                      : null}
                    </div>
                  </div>
                  <div className={style.completedtag}>
                    <button className={style.completedbutton}  onClick={() => setValue(2)}>Completed</button>
                    <div className={style.completedtodoitems}>
                    {
                    todoitems.length !== 0 && value === 2 ? 
                        todoitems.map((item, index) => {
                        if (item !== undefined) {
                          return (
                            <div
                             className="internal-todoitems"
                             style={{textDecoration: "line-through"}}
                              key={index}
                            >
                              {item.task}
                            </div>
                          );
                        }
                      })
                   : null }
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      );
}

export default Todo