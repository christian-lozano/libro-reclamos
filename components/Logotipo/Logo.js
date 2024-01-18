import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function Logo({logo,url}) {
    // const [logo, setLogo] = useState([])
    // async function fetchLogo() {
    //     const request = await fetch("/api/home/logo")
    //     const data = await request.json()
    //     setLogo(data)
    // }
  
    // useEffect(() => {
    //     fetchLogo()
    // }, [])
    // console.log(logo);
  return (
    <>
        {logo.map(el=>(
            <Link href={url} className=" px-10 ">
                <img src={el.secure_url} className='w-32' alt="" />
            </Link>
        ))}

    </>
  )
}
