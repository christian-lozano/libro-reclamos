// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const mercadopago = require("mercadopago");
// import logo from "../public/favicon.svg";
mercadopago.configure({
  access_token:"TEST-1296399990494121-042316-854b0df224a2b28270920e903b67bea9-1358868647",
});

export default function handler(req, res) {
  let preference = {
    items: [
      {
        title: `Reserva de: ${req.body.nombre} ${req.body.apellido} , Documento:${req.body.typedocumento},Sede:${req.body.sede}, Tipo de Transporte: ${req.body.transporte}, Vehiculo tipo: ${req.body.vehiculo}, N° de Placa: ${req.body.placa}`,
        description: `Reserva de: ${req.body.nombre} ${req.body.apellido} con el Documento :${req.body.typedocumento} en la cede: ${req.body.cede} . Tipo de Transporte: ${req.body.transporte}  con el Vehiculo tipo: ${req.body.vehiculo} con la Placa: ${req.body.placa}`,
        picture_url: "../public/favicon.svg",
        category_id: "PEN",
        quantity: 1,
        unit_price: Number(req.body.monto),
      },
    ],
    payer: {
      phone: {
        area_code: "51",
        number: Number(req.body.telefono),
      },
      name: req.body.name,
      surname: req.body.apellido,
    },
    back_urls: {
      success: "http://localhost:3000/",
      failure: "http://localhost:3000/",
      pending: "http://localhost:3000/",
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
      res.redirect(response.body.init_point);
    })
    .catch(function (error) {
      console.log(error);
    });
}