import React, { useState } from 'react';
import './App.css';
import Input from './Components/Input';
import Logo from './Components/Logo';
import Data from './Components/data';
import { log } from 'console';


function App() {
  let data=[
    {
      dis:"hello jose"
    },
    {
      dis:"hello yousaf"
    },
    {
      dis:"hello Muhammad"
    }
  ];

  const [crntval,setcrntval]=useState(data);

  const onclickhandler=(value:any)=>{
    const newobj = {dis:value}
    let newdata = [...crntval,newobj]
    setcrntval(newdata)
  }


  return (
    <div className="App text-center p-4">
      <Logo></Logo>
      <div className='border border-2 rounded-3 secdiv mx-auto'>
      <Input  onclickhandler={onclickhandler} ></Input>
      <Data  data={crntval}></Data>
      </div>
    </div>
  );
}

export default App;
