// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const mercadopago = require("mercadopago");
// import logo from "../public/favicon.svg";
mercadopago.configure({
 access_token:"APP_USR-5646705083909579-113014-beda3d96bd5345123e0b000bd5440535-1571377809",
  // access_token:"APP_USR-1458144755191319-042511-bc0b96dc49d504d083e85727d5f8e50a-1360412804",

});

export default function handler(req, res) {


  //number mercado pago 922532392



  
// const data = JSON.stringify(req.body.productos)
// console.log(data);
// console.log(req.body);

// const datasinstring = (data)=>{
//   for (let key in data) {
//     if (Number(data[key])) delete data[key];
//     return data
//   }

// }
// console.log(datasinstring(data))
// console.log(data);
  // const dataProducts = [
  //   {
  //     title: 'test1',
  //     description: 'testdecrption',
  //     picture_url: '../public/favicon.svg',
  //     category_id: 'PEN',
  //     quantity: 2,
  //     unit_price: 20,
  //   },
  //   {
  //     title: 'test2',
  //     description: 'testdecrption2',
  //     picture_url: '../public/favicon.svg',
  //     category_id: 'PEN',
  //     quantity: 2,
  //     unit_price: 20,
  //   },
  // ]

  // const iterator = req.body.productos.values()
  // const datos = (iterator) =>{
  //   for(const value of iterator) {
  //     return value
    
  //   }
  // }
  // console.log(datos(iterator));
//  req.body.forEach(element ,i=> {
//     console.log(element[i])
//   })
console.log(req.body);
  let preference = {
    items:[
     {    title:req.body.productos,
      description:`Nombre: ${req.body.nombre} Apellido: ${req.body.apellido} Documento:${req.body.typedocumento} Distrito: ${req.body.distrito} `,

          // description:`Nombre: ${req.body.nombre} Apellido: ${req.body.apellido} Documento:${req.body.typedocumento} Direccion: ${req.body.direccion} Provincia: ${req.body.provincia} Distrito: ${req.body.distrito} InfoAdicional: ${req.body.adicional}`,
          picture_url: '../public/favicon.svg',
          category_id: 'PEN',
          quantity: 1,
          unit_price:Number(req.body.monto)
        }
    ],
    payer: {
      first_name: req.body.nombre,
      last_name: req.body.apellido,
      email:req.body.apellido.email,
      // phone:   {
      //   area_code: 51,
      //   number: 987654321
      // },
     address: {},
    },
    identification: {
      number: 19119119100,
      type: "DNI"
    },
    shipments: {
      receiver_address: {
        zip_code: "12312-123",
        state_name: "Rio de Janeiro",
        city_name: "Buzios",
        street_name: "Av las Naciones Unidas",
        street_number: 3003
      },
    },
    back_urls: {
  
      success: `https://fritzsport.pe/api/exito?variable1=${req.body.stock}`,
      failure: "fritz-sport.vercel.app",
      pending: "fritz-sport.vercel.app",
    },

    // installments: 1,
    payment_methods: {
      excluded_payment_methods: [
        {
          id: "amex",
        },
      ],
      excluded_payment_types: [
        {
          id: "atm",
        },
      ],
      installments: 1,
    },
    auto_return: "approved",
  };
  mercadopago.preferences
    .create(preference)
    .then(function (response) {

      res.redirect(response.body.init_point);
    })
    .catch(function (error) {
      console.log(error);


    });
}