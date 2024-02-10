// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const mercadopago = require("mercadopago");
// import logo from "../public/favicon.svg";
mercadopago.configure({
  access_token:`${process.env.ACCESS_TOKEN_MERCADO}`

});











export default  async function  handler(req, res) {
  
  const { method, body } = req


  let productosCantidad =  body.productos.map(el=>{
  
    let productos = {
      id:el.objectID,
      category_id:el.talla,
      title: el.title,
      description:el.id,
      picture_url: el.img[0],
      quantity: el.quantity,
      unit_price: el.precio
    }

    return productos
  })

  let preference = {
    items:productosCantidad,
    payer: {
      first_name: body.datosComprador.nombre,
      last_name: body.datosComprador.apellido,
      email: body.datosComprador.email,
      phone:   {
        area_code: "51",
        number: 987654321
      },
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
      pending: `${process.env.URL_DOMINIO}/`,
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
    case 'GET':
      console.log(req);

    case 'POST':

    mercadopago.preferences
    .create(preference)
    .then(function (response) {
        // console.log(response.body.sandbox_init_point);
 
        let dataEnvioMongoUser = {
          id_payer: response.body.id,
          id_mercado_pago:"01",
          pedido: true,
          pedido_pagado: false,
          pedido_devuelto: false,
          pedido_por_entregar: false,
          pedido_entregado: false,
          nombres: body.datosComprador.nombre,
          apellidos:body.datosComprador.apellido ,
          email:body.datosComprador.email,
          documento:body.datosComprador.documento,
          cart_total:body.datosComprador.cartTotal,
          telefono:body.datosComprador.telefono,
          area_code:body.datosComprador.distrito,
          productos:productosCantidad
        }

       fetch(`${process.env.URL_DOMINIO}/api/pagoPendiente`,{
          method:"POST",
          body: JSON.stringify(dataEnvioMongoUser),
          headers:{
              "Content-Type":"application/json",
              'Access-Control-Allow-Origin':'*',
              'Access-Control-Allow-Methods':'GET, POST, PUT, DELETE',
              'Access-Control-Allow-Headers':"*"
          }
       }).then(res=> res.json() ).then(resulta=>{
        console.log(resulta);
        res.redirect(`${process.env.URL_DOMINIO}/?clear=true`);
       }).catch((error) => {
        console.log(error)
      });
         res.status(201).json({ msg: response.body.init_point })



    })
    .catch(function (error) {
   
      res.status(401).json({ msg: "Introduzca un Correo Electrónico Valido"})
    
    });

    default:
      // return res.status(201).json({ msg: 'this method not difined' })
  }
}