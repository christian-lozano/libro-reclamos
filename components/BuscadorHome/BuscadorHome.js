import algoliasearch from 'algoliasearch'
import React, { useState } from 'react'
export default function BuscadorHome({activeSearchGlobal = true}) {

  const [search, setSearch] = useState("")
  const [dataSearch , setDataSearch  ] = useState([])
  
  
  
  
  const HandleChangeSearch = (e) => {
   const client = algoliasearch('235XIUIEK1', 'c502207ec53e080f5223f93210e9f2be')  
   const index = client.initIndex('pwa_ecom_ui_template_products')
  setSearch(e.target.value)
  index.search(e.target.value, {
    // attributesToRetrieve: ['name', 'sku'],
    page: 1,
    hitsPerPage: 10
  }).then(({ hits }) => {
    setDataSearch(hits);
  });
 }

  return (

    <>
    
     {

      activeSearchGlobal && (
                <div className='absolute xl:top-0 top-16  z-[999] laptop:w-[40vw]  2xl:w-[40vw] 2xl:right-2 w-full px-5'>
              


              <form onSubmit={(e)=>e.preventDefault()}>   
                <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
                <div class="relative">
                    <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <input onPaste={HandleChangeSearch} value={search} onChange={HandleChangeSearch} type="search" id="default-search" className=" block p-2 pl-10  laptop:pl-10 2xl:p-2 laptop:p-4 2xl:pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-black focus:ring-black border: outline-none focus:border-black dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-black" placeholder="Buscar Producto, Zapatillas..." required/>
                    {/* <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button> */}
                </div>
            </form>

              <div className={`px-5  2xl:h-[60vh] w-full ${dataSearch.length > 1 &&  search.length > 1 && "bg-white overflow-y-scroll"}`}>
              {dataSearch.length > 1 &&  search.length > 1  && 
            
                dataSearch.map((el,i)=>(
                  <a key={el.sku}  href={`/product/${el.objectID}?queryID=${el.queryID}`} className='bg-white'>
                          <div
                          id={el.sku}
                            className="flex flex-col py-6 sm:flex-row sm:justify-between items-center bg-white "
                          >
                            <div className="flex w-full space-x-2 sm:space-x-4 items-center">
                              <img
                                className="flex-shrink-0 object-cover w-24 h-24 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500"
                                src={el.image_urls[0]}
                                alt="Polaroid camera"
                              />
                              <div className="flex justify-center items-center w-full h-full">
                                <div className="flex flex-col justify-between w-full">
                                  <div className="flex justify-between w-full pb-2 space-x-2">
                                    <div className="space-y-1 flex items-end">
                                      <h2 className="xl:text-lg text-xs sm:text-xs font-bold  sm:pr-8">
                                        {el.name}
                                      </h2>
                                    </div>
                                    <div className="text-right">
                                      <p className="xl:text-lg text-base sm:text-xs font-semibold">
                                        S/{el.price.value}
                                      </p>
                                      <p className="text-base sm:text-xs line-through dark:text-gray-600">
                                      S/{el.price.value + 200}
                                      </p>
                                    </div>
                                  </div>
                                  <p className="text-xs sm:text-xs mb-2  dark:text-gray-600">
                                    {/* Talla: {el.talla} */}
                                  </p>
                                  <div className="text-xs flex justify-between items-start sm:text-xs mb-2  dark:text-gray-600">
                                    {/* Cantidad: {el.quantity} */}
                                    <div className="flex text-sm divide-x">
                                      <div className=" flex justify-end w-full items-center">
                                        {/* <Button
                                          className="px-2 py-1 pl-0 space-x-1 cursor-pointer"
                                          onClick={() => handlerRemoveItem(el.id)}
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 512"
                                            className="w-4 h-4 fill-current ml-3"
                                          >
                                            <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                                            <rect
                                              width="32"
                                              height="200"
                                              x="168"
                                              y="216"
                                            ></rect>
                                            <rect
                                              width="32"
                                              height="200"
                                              x="240"
                                              y="216"
                                            ></rect>
                                            <rect
                                              width="32"
                                              height="200"
                                              x="312"
                                              y="216"
                                            ></rect>
                                            <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                                          </svg>
                                        </Button> */}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          </a>
                ))
        
              }
              </div>

                 </div>
              )

      
      }

          

    </>
  )
}
