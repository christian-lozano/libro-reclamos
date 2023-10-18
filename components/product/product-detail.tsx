import classNames from 'classnames'
import { useState } from 'react'

export type ProductImageProps = {
  src: string[]
  alt?: string
  className?: string
}

export function ProductDetails({
  src,
  alt = '',
  className,
}: ProductImageProps) {
  const [mainImg, setMainImg] = useState(src[0])

  // const [loaded, setLoaded] = useState(false)
  // const isMounted = useIsMounted()

  // const handleLoadingComplete = useCallback(
  //   () => (isMounted() ? setLoaded(true) : null),
  //   [isMounted]
  // )

  return (
    <div
      className={classNames(
        'w-full cursor-pointer flex  justify-end mb-3',
        className
      )}
    >
      <div className="flex flex-col justify-end w-full h-2/4">
        <img
          src={mainImg}
          alt=""
          className={classNames('rounded-t-xl w-3/3')}
        />
        <div className="flex justify-start items-start  dark:bg-[var(--dark-mode)] py-1 bg-white">
          <div className="grid grid-flow-col gap-x-2 p-1">
            {src.map((el, i) => (
              // eslint-disable-next-line jsx-a11y/no-static-element-interactions
              <div key={i} onMouseEnter={() => setMainImg(src[i])}>
                <img
                  className={classNames(
                    'rounded-md w-[4rem] hover:translate-y-1 delay-100 ease-in-out'
                  )}
                  src={el}
                  alt={alt}
                />
              </div>
            ))}
          </div>
        </div>{' '}
      </div>
    </div>
  )
}
