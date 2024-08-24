import React, { useEffect, useState } from 'react'

function Time() {
    let [holdall,setholdall] = useState(new Date())

    useEffect(()=>{
        setInterval(() => {
            setholdall(new Date())
        }, 1000);
    },[])
    
  return (
    <div className='bg-black h-[100vh] flex items-center  justify-center'>
        <h1 className='text-center text-5xl font-bold text-yellow-200 '>
            {holdall.getHours()} : {holdall.getMinutes()} : {holdall.getSeconds()} {holdall.getHours() < 12 ?'Am' : "Pm"}
        </h1>
    </div>
  )
}

export default Time