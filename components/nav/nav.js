import BuscadorHome from '../BuscadorHome/BuscadorHome'
import { NavBottom } from './nav-bottom'
import { NavTop } from './nav-top'

/* ---------------------------------*/
/* filtro menu normal a menu original*/
/* ---------------------------------*/

export function Nav({props,activeSearchGlobal}) {
  

  return (
    <nav>
      {/* <NavHome /> */}
      <NavTop props={props} />
      <div className=" absolute 2xl:bg-transparent xl:bg-transparent  bg-white right-0 w-full xl:w-2/5 xl:mt-2 xl:-z-dev">
        <div className="z-[9]">
          <NavBottom  />
          {/* <BuscadorHome activeSearchGlobal={activeSearchGlobal}></BuscadorHome> */}
        </div>
      </div>
    </nav>
  )
}
