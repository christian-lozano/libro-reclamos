import React, { useCallback, useEffect, useState } from "react";


export default function BackToTopButton() {
  const [showBtn, setShowBtn] = useState("myBtn ");
  

  // When the user scrolls down 20px from the top of the document, show the button
  useEffect(() => {
    window.onscroll = function () {
        scrollFunction();
      };
  }, [])
  
  const [altoScroll, setAltoScroll] = useState(0)

  const handleNavigation = useCallback(
    () => setAltoScroll(window.scrollY),

    [altoScroll]
  )

  useEffect(() => {
    window.addEventListener('scroll', handleNavigation)

    return () => {
      window.removeEventListener('scroll', handleNavigation)
    }
  }, [handleNavigation])

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      setShowBtn("myBtn");
    } else {
      setShowBtn("none");
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (

      <button
        onClick={topFunction}
        id="myBtn"
        className={`${showBtn}  ${altoScroll < 200 && "hidden"} bg-black xl:h-[46px] xl:w-[46px]  h-[46px] w-[46px] rounded-sm  flex justify-center items-center    stroke-white  fixed bottom-10 xl:left-96 left-10  z-[999]`}
        title="Go to top"
      >
<svg
        width={34}
        height={34}
        viewBox="0 0 24 24"
        fill="none"
        // stroke="#ffffff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>


      </button>


  );
}
