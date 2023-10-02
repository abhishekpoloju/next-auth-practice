import React from "react";
import { useReducer } from "react";

const reducer=(state:any,action:any)=>{
  switch(action.type){
    case "increment":
      return {count: state.count+action.payload}
    case "decrement":
      return {count: state.count-action.payload}
    case "reset":
      return {count: 0}
    default:
     throw new Error("This action type doesnot exist")
  }
}

export default function Login() {

  const [myState,dispatch]=useReducer(reducer,{count:0})
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center gap-5">
      <div className="flex gap-5">
       <button className="bg-green-500 p-4 text-base" 
       onClick={()=>{
        dispatch({type:"increment",payload:1})
       }}
       >
        increment
      </button>
      <div className="p-4 bg-slate-300 text-lg">
        {
          myState.count
        }
      </div>
      <button className="bg-red-500 p-4 text-base"
       onClick={()=>{
        dispatch({type:"decrement",payload:1})
       }}
      >
        decrement
      </button>
      </div>
      <button className="bg-blue-500 p-4 text-base"
       onClick={()=>{
        dispatch({type:"reset"})
       }}
      >
        reset
      </button>
    </div>
  );
}
