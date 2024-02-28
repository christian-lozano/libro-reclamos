
import { memo, useEffect, useState } from 'react'
import Logotipo from '@/components/Logotipo/Logo'
import { Button } from '@ui/button/button'
import { Link } from '@ui/link/link'
import NavUbicanosEmergente from "./nav-ubicanos-carrito"


const dataHeader = {
    header:{
      text:"text-black",
      background:"bg-white",
      hoverMenutextColor:"text-white",
      hoverMenuBackground:"bg-white",
    },

    logoNav:{
      id:"adasd",
      svg:"https://res.cloudinary.com/da868wsih/image/upload/v1707170861/fritz_sport/ecommerce/home/logo/chpb2gzquotjbzkvf8ug.png",
      color:"white",
      url:"/",
      width:"5px",
      height:"20px"
     },

   menuSubmenu : [
    {
      id: 'mujer',
      titulo: 'Mujer',
      url: 'mujer',
 
      infoNav: [
        {
          categoria: [
            {
              id: '1',
              title: 'Ver Todas las Zapatillas',
              url: '/tienda?pwa_ecom_ui_template_products%5BrefinementList%5D%5BGenero%5D%5B0%5D=Mujer&pwa_ecom_ui_template_products%5BrefinementList%5D%5BCategoria%5D%5B0%5D=Zapatillas',
            },
            {
              id: '3',
              title: 'Terrex',
              url: '/tienda?pwa_ecom_ui_template_products%5BrefinementList%5D%5BGenero%5D%5B0%5D=Mujer&pwa_ecom_ui_template_products%5BrefinementList%5D%5BCategoria%5D%5B0%5D=Terrex',
            },
            {
              id: '5',
              title: 'Urbano',
              url: '/tienda?pwa_ecom_ui_template_products%5BrefinementList%5D%5BGenero%5D%5B0%5D=Mujer&pwa_ecom_ui_template_products%5BrefinementList%5D%5BCategoria%5D%5B0%5D=Urbano',
            },
            {
              id: '6',
              title: 'Sandalias',
              url: '/tienda?pwa_ecom_ui_template_products%5BrefinementList%5D%5BGenero%5D%5B0%5D=Mujer&pwa_ecom_ui_template_products%5BrefinementList%5D%5BCategoria%5D%5B0%5D=Sandalias',
            },
            {
              id: '7',
              title: 'Calzado de Plataforma',
              url: '/tienda?pwa_ecom_ui_template_products%5BrefinementList%5D%5BGenero%5D%5B0%5D=Mujer&pwa_ecom_ui_template_products%5BrefinementList%5D%5BCategoria%5D%5B0%5D=Plataforma',
            },
            {
              id: '8',
              title: 'Calzado Comodo',
              url: '/tienda?pwa_ecom_ui_template_products%5BrefinementList%5D%5BGenero%5D%5B0%5D=Mujer&pwa_ecom_ui_template_products%5BrefinementList%5D%5BCategoria%5D%5B0%5D=Comodo',
            },
          ],
        },
        {
          categoria: [
            {
              id: '9',
              title: ' Ropa',
              url: '/tienda?pwa_ecom_ui_template_products%5BrefinementList%5D%5BGenero%5D%5B0%5D=Mujer&pwa_ecom_ui_template_products%5BrefinementList%5D%5BCategoria%5D%5B0%5D=Ropa',
            },
            {
              id: '10',
              title: 'Polos',
              url: '/tienda?pwa_ecom_ui_template_products%5BrefinementList%5D%5BGenero%5D%5B0%5D=Mujer&pwa_ecom_ui_template_products%5BrefinementList%5D%5BCategoria%5D%5B0%5D=Polos',
            },
            {
              id: '12',
              title: 'Casacas',
              url: '/tienda?pwa_ecom_ui_template_products%5BrefinementList%5D%5BGenero%5D%5B0%5D=Mujer&pwa_ecom_ui_template_products%5BrefinementList%5D%5BCategoria%5D%5B0%5D=Casacas',
            },
            {
              id: '12',
              title: 'Poleras',
              url: '/tienda?pwa_ecom_ui_template_products%5BrefinementList%5D%5BGenero%5D%5B0%5D=Mujer&pwa_ecom_ui_template_products%5BrefinementList%5D%5BCategoria%5D%5B0%5D=Polera',
            },
            {
              id: '12',
              title: 'Pantalones',
              url: '/tienda?pwa_ecom_ui_template_products%5BrefinementList%5D%5BGenero%5D%5B0%5D=Mujer&pwa_ecom_ui_template_products%5BrefinementList%5D%5BCategoria%5D%5B0%5D=Pantalones',
            },
            {
              id: '12',
              title: 'Buzos',
              url: '/tienda?pwa_ecom_ui_template_products%5BrefinementList%5D%5BGenero%5D%5B0%5D=Mujer&pwa_ecom_ui_template_products%5BrefinementList%5D%5BCategoria%5D%5B0%5D=Buzo',
            },
          ],
        },
        {
          categoria: [
            {
              id: '13',
              title: 'Accesorios',
              url: '/tienda?pwa_ecom_ui_template_products%5BrefinementList%5D%5BGenero%5D%5B0%5D=Unisex&pwa_ecom_ui_template_products%5BrefinementList%5D%5BCategoria%5D%5B0%5D=Accesorios',
            },
            {
              id: '14',
              title: 'Bolsos',
              url: '/tienda?pwa_ecom_ui_template_products%5BrefinementList%5D%5BGenero%5D%5B0%5D=Unisex&pwa_ecom_ui_template_products%5BrefinementList%5D%5BCategoria%5D%5B0%5D=Bolso',
            },
            {
              id: '15',
              title: 'Mochilas',
              url: '/tienda?pwa_ecom_ui_template_products%5BrefinementList%5D%5BGenero%5D%5B0%5D=Unisex&pwa_ecom_ui_template_products%5BrefinementList%5D%5BCategoria%5D%5B0%5D=Mochilas',
            },
            {
              id: '16',
              title: 'Gorras',
              url: '/tienda?pwa_ecom_ui_template_products%5BrefinementList%5D%5BGenero%5D%5B0%5D=Unisex&pwa_ecom_ui_template_products%5BrefinementList%5D%5BCategoria%5D%5B0%5D=Gorras',
            },
          ],
        },
        {
          titulo: 'Vístete como Jenna ',
          img: '',
        },
      ],
    },
    {
      id: 'Hombre',
      titulo: 'Hombre',
      url: 'hombre',
      infoNav: [
        {
          categoria: [
            {
              id: '1',
              title: 'Ver Todas las Zapatillas',
              url: '/tienda?pwa_ecom_ui_template_products%5BrefinementList%5D%5BGenero%5D%5B0%5D=Hombre&pwa_ecom_ui_template_products%5BrefinementList%5D%5BCategoria%5D%5B0%5D=Zapatillas',
            },
            {
              id: '3',
              title: 'Terrex',
              url: '/tienda?pwa_ecom_ui_template_products%5BrefinementList%5D%5BGenero%5D%5B0%5D=Hombre&pwa_ecom_ui_template_products%5BrefinementList%5D%5BCategoria%5D%5B0%5D=Terrex',
            },
            {
              id: '5',
              title: 'Urbano',
              url: '/tienda?pwa_ecom_ui_template_products%5BrefinementList%5D%5BGenero%5D%5B0%5D=Hombre&pwa_ecom_ui_template_products%5BrefinementList%5D%5BCategoria%5D%5B0%5D=Urbano',
            },
            {
              id: '6',
              title: 'Sandalias',
              url: '/tienda?pwa_ecom_ui_template_products%5BrefinementList%5D%5BGenero%5D%5B0%5D=Hombre&pwa_ecom_ui_template_products%5BrefinementList%5D%5BCategoria%5D%5B0%5D=Sandalias',
            },
            {
              id: '8',
              title: 'Calzado Comodo',
              url: '/tienda?pwa_ecom_ui_template_products%5BrefinementList%5D%5BGenero%5D%5B0%5D=Hombre&pwa_ecom_ui_template_products%5BrefinementList%5D%5BCategoria%5D%5B0%5D=Comodo',
            },
          ],
        },
        {
          categoria: [
            {
              id: '9',
              title: ' Ropa',
              url: '/tienda?pwa_ecom_ui_template_products%5BrefinementList%5D%5BGenero%5D%5B0%5D=Hombre&pwa_ecom_ui_template_products%5BrefinementList%5D%5BCategoria%5D%5B0%5D=Ropa',
            },
            {
              id: '10',
              title: 'Polos',
              url: '/tienda?pwa_ecom_ui_template_products%5BrefinementList%5D%5BGenero%5D%5B0%5D=Hombre&pwa_ecom_ui_template_products%5BrefinementList%5D%5BCategoria%5D%5B0%5D=Polos',
            },
            {
              id: '12',
              title: 'Casacas',
              url: '/tienda?pwa_ecom_ui_template_products%5BrefinementList%5D%5BGenero%5D%5B0%5D=Hombre&pwa_ecom_ui_template_products%5BrefinementList%5D%5BCategoria%5D%5B0%5D=Casacas',
            },
            {
              id: '12',
              title: 'Poleras',
              url: '/tienda?pwa_ecom_ui_template_products%5BrefinementList%5D%5BGenero%5D%5B0%5D=Hombre&pwa_ecom_ui_template_products%5BrefinementList%5D%5BCategoria%5D%5B0%5D=Polera',
            },
            {
              id: '12',
              title: 'Pantalones',
              url: '/tienda?pwa_ecom_ui_template_products%5BrefinementList%5D%5BGenero%5D%5B0%5D=Hombre&pwa_ecom_ui_template_products%5BrefinementList%5D%5BCategoria%5D%5B0%5D=Pantalon',
            },
            {
              id: '12',
              title: 'Buzos',
              url: '/tienda?pwa_ecom_ui_template_products%5BrefinementList%5D%5BGenero%5D%5B0%5D=Hombre&pwa_ecom_ui_template_products%5BrefinementList%5D%5BCategoria%5D%5B0%5D=Buzos',
            },
          ],
        },
        {
          categoria: [
            {
              id: '13',
              title: 'Accesorios',
              url: '/tienda?pwa_ecom_ui_template_products%5BrefinementList%5D%5BGenero%5D%5B0%5D=Unisex&pwa_ecom_ui_template_products%5BrefinementList%5D%5BCategoria%5D%5B0%5D=Accesorios',
            },
            {
              id: '14',
              title: 'Bolsos',
              url: '/tienda?pwa_ecom_ui_template_products%5BrefinementList%5D%5BGenero%5D%5B0%5D=Unisex&pwa_ecom_ui_template_products%5BrefinementList%5D%5BCategoria%5D%5B0%5D=Bolso',
            },
            {
              id: '15',
              title: 'Mochilas',
              url: '/tienda?pwa_ecom_ui_template_products%5BrefinementList%5D%5BGenero%5D%5B0%5D=Unisex&pwa_ecom_ui_template_products%5BrefinementList%5D%5BCategoria%5D%5B0%5D=Mochilas',
            },
            {
              id: '16',
              title: 'Gorras',
              url: '/tienda?pwa_ecom_ui_template_products%5BrefinementList%5D%5BGenero%5D%5B0%5D=Unisex&pwa_ecom_ui_template_products%5BrefinementList%5D%5BCategoria%5D%5B0%5D=Gorras',
            },
          ],
        },
        {
          titulo: 'Vístete como Jenna ',
          img: '',
        },
      ],
    },
  
    {
      id: 'ninos',
      titulo: 'Niños',
      url: 'ninos',
      infoNav: [
        {
          categoria: [
            {
              id: '35',
              title: 'Calzado Niño',
              url: '/tienda?pwa_ecom_ui_template_products%5BrefinementList%5D%5BGenero%5D%5B0%5D=Niños&pwa_ecom_ui_template_products%5BrefinementList%5D%5BCategoria%5D%5B0%5D=Zapatillas&pwa_ecom_ui_template_products%5BrefinementList%5D%5BCategoria%5D%5B1%5D=Niño',
            },
            {
              id: '36',
              title: 'Zapatillas',
              url: '/tienda?pwa_ecom_ui_template_products%5BrefinementList%5D%5BGenero%5D%5B0%5D=Niños&pwa_ecom_ui_template_products%5BrefinementList%5D%5BCategoria%5D%5B0%5D=Zapatillas&pwa_ecom_ui_template_products%5BrefinementList%5D%5BCategoria%5D%5B1%5D=Niño',
            },
            // {
            //   id: '37',
            //   title: 'Chimpunes',
            //   url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=niño',
            // },
            // {
            //   id: '38',
            //   title: 'Calzado Escolar Blanco',
            //   url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=niño',
            // },
            {
              id: "369",
              title: "Sandalias",
   
              url:"/tienda?pwa_ecom_ui_template_products%5BrefinementList%5D%5BGenero%5D%5B0%5D=Niños&pwa_ecom_ui_template_products%5BrefinementList%5D%5BCategoria%5D%5B0%5D=Sandalias"
  
  
            },
          ],
        },
        {
          categoria: [
            // {
            //   id: '39',
            //   title: 'Ropa Niño',
            //   url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=niño',
            // },
            // {
            //   id: '40',
            //   title: 'Polos',
            //   url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=niño',
            // },
            // {
            //   id: '41',
            //   title: 'Casacas',
            //   url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=niño',
            // },
            // {
            //   id: '42',
            //   title: 'Camisetas',
            //   url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=niño',
            // },
            // {
            //   id: '42',
            //   title: 'Poleras',
            //   url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=niño',
            // },
            // {
            //   id: '42',
            //   title: 'Buzos',
            //   url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=niño',
            // },
            // {
            //   id: '42',
            //   title: 'Pantalones',
            //   url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=niño',
            // },
            // {
            //   id: '42',
            //   title: 'Shorts',
            //   url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=niño',
            // },
          ],
        },
        {
          categoria: [
            {
              id: '35',
              title: 'Calzado Niña',
              url: '/tienda?pwa_ecom_ui_template_products%5BrefinementList%5D%5BGenero%5D%5B0%5D=Niños&pwa_ecom_ui_template_products%5BrefinementList%5D%5BCategoria%5D%5B0%5D=Niña&pwa_ecom_ui_template_products%5BrefinementList%5D%5BCategoria%5D%5B1%5D=Zapatillas',
            },
            {
              id: '36',
              title: 'Zapatillas',
              url: '/tienda?pwa_ecom_ui_template_products%5BrefinementList%5D%5BGenero%5D%5B0%5D=Niños&pwa_ecom_ui_template_products%5BrefinementList%5D%5BCategoria%5D%5B0%5D=Niña&pwa_ecom_ui_template_products%5BrefinementList%5D%5BCategoria%5D%5B1%5D=Zapatillas',
            },
            // {
            //   id: '37',
            //   title: 'Chimpunes',
            //   url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=niña',
            // },
            // {
            //   id: '38',
            //   title: 'Calzado Escolar Blanco',
            //   url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=niña',
            // },
            // {
            //   id: '38',
            //   title: 'Sandalias',
            //   url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=niña',
            // },
          ],
        },
        {
          categoria: [
            // {
            //   id: '39',
            //   title: 'Ropa Niña',
            //   url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=niña',
            // },
            // {
            //   id: '40',
            //   title: 'Polos',
            //   url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=niña',
            // },
            // {
            //   id: '41',
            //   title: 'Casacas',
            //   url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=niña',
            // },
            // {
            //   id: '42',
            //   title: 'Camisetas',
            //   url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=niña',
            // },
            // {
            //   id: '42',
            //   title: 'Poleras',
            //   url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=niña',
            // },
            // {
            //   id: '42',
            //   title: 'Buzos',
            //   url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=niña',
            // },
            // {
            //   id: '42',
            //   title: 'Pantalones',
            //   url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=niña',
            // },
            // {
            //   id: '42',
            //   title: 'Shorts',
            //   url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=niña',
            // },
          ],
        },
        // {
        //   categoria: [
        //     {
        //       id: '13',
        //       title: 'Accesorios',
        //       url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=niños',
        //     },
        //     {
        //       id: '14',
        //       title: 'Bolsos',
        //       url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=niños',
        //     },
        //     {
        //       id: '15',
        //       title: 'Mochilas',
        //       url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=niños',
        //     },
        //     {
        //       id: '16',
        //       title: 'Guantes',
        //       url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=niña',
        //     },
        //     {
        //       id: '16',
        //       title: 'Gorras',
        //       url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=niños',
        //     },
        //     {
        //       id: '16',
        //       title: 'Medias',
        //       url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=niños',
        //     },
        //     {
        //       id: '16',
        //       title: 'Tomatodos',
        //       url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=niña',
        //     },
        //   ],
        // },
        {
          titulo: 'Ropa Comoda para ti',
          img: '',
        },
      ],
    },
    {
      id: 'outlet',
      titulo: 'OUTLET',
      url: 'tienda?pwa_ecom_ui_template_products%5BrefinementList%5D%5Bprice.discount_level%5D%5B0%5D=60',
      // infoNav: [
      //   {
      //     categoria: [
      //       {
      //         id: 'qw62346765e123',
      //         title: 'Mujer',
      //         url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=mujer&pwa_ecom_ui_template_products%5Brange%5D%5Bprice.value%5D=%3A200',
      //       },
      //       {
      //         id: 'sa65765123',
      //         title: 'Todo el Calzado',
      //         url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=mujer20%zapatillas&pwa_ecom_ui_template_products%5Brange%5D%5Bprice.value%5D=%3A200',
      //       },
      //       // {
      //       //   id: 'fa123sf213',
      //       //   title: 'Zapatillas',
      //       //   url: '/tienda?pwa_ecom_ui_template_products%5Brange%5D%5Bprice.value%5D=%3A300',
      //       // },
      //       // {
      //       //   id: 'ga2sh',
      //       //   title: 'Chimpunes',
      //       //   url: '/tienda?pwa_ecom_ui_template_products%5Brange%5D%5Bprice.value%5D=%3A300',
      //       // },
      //       // {
      //       //   id: 'ga623423asdsh',
      //       //   title: 'Toda la Ropa',
      //       //   url: '/tienda?pwa_ecom_ui_template_products%5Brange%5D%5Bprice.value%5D=%3A300',
      //       // },
      //       // {
      //       //   id: 'ga231asdsh',
      //       //   title: 'Polos',
      //       //   url: '/tienda?pwa_ecom_ui_template_products%5Brange%5D%5Bprice.value%5D=%3A300',
      //       // },
      //       // {
      //       //   id: 'g123123ad54asda123sdsh',
      //       //   title: 'Casacas',
      //       //   url: '/tienda?pwa_ecom_ui_template_products%5Brange%5D%5Bprice.value%5D=%3A300',
      //       // },
      //       // {
      //       //   id: 'gaa354sdsh',
      //       //   title: 'Poleras',
      //       //   url: '/tienda?pwa_ecom_ui_template_products%5Brange%5D%5Bprice.value%5D=%3A300',
      //       // },
      //       // {
      //       //   id: 'gaas122343dassh',
      //       //   title: 'Pantalones',
      //       //   url: '/tienda?pwa_ecom_ui_template_products%5Brange%5D%5Bprice.value%5D=%3A300',
      //       // },
      //     ],
      //   },
      //   {
      //     categoria: [
      //       {
      //         id: 'qw62346765e123',
      //         title: 'Hombre',
      //         url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=hombre&pwa_ecom_ui_template_products%5Brange%5D%5Bprice.value%5D=%3A200',
      //       },
      //       {
      //         id: 'sa65765123',
      //         title: 'Todo el Calzado',
      //         url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=hombre20%zapatillas&pwa_ecom_ui_template_products%5Brange%5D%5Bprice.value%5D=%3A200',
      //       },
      //       // {
      //       //   id: 'fa123sf213',
      //       //   title: 'Zapatillas',
      //       //   url: '/tienda?pwa_ecom_ui_template_products%5Brange%5D%5Bprice.value%5D=%3A300',
      //       // },
      //       // {
      //       //   id: 'ga2sh',
      //       //   title: 'Chimpunes',
      //       //   url: '/tienda?pwa_ecom_ui_template_products%5Brange%5D%5Bprice.value%5D=%3A300',
      //       // },
      //       // {
      //       //   id: 'ga623423asdsh',
      //       //   title: 'Toda la Ropa',
      //       //   url: '/tienda?pwa_ecom_ui_template_products%5Brange%5D%5Bprice.value%5D=%3A300',
      //       // },
      //       // {
      //       //   id: 'ga231asdsh',
      //       //   title: 'Polos',
      //       //   url: '/tienda?pwa_ecom_ui_template_products%5Brange%5D%5Bprice.value%5D=%3A300',
      //       // },
      //       // {
      //       //   id: 'g123123ad54asda123sdsh',
      //       //   title: 'Casacas',
      //       //   url: '/tienda?pwa_ecom_ui_template_products%5Brange%5D%5Bprice.value%5D=%3A300',
      //       // },
      //       // {
      //       //   id: 'gaa354sdsh',
      //       //   title: 'Poleras',
      //       //   url: '/tienda?pwa_ecom_ui_template_products%5Brange%5D%5Bprice.value%5D=%3A300',
      //       // },
      //       // {
      //       //   id: 'gaas122343dassh',
      //       //   title: 'Pantalones',
      //       //   url: '/tienda?pwa_ecom_ui_template_products%5Brange%5D%5Bprice.value%5D=%3A300',
      //       // },
      //     ],
      //   },
      //   {
      //     categoria: [
      //       {
      //         id: 'qw62346765e123',
      //         title: 'Niños',
      //         url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=niños',
      //       },
      //       {
      //         id: 'sa65765123',
      //         title: 'Todo el Calzado',
      //         url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=niños%20zapatillas',
      //       },
      //       // {
      //       //   id: 'fa123sf213',
      //       //   title: 'Zapatillas',
      //       //   url: '/tienda?pwa_ecom_ui_template_products%5Brange%5D%5Bprice.value%5D=%3A300',
      //       // },
      //       // {
      //       //   id: 'ga2sh',
      //       //   title: 'Chimpunes',
      //       //   url: '/tienda?pwa_ecom_ui_template_products%5Brange%5D%5Bprice.value%5D=%3A300',
      //       // },
      //       // {
      //       //   id: 'ga623423asdsh',
      //       //   title: 'Toda la Ropa',
      //       //   url: '/tienda?pwa_ecom_ui_template_products%5Brange%5D%5Bprice.value%5D=%3A300',
      //       // },
      //       // {
      //       //   id: 'ga231asdsh',
      //       //   title: 'Polos',
      //       //   url: '/tienda?pwa_ecom_ui_template_products%5Brange%5D%5Bprice.value%5D=%3A300',
      //       // },
      //       // {
      //       //   id: 'g123123ad54asda123sdsh',
      //       //   title: 'Casacas',
      //       //   url: '/tienda?pwa_ecom_ui_template_products%5Brange%5D%5Bprice.value%5D=%3A300',
      //       // },
      //       // {
      //       //   id: 'gaa354sdsh',
      //       //   title: 'Poleras',
      //       //   url: '/tienda?pwa_ecom_ui_template_products%5Brange%5D%5Bprice.value%5D=%3A300',
      //       // },
      //       // {
      //       //   id: 'gaas122343dassh',
      //       //   title: 'Pantalones',
      //       //   url: '/tienda?pwa_ecom_ui_template_products%5Brange%5D%5Bprice.value%5D=%3A300',
      //       // },
      //     ],
      //   },
      //   {
      //     titulo: '',
      //     img: '',
      //   },
      // ],
    },
    {
      id: 'tienda',
      titulo: 'Tienda',
      url: '/tienda',
    },
    {
      id: 'outlet',
      titulo: 'outlet',
      url: '/outlet',
    },
    {
      id: 'Ntiendas',
      titulo: 'Nuestras Tiendas',
      url: '/nuestrastiendas',
    },
  
  ]

}


