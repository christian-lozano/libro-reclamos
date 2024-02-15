import React, { useEffect } from 'react'
import { PhotoProvider, PhotoView } from 'react-photo-view'

export default function ProductZoomImgDetail({mainimg}) {
    
    function hoverFunction(mainimg) {
        document.querySelector('#img-zoomer-box').addEventListener(
            'mousemove',
            function (e) {
              const original = document.querySelector('#img-1')
              const magnified = document.querySelector('#img-2')
              const style = magnified.style
              const x = e.pageX - this.offsetLeft
              const y = e.pageY - this.offsetTop
              const imgWidth = original.offsetWidth
              const imgHeight = original.offsetHeight
              let xperc = (x / imgWidth) * 100
              let yperc = (y / imgHeight) * 100
              magnified.style.backgroundImage = `url('${mainimg}')`
              // lets user scroll past right edge of image
              if (x > 0.01 * imgWidth) {
                xperc += 0.15 * xperc
              }
      
              // lets user scroll past bottom edge of image
              if (y >= 0.01 * imgHeight) {
                yperc += 0.15 * yperc
              }
      
              style.backgroundPositionX = `${xperc - 9}%`
              style.backgroundPositionY = `${yperc - 9}%`
      
              style.left = `${x - 180}px`
              style.top = `${y - 180}px`
            },
            false
          )
    } 

    useEffect(() => {
        hoverFunction(mainimg)
      }, [mainimg])
  return (
    <div>
 
    {/* <img src={mainimg} id="img-1" alt="" /> */}
    {/* <div id="img-2" className='laptop:block hidden'></div> */}
  </div>
  )
}
