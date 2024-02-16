import classNames from 'classnames'
import 'react-photo-view/dist/react-photo-view.css'
import { useState } from 'react'
import { PhotoProvider, PhotoView } from 'react-photo-view'

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
    <>
      <PhotoProvider>
        <PhotoView src={mainImg}>
          <img
            className="rounded-md w-full hover:translate-y-1 delay-100 ease-in-out xl:hidden block"
            src={mainImg}
            // alt={alt}
          />
        </PhotoView>
      </PhotoProvider>

      <div
        className={classNames(
          'w-full cursor-pointer flex  justify-center mb-3',
          className
        )}
      >
        <div className="flex flex-col items-center  w-full">
          <div className="hidden xl:block">
            <PhotoProvider>
              <PhotoView src={mainImg}>
                <img src={mainImg} className="w-full" alt="" />
              </PhotoView>
            </PhotoProvider>
          </div>
          <div className="flex justify-start items-start  dark:bg-[var(--dark-mode)] py-1 bg-white">
            <div className="grid grid-flow-col gap-x-2 p-1">
              {src.map((el, i) => (
                // eslint-disable-next-line jsx-a11y/no-static-element-interactions
                <div
                  className="z-50 w-auto"
                  key={i}
                  onClick={() => setMainImg(src[i])}
                >
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
    </>
  )
}
