

import React, { useEffect, useState } from 'react'
import "../App.css"
import { click } from '@testing-library/user-event/dist/click'
import {Col, Row} from "react-bootstrap"



const Home = () => {

  let [result,setResult]=useState("")

  let clickhandle=(e)=>{
    setResult(result.concat(e.target.value))
  

  }
  let clear=()=>{
    setResult("")
  }
  let evaluate=()=>{
    setResult(result=="true"?1:result=="false"?0:eval(result).toString())

  }
    


  return (
    <div className="main-calc">
      
      
        <div className='calc-screen' >
          <input type='text'className='m-1 mt-2' placeholder='0' value={result}></input>
          <div className='d-flex  mt-2 button'>
          <div className='bg-primary text-light  w-120 text-center pe-1 mt-2 rounded-end pt-2 mb-1 ps-3 me-2' >CITIZEN<sup>&reg;</sup></div>

          <input type='button' onClick={clear} className='text-center text-black-300 rounded border-3 border-secondary bg-danger  ' value="c"></input>
          {/* <input type='button' onClick={clickhandle} className='text-center text-black-300 rounded border-3 border-secondary bg-warning' value="<"></input> */}
          <input type='button' onClick={clickhandle} className='text-center text-black-300 rounded border-3 border-secondary bg-warning w' value="%" ></input>
          <input type='button' onClick={clickhandle} className='text-center text-black-300 rounded border-3 border-secondary bg-warning' value="/"></input>

        </div>
        <div className='d-flex   button '>
          <input type='button' onClick={clickhandle} className='text-center  text-black-300 rounded border-3 border-secondary  ' value="7"></input>
          <input type='button' onClick={clickhandle} className='text-center text-black-300 rounded border-3 border-secondary' value="8"></input>
          <input type='button' onClick={clickhandle} className='text-center text-black-300 rounded border-3 border-secondary' value="9" ></input>
          <input type='button' onClick={clickhandle} className='text-center text-black-300 rounded border-3 border-secondary bg-warning pt-1' value="*"></input>

        </div>
        <div className='d-flex button   '>
          <input type='button' onClick={clickhandle} className='text-center text-black-300 rounded border-3 border-secondary  ' value="4"></input>
          <input type='button' onClick={clickhandle} className='text-center text-black-300 rounded border-3 border-secondary' value="5"></input>
          <input type='button' onClick={clickhandle} className='text-center text-black-300 rounded border-3 border-secondary' value="6" ></input>
          <input type='button' onClick={clickhandle} className='text-center text-black-300 rounded border-3 border-secondary bg-warning' value="-"></input>

        </div>
        <div className='d-flex button   '>
          <input type='button' onClick={clickhandle} className='text-center text-black-300 rounded border-3 border-secondary  ' value="1"></input>
          <input type='button' onClick={clickhandle} className='text-center text-black-300 rounded border-3 border-secondary' value="2"></input>
          <input type='button' onClick={clickhandle} className='text-center text-black-300 rounded border-3 border-secondary' value="3" ></input>
          <input type='button' onClick={clickhandle} className='text-center text-black-300 rounded border-3 border-secondary bg-warning ' value="+"></input>

        </div>
        <div className='d-flex  button  '>
          <input type='button' onClick={clickhandle} className='text-center text-black-300 rounded border-3 border-secondary  ' value="0"></input>
          <input type='button' onClick={clickhandle} className='text-center text-black-300 rounded border-3 border-secondary' value="00"></input>
          <input type='button' onClick={clickhandle} className='text-center text-black-300 rounded border-3 border-secondary' value="." ></input>
          <input type='button' onClick={evaluate}  className='text-center text-black-300 rounded border-3 border-secondary bg-warning ' value="="></input>

        </div>
        
       
        </div>
   

    
      
    
    </div>
  )
}

export default Home
