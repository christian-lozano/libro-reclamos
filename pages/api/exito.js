import algoliasearch from 'algoliasearch';

export default function handler(req, res) {

    // Default version (all methods)


// Search-only version
// import algoliasearch from 'algoliasearch/lite';






let array = req.query.variable1;
// let valor = array.replace(/-/g, "");
// console.log(valor);
console.log(array);


// let test2 = test.replace(/^\{|\}$/g,'').split(',');

function malformedJSON2Array (tar) {
    var arr = [];
    tar = tar.replace(/^\{|\}$/g,'').split(',');
    for(var i=0,cur,pair;cur=tar[i];i++){
        arr[i] = {};
        pair = cur.split(':');
        arr[i][pair[0]] = /^\d*$/.test(pair[1]) ? +pair[1] : pair[1];
    }
    return arr;
}
  

let arregloSeparado = malformedJSON2Array(array)
// console.log(arregloSeparado);
// console.log(arregloSeparado);
let arrayData =[]
arregloSeparado.map(el=>{
    let indiceStrock = el.objectID.indexOf(" ");
    let extraida = el.objectID.substring(indiceStrock); 
    let extraida2 = extraida.substring(1); 




    let indiceId = el.objectID.indexOf("_");
    let extraidaObjetId = el.objectID.substring(0,indiceId); 


arrayData.push({objectID:extraidaObjetId,units_in_stock:Number(extraida2)});

})

console.log(arrayData);

const client = algoliasearch('E142ZWDVM4', 'cef8bca32bcdcb1a169b2ec00e1f8429');
const index = client.initIndex('pwa_ecom_ui_template_products');
    // const objects = [];
      
    //   objects.push({
    //     units_in_stock: 50,
    //     objectID: 'IB7432'
    //   })



      index.partialUpdateObjects(arrayData).then(({ objectIDs }) => {
        console.log(objectIDs);
        res.redirect("https://fritz-sport.vercel.app/?clear=true" || process.env.URL_DOMINIO);
      });


// let indice = test.indexOf("+");
// let extraida = test.substring(indice);
// console.log("Extraída: ", extraida);
// let test1 = [ ]
// for (let index = 0; index < arregloSeparado.length; index++) {
//     const element = arregloSeparado[index];
//     test1 = [ ...element , "" ];
//     return test1
// }
// const myStr = "{a:1, b:2, c:3}";
// const myObj = string_exp(myStr);
// console.log("dot: " + myObj.c);

// function string_exp(sCmd) {
//     return Function(`'use strict'; return (${sCmd})`)();
// }
// console.log(test1);
// console.log(string_exp(test));
// const obj2 = [
//     { objectID: '3495560001_41' },
//     { units_in_stock: 19 },
//     { objectID: '3495560001_37' },
//     { units_in_stock: 19 }
//   ]
//   let myArray = obj2.map((str, index) => ({ objectID: str.objectID, units_in_stock: str.objectID }));
// let dat =   obj2.filter(el=> el.objectID ? el.units_in_stock : undefined)


// console.log(dat);
// console.log(myArray);

// // console.log(dat2);




// var target /* arr1 */ = [{objectID: "lang", units_in_stock: 5},{objectID: "lang", units_in_stock: 5}];
// var source /* arr2 */ = [{name : "childs", value: '5'}, {name: "lang", value: "German"}];
// const mergeByProperty = (target, source, prop) => {
//     source.forEach(sourceElement => {
//       let targetElement = target.find(targetElement => {
//         return sourceElement[prop] === targetElement[prop];
//       })
//       targetElement ? Object.assign(targetElement, sourceElement) : target.push(sourceElement);
//     })
//   }


  
//   mergeByProperty(target, arregloSeparado, 'objectID');
  
//   console.log(target)





  
// var coche = JSON.parse(test);
// console.log(coche);
// let array2 = array.split(" ");
// console.log(JSON.stringify(test));

// console.log(Array[array2]);
    }