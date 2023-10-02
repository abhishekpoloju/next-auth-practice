import React from 'react'
import { useReducer } from 'react'
import { act } from 'react-dom/test-utils'

type stateType={
  email:string,
  search:string
}

type actionType={
  type:string,
  payload:{key:string,value:string}
}

const reducerFunc=(state:stateType,action:actionType)=>{
  console.log(action.payload)
  switch(action.type){
    case "text" :return {...state, [`${action.payload.key}`]:action.payload.value}
    case "search" :return {...state, [`${action.payload.key}`]:action.payload.value}
    default : throw new Error
  }
}

const TestFile1 = () => {
  const [myState,dispatch]=useReducer(reducerFunc,{email:"",search:""})

  return (
    <div className='h-screen w-screen flex flex-col items-center justify-center gap-5'>
      <input
        type='text'
        name="email"
        className='border focus:outline-red-500 border-red-500'
        onChange={(e)=>{
          dispatch({type:e.target.type,payload:{key:e.target.name, value:e.target.value}})
        }}
      />
      <input
        type="search"
        name="search"
        className='border focus:outline-red-500 border-red-500'
        onChange={(e)=>{
          dispatch({type:e.target.type,payload:{key:e.target.name, value:e.target.value}})
        }}  
      />
      <span>
        {
          myState.email
        }
      </span>
      <span>
        {
          myState.search
        }
      </span>
    </div>
  )
}

export default TestFile1
