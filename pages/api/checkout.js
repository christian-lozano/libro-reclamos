// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const mercadopago = require("mercadopago");
// import logo from "../public/favicon.svg";
mercadopago.configure({
  access_token:"APP_USR-1458144755191319-042511-bc0b96dc49d504d083e85727d5f8e50a-1360412804",
});

export default function handler(req, res) {
const data = JSON.stringify(req.body.productos)
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
  const dataProducts = [
    {
      title: 'test1',
      description: 'testdecrption',
      picture_url: '../public/favicon.svg',
      category_id: 'PEN',
      quantity: 2,
      unit_price: 20,
    },
    {
      title: 'test2',
      description: 'testdecrption2',
      picture_url: '../public/favicon.svg',
      category_id: 'PEN',
      quantity: 2,
      unit_price: 20,
    },
  ]

  const iterator = req.body.values()
  const datos = (iterator) =>{
    for(const value of iterator) {
      return value
    
    }
  }
//  req.body.forEach(element ,i=> {
//     console.log(element[i])
//   })
// console.log(dataProducts);
  let preference = {
    items:[
      datos(iterator)
    ],
    payer: {
      phone: {
        area_code: "51",
        // number: Number(req.body.telefono),
      },
      name: req.body.name,
      surname: req.body.apellido,
    },
    back_urls: {
      success: "fritz-sport.vercel.app",
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
  };
  mercadopago.preferences
    .create(preference)
    .then(function (response) {
      console.log(response);
      res.redirect(response.body.init_point);
    })
    .catch(function (error) {
      console.log(error.url);
      console.log(error.post);

    });
}