export const NavTop = memo(function NavTop({props}) {



  const [activeHoverNavDesktop, setActiveHoverNavDesktop] = useState()

  // desktop nav
  const [hoverMenu, setHoverMenu] = useState(dataHeader.menuSubmenu[0].infoNav)
  const [andler, setAndler] = useState(false)
  useEffect(() => {
    if (!andler) {
      setActiveHoverNavDesktop(undefined)
    }
  }, [andler])

  
  const handleHover = (index) => {
    setActiveHoverNavDesktop(index)

    setAndler(true)
    setHoverMenu(dataHeader.menuSubmenu[index].infoNav)
  }



  if(!props.homeNav) return <div>Cargando..</div>

  return (
    <div className='bg-blue-white'>
      {/* /*---------------------------------*/
      /* Desktop menu and Hover*/
      /* ---------------------------------*/}
      <div className="hidden xl:block">
        <nav>
          <div>
            <div>
              <div>
                <div className="flex justify-around items-center ">
                  {/* logo nav */}
                  <div className="flex  items-center xl:justify-around 2xl:justify-between ">
                  <Logotipo logo={props.homeLogo} url={"/"}/>
                  </div>
                    <div className=" lg:block h-[5rem] ">
                      <div className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:px-1 grid grid-flow-col gap-x-10 h-full ">
                        {props.homeNav.map((el, index) => (
                          <Link
                            href={`/${el.url}`}
                            className="h-full  flex justify-center items-center "
                            key={el._id}
                            onClick={() => setAndler(false)}
                            onMouseEnter={() => handleHover(index)}
                            onMouseLeave={() => setAndler(false)}
                          >
                            <div className=" inline-flex items-center  justify-between  px-2  transition-all duration-500 rounded-md focus:outline-none focus:text-brand-900 sm:focus:shadow-outline">
                              <span
                                className={`flex-shrink-0 uppercase  text-black xl:text-sm laptop:text-lg ${index === 6 && el.page === "OUTLET" && "text-red-500 border-b-2 border-red-500"} ${el.page === "TIENDA" && " font-extrabold "} ${
                                  activeHoverNavDesktop === index && index < 6 &&
                                  `border-b-2 border-black `
                                }  2xl:text-base `}
                              >
                                {el.page}
                              </span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
  
                    <NavUbicanosEmergente/>

    

    
                </div>
              </div>

              {/* ---------------------------------*/
              /* Container Hover Desktop*/
              /* ---------------------------------*/}
              <Button
                id="navMenuDesktop"
                className={`absolute ${
                  andler ? 'flex' : 'hidden'
                }  flex-col  w-[100%]  border-t-2 dark:bg-[var(--dark-mode)] bg-white  xl:top-[64px]  2xl:top-[80px] justify-center items-center  z-50 `}
                onMouseEnter={() => setAndler(true)}
                onMouseLeave={() => setAndler(false)}
              >
                <div className="w-full grid grid-flow-col   container">
                  {hoverMenu &&
                    hoverMenu.map((menulist, index) => (
                      <div key={index} className="p-5 ">
                        <ul>
                          {menulist.img && (
                            <li>
                              <div className=" w-auto ">
                                <img
                                  src={menulist.img}
                                  alt=""
                                  className="max-h-[400px]"
                                />
                              </div>
                            </li>
                          )}
                        </ul>
                        {menulist.categoria && (
                          <ul className="grid grid-cols-1 gap-y-3 justify-items-start mt-2">
                            {menulist.categoria.map((el, i) => (
                              <li key={i}>
                                <Link
                                  href={el.url}
                                  className={` xl:text-[0.90rem] border-b-[1px] border-transparent hover:border-b-[1px]  hover:border-black transition ease-out `}
                                >
                                  <span
                                    className={`${
                                      i === 0 && 'font-bold text-base'
                                    }  text-black`}
                                  >
                                    {el.title}
                                  </span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                </div>
        
              </Button>
            </div>
          </div>
        </nav>
      </div>
      {/* /*---------------------------------*/
      /* mobile menu*/
      /* ---------------------------------*/}
      <div className="xl:hidden flex flex-col px-4 py-2 border-b border-neutral-light laptop:mx-20 laptop:px-0 laptop:pt-8 laptop:pb-0 laptop:mb-5">
        <div className="flex justify-between w-full gap-3 laptop:mb-8">
    

          <div className="flex justify-between  items-center w-full xl:hidden">
       
            <Logotipo logo={props.homeLogo} url={"/"}/>
            <NavUbicanosEmergente/>

           
          </div>
        </div>
      </div>


    </div>
  )
})
