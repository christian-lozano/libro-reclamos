import classNames from 'classnames'

export type ProductImageProps = {
  src: string
  alt?: string
  className?: string
}

export function ProductImage({ src, alt = '', className }: ProductImageProps) {
  // const [loaded, setLoaded] = useState(false)
  // const isMounted = useIsMounted()

  // const handleLoadingComplete = useCallback(
  //   () => (isMounted() ? setLoaded(true) : null),
  //   [isMounted]
  // )

  return (
    // <div className={classNames('bg-neutral-lightest', className)}>
    //   <img
    //     src={src}
    //     alt={alt}
    //     layout="responsive"
    //     className={classNames(
    //       'transition-all duration-2000 ease-out-expo can-hover:group-hover:scale-110'
    //       {
    //         '!opacity-0': !loaded,
    //       }
    //     )}
    //     onLoadingComplete={handleLoadingComplete}
    //   />
    // </div>

    // <div className={classNames('bg-neutral-lightest', className)}>

    // deskt

    // <div className="w-full cursor-pointer flex  justify-end mb-3">
    //   <div className="flex flex-col justify-end w-full    h-2/4 ">
    //     <img src={mainImg} alt="" className="rounded-t-xl w-3/3" />
    //     <div className="flex justify-end items-start  dark:bg-[var(--dark-mode)] py-1 bg-white ">
    //       <div className="grid grid-flow-row   gap-x-2  p-1">
    //         {src.map((el, i) => (
    //           <div key={i}>
    //             <img
    //               className="rounded-md w-[4rem] hover:translate-y-1 delay-100 ease-in-out"
    //               src={el}
    //               alt=""
    //               onMouseEnter={() => setMainImg(src[i])}
    //             />
    //           </div>
    //         ))}
    //       </div>
    //     </div>{' '}
    //   </div>
    // </div>

    <div className={classNames('bg-neutral-lightest', className)}>
      <img
        src={src}
        alt={alt}
        // layout="responsive"
        className={classNames(
          'transition-all duration-2000 ease-out-expo can-hover:group-hover:scale-110'
          // {
          //   '!opacity-0': !loaded,
          // }
        )}
        // onLoadingComplete={handleLoadingComplete}
      />
    </div>
  )
}
