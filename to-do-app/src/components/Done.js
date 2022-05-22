import React from 'react'
import {MdDoneAll} from "react-icons/md" ;

function Done(e) {
    const clickhHandler= (e)=>{
        // console.log(e )
    }
  return (
    <div>
        <span className='bg-primary border border-2 rounded p-1 ' onClick={clickhHandler(e)}> <MdDoneAll /></span>
    </div>
  )
}

export default Done ;