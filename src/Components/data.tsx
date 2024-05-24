import React from 'react';
import style from './data.module.css';

export default function Data(props:
    {
        data:any;
    }
) {
    const {data}=props;
  return (
    <div>
        {data.map((val:any,i:number)=>{
            return(
                <div key={i} className={`${style.listdiv} text-white mt-4`}>
                    <ul>
                        <li>
                            {val.dis}
                        </li>
                    </ul>
                </div>
            )
        })}
    </div>
  )
}
