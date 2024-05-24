import React, { useState } from 'react';
import style from './input.module.css'

export default function Input(props:{  onclickhandler:any}) {
   const{onclickhandler}=props;

   const [crntval,setcrntval]=useState();

   const changeval =(e:any)=>{
    let newinptval = e.target.value;
    setcrntval(newinptval);
  }

  return (
    <div className={`${style.inpt} mt-5 mb-5 mx-auto`}>
        <input type="text" className='p-2 rounded-5' onChange={changeval} />
        <button className='ms-4 p-2 px-3 border-0 rounded-5' onClick={()=>onclickhandler(crntval)}>Add</button>
    </div>
  )
}
