// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const mercadopago = require("mercadopago");
// import logo from "../public/favicon.svg";
mercadopago.configure({
  access_token:`${process.env.ACCESS_TOKEN_MERCADO}`

});











export default  async function  handler(req, res) {
  const { method, body } = req
console.log(body);

  let productosCantidad =  body.productos.map(el=>{
    let productos = {
      id:el.objectID,
      category_id:"zapatillas",
      title: `${el.title} código de Producto: ${el.objectID} Talla: ${el.talla}`,
      description:`Nombre de Producto ${el.title} código:${el.objectID}`,
      picture_url: el.img[0],
      category_id: 'PEN',
      quantity: el.quantity,
      unit_price: el.precio,
    }

    return productos
  })

  let preference = {
    items:productosCantidad,
    payer: {
      first_name: body.datosComprador.nombre,
      last_name: body.datosComprador.apellido,
      email: body.datosComprador.email,
      // phone:   {
      //   area_code: 51,
      //   number: 987654321
      // },
     address: {},
    },
    identification: {
      number: body.datosComprador.documento,
      type: "DNI"
    },
    shipments: {
      receiver_address: {
        zip_code: "121212",
        state_name: body.datosComprador.distrito,
        city_name: "Lima",
        street_name:  body.datosComprador.distrito,
        street_number: 3003
      },
    },
    back_urls: {
  
      success: `${process.env.URL_DOMINIO}/api/exito2`,
      failure: `${process.env.URL_DOMINIO}`,
      pending: `${process.env.URL_DOMINIO}`,
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



  switch (method) {

    case 'POST':

    mercadopago.preferences
    .create(preference)
    .then(function (response) {
        // console.log(response.body.sandbox_init_point);

         res.status(201).json({ msg: response.body.init_point })

       

    })
    .catch(function (error) {
   
        console.log(error);

    });

    default:
      // return res.status(201).json({ msg: 'this method not difined' })
  }
}