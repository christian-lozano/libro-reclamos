import React, { useEffect } from 'react'



let data = []
export default function index() {
    useEffect(() => {
        var $_GET = {};
        if(document.location.toString().indexOf('?') !== -1) {
            var query = document.location
                           .toString()
                           // get the query string
                           .replace(/^.*?\?/, '')
                           // and remove any existing hash string (thanks, @vrijdenker)
                           .replace(/#.*$/, '')
                           .split('&');
        
            for(var i=0, l=query.length; i<l; i++) {
               var aux = decodeURIComponent(query[i]).split('=');
               $_GET[aux[0]] = aux[1];
            }
        }
        //get the 'index' query parameter
        data = $_GET['variable1'];
        // let leto = JSON.stringify(data); 

let arr = []
arr.push(data)
        console.log(arr);
    }, [])
  return (
    <div>index</div>
  )
}
