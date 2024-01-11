import Link from 'next/link'


export default function Logo({url,pageProps}) {


  return (
    <>
        {pageProps.homeLogo.map(el=>(
            <Link href={url} className=" px-10 ">
                <img src={el.secure_url} className='w-28 2xl:w-32' alt="" />
            </Link>
        ))}

    </>
  )
}
