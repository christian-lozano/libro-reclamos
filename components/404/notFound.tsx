import Link from 'next/link'



export default function NotFound() {
  return (
    <div className="w-full flex justify-center">
      <div className="h-screen  bg-gray-50 flex items-center">
        <div className="container flex flex-col md:flex-row items-center justify-between px-5 text-gray-700">
          <div className="w-full lg:w-1/2 mx-8">
            <div className="text-7xl text-black font-dark font-extrabold mb-8">
              {' '}
              404
            </div>
            <p className="text-2xl md:text-3xl font-light leading-normal mb-8">
              Lo sentimos, no pudimos encontrar la página que estás buscando.
            </p>
        
          </div>
          <div className="w-full lg:flex lg:justify-end lg:w-1/2 mx-5 my-12">
            <img
              src="https://user-images.githubusercontent.com/43953425/166269493-acd08ccb-4df3-4474-95c7-ad1034d3c070.svg"
              className=""
              alt="Page not found"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
