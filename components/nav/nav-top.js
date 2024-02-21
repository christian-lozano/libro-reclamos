// import FavoriteIcon from '@material-design-icons/svg/outlined/favorite_border.svg'
// import HeadsetMicIcon from '@material-design-icons/svg/outlined/headset_mic.svg'
// import PersonIcon from '@material-design-icons/svg/outlined/person.svg'
import PinDropIcon from '@material-design-icons/svg/outlined/pin_drop.svg'
import ShoppingBagIcon from '@material-design-icons/svg/outlined/shopping_bag.svg'
import {
  Dialog,
  DialogBody,
  Drawer,
  IconButton,
} from '@material-tailwind/react'
import dynamic from 'next/dynamic'
import { memo, useEffect, useState } from 'react'
import { Configure } from 'react-instantsearch-core'
import { useCart } from 'react-use-cart'

import Logotipo from '@/components/Logotipo/Logo'

import { SearchPageLayout } from '@/layouts/search-page-layout'
import { Tablet, Laptop } from '@/lib/media'
import { Button } from '@ui/button/button'
import { IconLabel } from '@ui/icon-label/icon-label'
import { Link } from '@ui/link/link'

import { ProductCardHitShowcase } from '../product-card/product-card-hit'
import { ProductsShowcase } from '../products-showcase/products-showcase'
import { useRouter } from 'next/router'



// const dataHeader = [
//   {
//     id: 'mujer',
//     titulo: 'Mujer',
//     url: 'mujer',
//     infoNav: [
//       {
//         categoria: [
//           {
//             id: '1',
//             title: 'Ver Todas las Zapatillas',
//             url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=mujer',
//           },
//           {
//             id: '2',
//             title: 'Running',
//             url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=mujer',
//           },
//           {
//             id: '3',
//             title: 'Terrex',
//             url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=mujer',
//           },
//           {
//             id: '4',
//             title: 'Chimpunes',
//             url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=mujer',
//           },
//           {
//             id: '5',
//             title: 'Básquet',
//             url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=mujer',
//           },
//           {
//             id: '6',
//             title: 'Sandalias',
//             url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=mujer',
//           },
//           {
//             id: '7',
//             title: 'Calzado de Plataforma',
//             url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=mujer',
//           },
//           {
//             id: '8',
//             title: 'Calzado Comodo',
//             url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=mujer',
//           },
//         ],
//       },
//       {
//         categoria: [
//           {
//             id: '9',
//             title: ' Ropa',
//             url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=mujer',
//           },
//           {
//             id: '10',
//             title: 'Polos',
//             url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=mujer',
//           },
//           {
//             id: '11',
//             title: 'Licras',
//             url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=mujer',
//           },
//           {
//             id: '12',
//             title: 'Casacas',
//             url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=mujer',
//           },
//           {
//             id: '12',
//             title: 'Poleras',
//             url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=mujer',
//           },
//           {
//             id: '12',
//             title: 'Pantalones',
//             url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=mujer',
//           },
//           {
//             id: '12',
//             title: 'Camisetas de Futbol',
//             url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=mujer',
//           },
//           {
//             id: '12',
//             title: 'Shorts',
//             url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=mujer',
//           },
//           {
//             id: '12',
//             title: 'Buzos',
//             url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=mujer',
//           },
//         ],
//       },
//       {
//         categoria: [
//           {
//             id: '13',
//             title: 'Accesorios',
//             url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=mujer',
//           },
//           {
//             id: '14',
//             title: 'Bolsos',
//             url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=mujer',
//           },
//           {
//             id: '15',
//             title: 'Mochilas',
//             url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=mujer',
//           },
//           {
//             id: '16',
//             title: 'Guantes',
//             url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=mujer',
//           },
//           {
//             id: '16',
//             title: 'Gorras',
//             url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=mujer',
//           },
//           {
//             id: '16',
//             title: 'Medias',
//             url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=mujer',
//           },
//           {
//             id: '16',
//             title: 'Tomatodos',
//             url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=mujer',
//           },
//         ],
//       },
//       {
//         categoria: [
//           {
//             id: '17',
//             title: ' Deportes',
//             url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=mujer',
//           },
//           {
//             id: '18',
//             title: ' Running',
//             url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=mujer',
//           },
//           {
//             id: '19',
//             title: ' Futbol',
//             url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=mujer',
//           },
//           {
//             id: '20',
//             title: ' Training',
//             url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=mujer',
//           },
//           {
//             id: '20',
//             title: ' Tenis',
//             url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=mujer',
//           },
//           {
//             id: '20',
//             title: ' Natación',
//             url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=mujer',
//           },
//           {
//             id: '20',
//             title: ' Básquet',
//             url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=mujer',
//           },
//         ],
//       },
//       {
//         titulo: 'Vístete como Jenna ',
//         img: 'https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/esPE/Images/Jenna_Big_Image_tcm202-1057246.jpg',
//       },
//     ],
//   },

//   {
//     id: 'Hombre',
//     titulo: 'Hombre',
//     url: 'hombre',
//     infoNav: [
//       {
//         categoria: [
//           {
//             id: '1',
//             title: 'Ver Todas las Zapatillas',
//             url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=hombre',
//           },
//           {
//             id: '2',
//             title: 'Running',
//             url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=hombre',
//           },
//           {
//             id: '3',
//             title: 'Terrex',
//             url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=hombre',
//           },
//           {
//             id: '4',
//             title: 'Chimpunes',
//             url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=hombre',
//           },
//           {
//             id: '5',
//             title: 'Básquet',
//             url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=hombre',
//           },
//           {
//             id: '6',
//             title: 'Sandalias',
//             url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=hombre',
//           },
//           {
//             id: '7',
//             title: 'Calzado de Plataforma',
//             url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=hombre',
//           },
//           {
//             id: '8',
//             title: 'Calzado Comodo',
//             url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=hombre',
//           },
//         ],
//       },
//       {
//         categoria: [
//           {
//             id: '9',
//             title: ' Ropa',
//             url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=hombre',
//           },
//           {
//             id: '10',
//             title: 'Polos',
//             url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=hombre',
//           },
//           {
//             id: '11',
//             title: 'Licras',
//             url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=hombre',
//           },
//           {
//             id: '12',
//             title: 'Casacas',
//             url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=hombre',
//           },
//           {
//             id: '12',
//             title: 'Poleras',
//             url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=hombre',
//           },
//           {
//             id: '12',
//             title: 'Pantalones',
//             url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=hombre',
//           },
//           {
//             id: '12',
//             title: 'Camisetas de Futbol',
//             url: '/tienda?q=camisetas&p=1',
//           },
//           {
//             id: '12',
//             title: 'Shorts',
//             url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=hombre',
//           },
//           {
//             id: '12',
//             title: 'Buzos',
//             url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=hombre',
//           },
//         ],
//       },
//       {
//         categoria: [
//           {
//             id: '13',
//             title: 'Accesorios',
//             url: '/tienda?q=accesorios&p=1',
//           },
//           {
//             id: '14',
//             title: 'Bolsos',
//             url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=hombre',
//           },
//           {
//             id: '15',
//             title: 'Mochilas',
//             url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=hombre',
//           },
//           {
//             id: '16',
//             title: 'Guantes',
//             url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=hombre',
//           },
//           {
//             id: '16',
//             title: 'Gorras',
//             url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=hombre',
//           },
//           {
//             id: '16',
//             title: 'Medias',
//             url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=hombre',
//           },
//           {
//             id: '16',
//             title: 'Tomatodos',
//             url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=hombre',
//           },
//         ],
//       },
//       {
//         categoria: [
//           {
//             id: '17',
//             title: ' Deportes',
//             url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=hombre',
//           },
//           {
//             id: '18',
//             title: ' Running',
//             url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=hombre',
//           },
//           {
//             id: '19',
//             title: ' Futbol',
//             url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=hombre',
//           },
//           {
//             id: '20',
//             title: ' Training',
//             url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=hombre',
//           },
//           {
//             id: '20',
//             title: ' Tenis',
//             url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=hombre',
//           },
//           {
//             id: '20',
//             title: ' Natación',
//             url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=hombre',
//           },
//           {
//             id: '20',
//             title: ' Básquet',
//             url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=hombre',
//           },
//         ],
//       },
//       {
//         titulo: 'Vístete como Jenna ',
//         img: 'https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/esPE/Images/Jenna_Big_Image_tcm202-1057246.jpg',
//       },
//     ],
//   },

//   {
//     id: 'ninos',
//     titulo: 'Niños',
//     url: 'ninos',
//     infoNav: [
//       {
//         categoria: [
//           {
//             id: '35',
//             title: 'Calzado Niño',
//             url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=niño',
//           },
//           {
//             id: '36',
//             title: 'Zapatillas',
//             url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=niño',
//           },
//           {
//             id: '37',
//             title: 'Chimpunes',
//             url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=niño',
//           },
//           {
//             id: '38',
//             title: 'Calzado Escolar Blanco',
//             url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=niño',
//           },
//           {
//             id: '38',
//             title: 'Sandalias',
//             url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=niño',
//           },
//         ],
//       },
//       {
//         categoria: [
//           {
//             id: '39',
//             title: 'Ropa Niño',
//             url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=niño',
//           },
//           {
//             id: '40',
//             title: 'Polos',
//             url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=niño',
//           },
//           {
//             id: '41',
//             title: 'Casacas',
//             url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=niño',
//           },
//           {
//             id: '42',
//             title: 'Camisetas',
//             url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=niño',
//           },
//           {
//             id: '42',
//             title: 'Poleras',
//             url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=niño',
//           },
//           {
//             id: '42',
//             title: 'Buzos',
//             url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=niño',
//           },
//           {
//             id: '42',
//             title: 'Pantalones',
//             url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=niño',
//           },
//           {
//             id: '42',
//             title: 'Shorts',
//             url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=niño',
//           },
//         ],
//       },
//       {
//         categoria: [
//           {
//             id: '35',
//             title: 'Calzado Niña',
//             url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=niña',
//           },
//           {
//             id: '36',
//             title: 'Zapatillas',
//             url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=niña',
//           },
//           {
//             id: '37',
//             title: 'Chimpunes',
//             url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=niña',
//           },
//           {
//             id: '38',
//             title: 'Calzado Escolar Blanco',
//             url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=niña',
//           },
//           {
//             id: '38',
//             title: 'Sandalias',
//             url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=niña',
//           },
//         ],
//       },
//       {
//         categoria: [
//           {
//             id: '39',
//             title: 'Ropa Niña',
//             url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=niña',
//           },
//           {
//             id: '40',
//             title: 'Polos',
//             url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=niña',
//           },
//           {
//             id: '41',
//             title: 'Casacas',
//             url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=niña',
//           },
//           {
//             id: '42',
//             title: 'Camisetas',
//             url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=niña',
//           },
//           {
//             id: '42',
//             title: 'Poleras',
//             url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=niña',
//           },
//           {
//             id: '42',
//             title: 'Buzos',
//             url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=niña',
//           },
//           {
//             id: '42',
//             title: 'Pantalones',
//             url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=niña',
//           },
//           {
//             id: '42',
//             title: 'Shorts',
//             url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=niña',
//           },
//         ],
//       },
//       {
//         categoria: [
//           {
//             id: '13',
//             title: 'Accesorios',
//             url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=niños',
//           },
//           {
//             id: '14',
//             title: 'Bolsos',
//             url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=niños',
//           },
//           {
//             id: '15',
//             title: 'Mochilas',
//             url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=niños',
//           },
//           {
//             id: '16',
//             title: 'Guantes',
//             url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=niña',
//           },
//           {
//             id: '16',
//             title: 'Gorras',
//             url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=niños',
//           },
//           {
//             id: '16',
//             title: 'Medias',
//             url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=niños',
//           },
//           {
//             id: '16',
//             title: 'Tomatodos',
//             url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=niña',
//           },
//         ],
//       },
//       {
//         titulo: 'Ropa Comoda para ti',
//         img: 'https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/esPE/Images/Sportswear_Big_Image_tcm202-1057247.jpg',
//       },
//     ],
//   },
//   {
//     id: 'outlet',
//     titulo: 'OUTLET',
//     url: '/tienda',
//     infoNav: [
//       {
//         categoria: [
//           {
//             id: 'qw62346765e123',
//             title: 'Mujer',
//             url: '/tienda?pwa_ecom_ui_template_products%5Brange%5D%5Bprice.value%5D=%3A300',
//           },
//           {
//             id: 'sa65765123',
//             title: 'Todo el Calzado',
//             url: '/tienda?pwa_ecom_ui_template_products%5Brange%5D%5Bprice.value%5D=%3A300',
//           },
//           {
//             id: 'fa123sf213',
//             title: 'Zapatillas',
//             url: '/tienda?pwa_ecom_ui_template_products%5Brange%5D%5Bprice.value%5D=%3A300',
//           },
//           {
//             id: 'ga2sh',
//             title: 'Chimpunes',
//             url: '/tienda?pwa_ecom_ui_template_products%5Brange%5D%5Bprice.value%5D=%3A300',
//           },
//           {
//             id: 'ga623423asdsh',
//             title: 'Toda la Ropa',
//             url: '/tienda?pwa_ecom_ui_template_products%5Brange%5D%5Bprice.value%5D=%3A300',
//           },
//           {
//             id: 'ga231asdsh',
//             title: 'Polos',
//             url: '/tienda?pwa_ecom_ui_template_products%5Brange%5D%5Bprice.value%5D=%3A300',
//           },
//           {
//             id: 'g123123ad54asda123sdsh',
//             title: 'Casacas',
//             url: '/tienda?pwa_ecom_ui_template_products%5Brange%5D%5Bprice.value%5D=%3A300',
//           },
//           {
//             id: 'gaa354sdsh',
//             title: 'Poleras',
//             url: '/tienda?pwa_ecom_ui_template_products%5Brange%5D%5Bprice.value%5D=%3A300',
//           },
//           {
//             id: 'gaas122343dassh',
//             title: 'Pantalones',
//             url: '/tienda?pwa_ecom_ui_template_products%5Brange%5D%5Bprice.value%5D=%3A300',
//           },
//         ],
//       },
//       {
//         categoria: [
//           {
//             id: 'qw62346765e123',
//             title: 'Hombre',
//             url: '/tienda?pwa_ecom_ui_template_products%5Brange%5D%5Bprice.value%5D=%3A300',
//           },
//           {
//             id: 'sa65765123',
//             title: 'Todo el Calzado',
//             url: '/tienda?pwa_ecom_ui_template_products%5Brange%5D%5Bprice.value%5D=%3A300',
//           },
//           {
//             id: 'fa123sf213',
//             title: 'Zapatillas',
//             url: '/tienda?pwa_ecom_ui_template_products%5Brange%5D%5Bprice.value%5D=%3A300',
//           },
//           {
//             id: 'ga2sh',
//             title: 'Chimpunes',
//             url: '/tienda?pwa_ecom_ui_template_products%5Brange%5D%5Bprice.value%5D=%3A300',
//           },
//           {
//             id: 'ga623423asdsh',
//             title: 'Toda la Ropa',
//             url: '/tienda?pwa_ecom_ui_template_products%5Brange%5D%5Bprice.value%5D=%3A300',
//           },
//           {
//             id: 'ga231asdsh',
//             title: 'Polos',
//             url: '/tienda?pwa_ecom_ui_template_products%5Brange%5D%5Bprice.value%5D=%3A300',
//           },
//           {
//             id: 'g123123ad54asda123sdsh',
//             title: 'Casacas',
//             url: '/tienda?pwa_ecom_ui_template_products%5Brange%5D%5Bprice.value%5D=%3A300',
//           },
//           {
//             id: 'gaa354sdsh',
//             title: 'Poleras',
//             url: '/tienda?pwa_ecom_ui_template_products%5Brange%5D%5Bprice.value%5D=%3A300',
//           },
//           {
//             id: 'gaas122343dassh',
//             title: 'Pantalones',
//             url: '/tienda?pwa_ecom_ui_template_products%5Brange%5D%5Bprice.value%5D=%3A300',
//           },
//         ],
//       },
//       {
//         categoria: [
//           {
//             id: 'qw62346765e123',
//             title: 'Niños',
//             url: '/tienda?pwa_ecom_ui_template_products%5Brange%5D%5Bprice.value%5D=%3A300',
//           },
//           {
//             id: 'sa65765123',
//             title: 'Todo el Calzado',
//             url: '/tienda?pwa_ecom_ui_template_products%5Brange%5D%5Bprice.value%5D=%3A300',
//           },
//           {
//             id: 'fa123sf213',
//             title: 'Zapatillas',
//             url: '/tienda?pwa_ecom_ui_template_products%5Brange%5D%5Bprice.value%5D=%3A300',
//           },
//           {
//             id: 'ga2sh',
//             title: 'Chimpunes',
//             url: '/tienda?pwa_ecom_ui_template_products%5Brange%5D%5Bprice.value%5D=%3A300',
//           },
//           {
//             id: 'ga623423asdsh',
//             title: 'Toda la Ropa',
//             url: '/tienda?pwa_ecom_ui_template_products%5Brange%5D%5Bprice.value%5D=%3A300',
//           },
//           {
//             id: 'ga231asdsh',
//             title: 'Polos',
//             url: '/tienda?pwa_ecom_ui_template_products%5Brange%5D%5Bprice.value%5D=%3A300',
//           },
//           {
//             id: 'g123123ad54asda123sdsh',
//             title: 'Casacas',
//             url: '/tienda?pwa_ecom_ui_template_products%5Brange%5D%5Bprice.value%5D=%3A300',
//           },
//           {
//             id: 'gaa354sdsh',
//             title: 'Poleras',
//             url: '/tienda?pwa_ecom_ui_template_products%5Brange%5D%5Bprice.value%5D=%3A300',
//           },
//           {
//             id: 'gaas122343dassh',
//             title: 'Pantalones',
//             url: '/tienda?pwa_ecom_ui_template_products%5Brange%5D%5Bprice.value%5D=%3A300',
//           },
//         ],
//       },
//       {
//         titulo: '',
//         img: 'https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/esPE/Images/BIG_IMAGE_PE_tcm202-1071078.jpg',
//       },
//     ],
//   },

//   // {
//   //   id: 'emprende',
//   //   titulo: 'Emprende',
//   //   url: 'emprende',
//   //   infoNav: [
//   //     {
//   //       categoria: [
//   //         { id: '', title: 'Ver Todas las Zapatillas', url: '#' },
//   //         { id: '', title: 'Ver Todas las Zapatillas', url: '#' },
//   //         { id: '', title: 'Ver Todas las Zapatillas', url: '#' },
//   //         { id: '', title: 'Ver Todas las Zapatillas', url: '#' },
//   //       ],
//   //       img: 'https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/esPE/Images/Hombre_tcm202-989926.jpg',
//   //     },
//   //     {
//   //       categoria: [
//   //         { id: '', title: 'Ver Todas las Zapatillas', url: '#' },
//   //         { id: '', title: 'Ver Todas las Zapatillas', url: '#' },
//   //         { id: '', title: 'Ver Todas las Zapatillas', url: '#' },
//   //         { id: '', title: 'Ver Todas las Zapatillas', url: '#' },
//   //       ],
//   //       img: 'https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/esPE/Images/Mujer_tcm202-989927.jpg',
//   //     },
//   //     {
//   //       categoria: [
//   //         { id: '', title: 'Ver Todas las Zapatillas', url: '#' },
//   //         { id: '', title: 'Ver Todas las Zapatillas', url: '#' },
//   //         { id: '', title: 'Ver Todas las Zapatillas', url: '#' },
//   //         { id: '', title: 'Ver Todas las Zapatillas', url: '#' },
//   //       ],
//   //       img: 'https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/esPE/Images/Ninos_tcm202-989928.jpg',
//   //     },
//   //     {
//   //       categoria: [
//   //         { id: '', title: 'Ver Todas las Zapatillas', url: '#' },
//   //         { id: '', title: 'Ver Todas las Zapatillas', url: '#' },
//   //         { id: '', title: 'Ver Todas las Zapatillas', url: '#' },
//   //         { id: '', title: 'Ver Todas las Zapatillas', url: '#' },
//   //       ],
//   //       img: 'https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/esPE/Images/Deportes_tcm202-989929.jpg  ',
//   //     },
//   //     {
//   //       categoria: [
//   //         { id: '', title: 'Ver Todas las Zapatillas', url: '#' },
//   //         { id: '', title: 'Ver Todas las Zapatillas', url: '#' },
//   //         { id: '', title: 'Ver Todas las Zapatillas', url: '#' },
//   //         { id: '', title: 'Ver Todas las Zapatillas', url: '#' },
//   //       ],
//   //       img: 'https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/esPE/Images/skateboarding_nav_deporte id:"",_title_tcm202-834374.jpg',
//   //     },
//   //   ],
//   // },
//   // {
//   //   id: 'empresas',
//   //   titulo: 'Nuestras Empresas',
//   //   url: 'empresas',
//   //   infoNav: [
//   //     {
//   //       categoria: [
//   //         { id: '', title: 'Ver Todas las Zapatillas', url: '#' },
//   //         { id: '', title: 'Ver Todas las Zapatillas', url: '#' },
//   //         { id: '', title: 'Ver Todas las Zapatillas', url: '#' },
//   //         { id: '', title: 'Ver Todas las Zapatillas', url: '#' },
//   //       ],
//   //       img: 'https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/esPE/Images/Hombre_tcm202-989926.jpg',
//   //     },
//   //     {
//   //       categoria: [
//   //         { id: '', title: 'Ver Todas las Zapatillas', url: '#' },
//   //         { id: '', title: 'Ver Todas las Zapatillas', url: '#' },
//   //         { id: '', title: 'Ver Todas las Zapatillas', url: '#' },
//   //         { id: '', title: 'Ver Todas las Zapatillas', url: '#' },
//   //       ],
//   //       img: 'https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/esPE/Images/Mujer_tcm202-989927.jpg',
//   //     },
//   //     {
//   //       categoria: [
//   //         { id: '', title: 'Ver Todas las Zapatillas', url: '#' },
//   //         { id: '', title: 'Ver Todas las Zapatillas', url: '#' },
//   //         { id: '', title: 'Ver Todas las Zapatillas', url: '#' },
//   //         { id: '', title: 'Ver Todas las Zapatillas', url: '#' },
//   //       ],
//   //       img: 'https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/esPE/Images/Ninos_tcm202-989928.jpg',
//   //     },
//   //     {
//   //       categoria: [
//   //         { id: '', title: 'Ver Todas las Zapatillas', url: '#' },
//   //         { id: '', title: 'Ver Todas las Zapatillas', url: '#' },
//   //         { id: '', title: 'Ver Todas las Zapatillas', url: '#' },
//   //         { id: '', title: 'Ver Todas las Zapatillas', url: '#' },
//   //       ],
//   //       img: 'https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/esPE/Images/Deportes_tcm202-989929.jpg  ',
//   //     },
//   //     {
//   //       categoria: [
//   //         { id: '', title: 'Ver Todas las Zapatillas', url: '#' },
//   //         { id: '', title: 'Ver Todas las Zapatillas', url: '#' },
//   //         { id: '', title: 'Ver Todas las Zapatillas', url: '#' },
//   //         { id: '', title: 'Ver Todas las Zapatillas', url: '#' },
//   //       ],
//   //       img: 'https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/esPE/Images/skateboarding_nav_deporte_title_tcm202-834374.jpg',
//   //     },
//   //   ],
//   // },
// ]
const dataHeader = [
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
          // {
          //   id: '2',
          //   title: 'Running',
          //   url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=mujer',
          // },
          {
            id: '3',
            title: 'Terrex',
            url: '/tienda?pwa_ecom_ui_template_products%5BrefinementList%5D%5BGenero%5D%5B0%5D=Mujer&pwa_ecom_ui_template_products%5BrefinementList%5D%5BCategoria%5D%5B0%5D=Terrex',
          },
          // {
          //   id: '4',
          //   title: 'Chimpunes',
          //   url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=mujer',
          // },
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
          // {
          //   id: '11',
          //   title: 'Licras',
          //   url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=mujer',
          // },
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
          // {
          //   id: '12',
          //   title: 'Camisetas de Futbol',
          //   url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=mujer',
          // },
          // {
          //   id: '12',
          //   title: 'Shorts',
          //   url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=mujer',
          // },
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
          // {
          //   id: '16',
          //   title: 'Guantes',
          //   url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=mujer',
          // },
          {
            id: '16',
            title: 'Gorras',
            url: '/tienda?pwa_ecom_ui_template_products%5BrefinementList%5D%5BGenero%5D%5B0%5D=Unisex&pwa_ecom_ui_template_products%5BrefinementList%5D%5BCategoria%5D%5B0%5D=Gorras',
          },
          // {
          //   id: '16',
          //   title: 'Medias',
          //   url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=mujer',
          // },
          // {
          //   id: '16',
          //   title: 'Tomatodos',
          //   url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=mujer',
          // },
        ],
      },
      {
        categoria: [
          // {
          //   id: '17',
          //   title: ' Deportes',
          //   url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=mujer20%comodo',
          // },
          // {
          //   id: '18',
          //   title: ' Running',
          //   url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=mujer%20running',
          // },
          // {
          //   id: '19',
          //   title: ' Futbol',
          //   url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=mujer%20futbol',
          // },
          // {
          //   id: '20',
          //   title: ' Training',
          //   url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=mujer',
          // },
          // {
          //   id: '20',
          //   title: ' Tenis',
          //   url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=mujer',
          // },
          // {
          //   id: '20',
          //   title: ' Natación',
          //   url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=mujer',
          // },
          // {
          //   id: '20',
          //   title: ' Básquet',
          //   url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=mujer',
          // },
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
          // {
          //   id: '2',
          //   title: 'Running',
          //   url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=mujer',
          // },
          {
            id: '3',
            title: 'Terrex',
            url: '/tienda?pwa_ecom_ui_template_products%5BrefinementList%5D%5BGenero%5D%5B0%5D=Hombre&pwa_ecom_ui_template_products%5BrefinementList%5D%5BCategoria%5D%5B0%5D=Terrex',
          },
          // {
          //   id: '4',
          //   title: 'Chimpunes',
          //   url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=mujer',
          // },
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
          // {
          //   id: '7',
          //   title: 'Calzado de Plataforma',
          //   url: '/tienda?pwa_ecom_ui_template_products%5BrefinementList%5D%5BGenero%5D%5B0%5D=Hombre&pwa_ecom_ui_template_products%5BrefinementList%5D%5BCategoria%5D%5B0%5D=Plataforma',
          // },
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
          // {
          //   id: '11',
          //   title: 'Licras',
          //   url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=mujer',
          // },
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
          // {
          //   id: '12',
          //   title: 'Camisetas de Futbol',
          //   url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=mujer',
          // },
          // {
          //   id: '12',
          //   title: 'Shorts',
          //   url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=mujer',
          // },
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
          // {
          //   id: '16',
          //   title: 'Guantes',
          //   url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=mujer',
          // },
          {
            id: '16',
            title: 'Gorras',
            url: '/tienda?pwa_ecom_ui_template_products%5BrefinementList%5D%5BGenero%5D%5B0%5D=Unisex&pwa_ecom_ui_template_products%5BrefinementList%5D%5BCategoria%5D%5B0%5D=Gorras',
          },
          // {
          //   id: '16',
          //   title: 'Medias',
          //   url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=mujer',
          // },
          // {
          //   id: '16',
          //   title: 'Tomatodos',
          //   url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=mujer',
          // },
        ],
      },
      {
        categoria: [
          // {
          //   id: '17',
          //   title: ' Deportes',
          //   url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=mujer20%comodo',
          // },
          // {
          //   id: '18',
          //   title: ' Running',
          //   url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=mujer%20running',
          // },
          // {
          //   id: '19',
          //   title: ' Futbol',
          //   url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=mujer%20futbol',
          // },
          // {
          //   id: '20',
          //   title: ' Training',
          //   url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=mujer',
          // },
          // {
          //   id: '20',
          //   title: ' Tenis',
          //   url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=mujer',
          // },
          // {
          //   id: '20',
          //   title: ' Natación',
          //   url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=mujer',
          // },
          // {
          //   id: '20',
          //   title: ' Básquet',
          //   url: '/tienda?pwa_ecom_ui_template_products%5Bquery%5D=mujer',
          // },
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
    url: '/tienda?pwa_ecom_ui_template_products%5BrefinementList%5D%5Bprice.discount_level%5D%5B0%5D=60',
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

  // {
  //   id: 'emprende',
  //   titulo: 'Emprende',
  //   url: 'emprende',
  //   infoNav: [
  //     {
  //       categoria: [
  //         { id: '', title: 'Ver Todas las Zapatillas', url: '#' },
  //         { id: '', title: 'Ver Todas las Zapatillas', url: '#' },
  //         { id: '', title: 'Ver Todas las Zapatillas', url: '#' },
  //         { id: '', title: 'Ver Todas las Zapatillas', url: '#' },
  //       ],
  //       img: 'https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/esPE/Images/Hombre_tcm202-989926.jpg',
  //     },
  //     {
  //       categoria: [
  //         { id: '', title: 'Ver Todas las Zapatillas', url: '#' },
  //         { id: '', title: 'Ver Todas las Zapatillas', url: '#' },
  //         { id: '', title: 'Ver Todas las Zapatillas', url: '#' },
  //         { id: '', title: 'Ver Todas las Zapatillas', url: '#' },
  //       ],
  //       img: 'https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/esPE/Images/Mujer_tcm202-989927.jpg',
  //     },
  //     {
  //       categoria: [
  //         { id: '', title: 'Ver Todas las Zapatillas', url: '#' },
  //         { id: '', title: 'Ver Todas las Zapatillas', url: '#' },
  //         { id: '', title: 'Ver Todas las Zapatillas', url: '#' },
  //         { id: '', title: 'Ver Todas las Zapatillas', url: '#' },
  //       ],
  //       img: 'https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/esPE/Images/Ninos_tcm202-989928.jpg',
  //     },
  //     {
  //       categoria: [
  //         { id: '', title: 'Ver Todas las Zapatillas', url: '#' },
  //         { id: '', title: 'Ver Todas las Zapatillas', url: '#' },
  //         { id: '', title: 'Ver Todas las Zapatillas', url: '#' },
  //         { id: '', title: 'Ver Todas las Zapatillas', url: '#' },
  //       ],
  //       img: 'https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/esPE/Images/Deportes_tcm202-989929.jpg  ',
  //     },
  //     {
  //       categoria: [
  //         { id: '', title: 'Ver Todas las Zapatillas', url: '#' },
  //         { id: '', title: 'Ver Todas las Zapatillas', url: '#' },
  //         { id: '', title: 'Ver Todas las Zapatillas', url: '#' },
  //         { id: '', title: 'Ver Todas las Zapatillas', url: '#' },
  //       ],
  //       img: 'https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/esPE/Images/skateboarding_nav_deporte id:"",_title_tcm202-834374.jpg',
  //     },
  //   ],
  // },
  // {
  //   id: 'empresas',
  //   titulo: 'Nuestras Empresas',
  //   url: 'empresas',
  //   infoNav: [
  //     {
  //       categoria: [
  //         { id: '', title: 'Ver Todas las Zapatillas', url: '#' },
  //         { id: '', title: 'Ver Todas las Zapatillas', url: '#' },
  //         { id: '', title: 'Ver Todas las Zapatillas', url: '#' },
  //         { id: '', title: 'Ver Todas las Zapatillas', url: '#' },
  //       ],
  //       img: 'https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/esPE/Images/Hombre_tcm202-989926.jpg',
  //     },
  //     {
  //       categoria: [
  //         { id: '', title: 'Ver Todas las Zapatillas', url: '#' },
  //         { id: '', title: 'Ver Todas las Zapatillas', url: '#' },
  //         { id: '', title: 'Ver Todas las Zapatillas', url: '#' },
  //         { id: '', title: 'Ver Todas las Zapatillas', url: '#' },
  //       ],
  //       img: 'https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/esPE/Images/Mujer_tcm202-989927.jpg',
  //     },
  //     {
  //       categoria: [
  //         { id: '', title: 'Ver Todas las Zapatillas', url: '#' },
  //         { id: '', title: 'Ver Todas las Zapatillas', url: '#' },
  //         { id: '', title: 'Ver Todas las Zapatillas', url: '#' },
  //         { id: '', title: 'Ver Todas las Zapatillas', url: '#' },
  //       ],
  //       img: 'https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/esPE/Images/Ninos_tcm202-989928.jpg',
  //     },
  //     {
  //       categoria: [
  //         { id: '', title: 'Ver Todas las Zapatillas', url: '#' },
  //         { id: '', title: 'Ver Todas las Zapatillas', url: '#' },
  //         { id: '', title: 'Ver Todas las Zapatillas', url: '#' },
  //         { id: '', title: 'Ver Todas las Zapatillas', url: '#' },
  //       ],
  //       img: 'https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/esPE/Images/Deportes_tcm202-989929.jpg  ',
  //     },
  //     {
  //       categoria: [
  //         { id: '', title: 'Ver Todas las Zapatillas', url: '#' },
  //         { id: '', title: 'Ver Todas las Zapatillas', url: '#' },
  //         { id: '', title: 'Ver Todas las Zapatillas', url: '#' },
  //         { id: '', title: 'Ver Todas las Zapatillas', url: '#' },
  //       ],
  //       img: 'https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/esPE/Images/skateboarding_nav_deporte_title_tcm202-834374.jpg',
  //     },
  //   ],
  // },
]

export const NavTop = memo(function NavTop({props,activeSearchGlobal}) {

  // carrito funciones necesarias
  const [domLoaded, setDomLoaded] = useState(false)
  const { items, removeItem, cartTotal, totalItems, emptyCart, isEmpty } =
    useCart()

  useEffect(() => {
    setDomLoaded(true)
  }, [])

  // data nav desktop
  const [dataNav, setDataNav] = useState([])
  async function fetchNav() {
    const request = await fetch('/api/home/nav')
    const data = await request.json()
    setDataNav(data)
  }
  useEffect(() => {
    fetchNav()
  }, [])

  // ubicanos
  const [openUbi, setOpenUbicanos] = useState(false)
  const [tiendaLima, setTiendaLima] = useState(false)
  const [tiendaAguasVerdes, setTiendaAguasVerdes] = useState(false)

  //
  const [openCart, setOpen] = useState(false)
  const [activeHoverNavDesktop, setActiveHoverNavDesktop] = useState()

  const openDrawer = () => setOpen(true)
  // desktop nav
  const [hoverMenu, setHoverMenu] = useState(dataHeader[0].infoNav)
  const [andler, setAndler] = useState(false)
  useEffect(() => {
    if (!andler) {
      setActiveHoverNavDesktop(undefined)
    }
  }, [andler])

  const handleHover = (index) => {
    console.log(index);
    // setActiveHoverMenuNav(index)
    setActiveHoverNavDesktop(index)

    setAndler(true)
    setHoverMenu(dataHeader[index].infoNav)
  }
  if(!props.homeNav) return <div>Cargando..</div>



  // remove items reload cart

  const router = useRouter()
  function reloadPage() {
    router.reload()
  }


  const handlerRemoveItem = (id)=>{
    removeItem(id)
    reloadPage()
  } 

  const handlerRemoveItems = ()=>{
    emptyCart()
    reloadPage()
  } 

  return (
    <div>
      {/* /*---------------------------------*/
      /* Desktop menu*/
      /* ---------------------------------*/}
      <div className="hidden xl:block">
        <nav>
          <div>
            <div>
              <div
                className={` w-[100%] relative bg-[var(--dark-mode)] px-10 z-50`}
              >
                <div className="flex justify-around  items-center h-full w-full">
                  {/* logo nav */}
                  <div className="flex  items-center xl:justify-around 2xl:justify-between text-blue-gray-900 ">
                  <Logotipo logo={props.homeLogo} url={"/"}/>
                  </div>
                    <div className=" lg:block h-[5rem] ">
                      <div className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:px-1 grid grid-flow-col gap-x-10 h-full ">
                        {props.homeNav.map((el, index) => (
                          <Link
                            href={el.url}
                            className="h-full  flex justify-center items-center "
                            key={el._id}
                            onClick={() => setAndler(false)}
                            onMouseEnter={() => handleHover(index)}
                            onMouseLeave={() => setAndler(false)}
                          >
                            <div className=" inline-flex items-center  justify-between  px-2  font-medium transition-all duration-500 rounded-md focus:outline-none focus:text-brand-900 sm:focus:shadow-outline">
                              <span
                                className={`flex-shrink-0 uppercase  text-black font-[500] xl:text-sm laptop:text-lg  ${
                                  activeHoverNavDesktop === index &&
                                  'border-b-2 border-black '
                                }  2xl:text-base `}
                              >
                                {el.page}
                              </span>
                            </div>
                          </Link>
                        ))}

                        {/* <Link
                          href="#"
                          className="h-full flex justify-center items-center "
                        >
                          <div className=" inline-flex items-center  justify-between  px-2  font-medium transition-all duration-500 rounded-md focus:outline-none focus:text-brand-900 sm:focus:shadow-outline">
                            <span
                              className={`flex-shrink-0 font-normal text-black xl:text-sm    2xl:text-lg hover:border-b-2 border-black `}
                            >
                              Nuestras Empresas
                            </span>
                          </div>
                        </Link> */}
                      </div>
                    </div>
                  {/* carrito y ubicanos */}
                  <div className="flex items-center w-28 justify-around">
                    <Tablet>
                      <Button
                        title="Ubicanos"
                        onClick={() => setOpenUbicanos(!openUbi)}
                      >
                        <IconLabel icon={PinDropIcon} />
                      </Button>
                    </Tablet>

                    <Laptop>
                      <Button onClick={() => setOpenUbicanos(!openUbi)}>
                        <IconLabel icon={PinDropIcon} />
                      </Button>
                    </Laptop>
                    {/* <Laptop>
              <Button title="Favorites">
                <IconLabel icon={FavoriteIcon} />
              </Button>
            </Laptop> */}

                    {/* <Button title="Account">
              <Tablet>
                <IconLabel icon={PersonIcon} label="Account" />
              </Tablet>
              <Laptop>
                <IconLabel icon={PersonIcon} />
              </Laptop>
            </Button> */}
                    {domLoaded && (
                      <Button title="Cart" onClick={openDrawer}>
                        <Tablet>
                          <IconLabel icon={ShoppingBagIcon} />
                          <span className="absolute bg-black text-white rounded-full w-5">
                            {totalItems}
                          </span>
                        </Tablet>
                        <Laptop>
                          <IconLabel icon={ShoppingBagIcon} />
                          <span className="absolute bg-black text-white rounded-full w-5">
                            {totalItems}
                          </span>
                        </Laptop>
                      </Button>
                    )}

                    {/* /*---------------------------------*/
                    /* CARRITO*/
                    /* ---------------------------------*/}

                    {/* menu Mobile */}
                  </div>

    

    
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
                        {/* <Link
                        href="/mujer?grid=true"
                        className="border-b-[1px] text-black border-transparent hover:border-b-[1px]  hover:border-black transition ease-out font-semibold text-sm"
                      >
                        {menulist.titulo}
                      </Link> */}
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
                {/* footer */}
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
    

          <div className="flex justify-between  w-full xl:hidden">
            <div className="hidden items-center gap-8 xl:flex">
              <Link
                href="/store-locator"
                title="Ubicanos"
                className="can-hover:transition-colors can-hover:hover:text-neutral-dark"
                onClick={(e) => e.preventDefault()}
              >
                <Button onClick={() => setOpenUbicanos(!openUbi)}>
                  <IconLabel
                    icon={PinDropIcon}
                    label="Ubicanos"
                    labelPosition="right"
                    classNameLabel="label-regular"
                  />
                </Button>
              </Link>
            </div>
            <Logotipo logo={props.homeLogo} url={"/"}/>
                 
            <div className="flex items-center gap-6 laptop:gap-3 ">
              <Tablet>
                <Button
                  title="Ubicanos"
                  className="relative w-16"
                  onClick={() => setOpenUbicanos(!openUbi)}
                >
                  <IconLabel icon={PinDropIcon} />
                  <span className="absolute left-1 text-center">Ubicanos</span>
                </Button>
              </Tablet>

              {domLoaded && (
                <Button title="Cart" onClick={openDrawer}>
                  <Tablet>
                    <IconLabel icon={ShoppingBagIcon} />
                    <span className="absolute bg-black text-white rounded-full w-5">
                      {totalItems}
                    </span>
                  </Tablet>
                  <Laptop>
                    <IconLabel icon={ShoppingBagIcon} />
                    <span className="absolute bg-black text-white rounded-full w-5">
                      {totalItems}
                    </span>
                  </Laptop>
                </Button>
              )}
              {/* /*---------------------------------*/
              /* CARRITO Nav*/
              /* --------------------------------*/}
              {/* menu Mobil */}
            </div>
          </div>
        </div>
      </div>
      <Drawer
        open={openCart}
        placement="right"
        size={500}
        nonce={undefined}
        // onClose={() => setOpen(false)}
        onResize={undefined}
        onResizeCapture={undefined}
      >
        <div className="mb-2 flex items-center justify-between p-4 absolute right-0">
          <IconButton
            variant="text"
            color="blue-gray"
            nonce={undefined}
            onClick={() => setOpen(!openCart)}
            onResize={undefined}
            onResizeCapture={undefined}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 xl:p-10 2xl:p-8  dark:bg-gray-900 dark:text-gray-100">
          <div className="flex">
            <h2 className="text-2xl font-semibold ">Carrito</h2>
            <Button
              className="px-2 ml-5 py-1 pl-0 space-x-1 cursor-pointer"
              onClick={handlerRemoveItems}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-4 h-4 fill-current ml-3"
              >
                <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                <rect width="32" height="200" x="168" y="216"></rect>
                <rect width="32" height="200" x="240" y="216"></rect>
                <rect width="32" height="200" x="312" y="216"></rect>
                <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
              </svg>
              {/* <span>Remover</span> */}
            </Button>
          </div>
          {domLoaded && isEmpty ? (
            <SearchPageLayout>
              <Configure
                hitsPerPage={1}
                // We cannot retrieve the user token at build time, so we disable perso
                // feature to avoid an additional call to retrieve Algolia results at load time
                enablePersonalization={false}
                userToken={undefined}
              />
              <div className="w-full flex justify-center items-end ">
                <h4 className="text-center">Tu Carrito Esta Vació</h4>
              </div>
              <Button
                className="w-[100vw] absolute flex justify-center"
                onClick={() => setOpen(!openCart)}
              >
                <ProductsShowcase
                  className="p-0"
                  indexId="recommended"
                  query={`adidas`}
                  ruleContexts={`Hombre`}
                  hitComponent={ProductCardHitShowcase}
                />
              </Button>
            </SearchPageLayout>
          ) : (
            <div className="flex flex-col divide-y divide-gray-700   overflow-y-auto h-[calc(96vh-345px)]">
              {domLoaded &&
                items.map((el) => (
                  <a href={`/product/${el.objectID}?queryID=${el.queryID}`}>
                  <div
                    key={el.id}
                    className="flex flex-col py-6 sm:flex-row sm:justify-between items-center"
                  >
                    <div className="flex w-full space-x-2 sm:space-x-4 items-center">
                      <img
                        className="flex-shrink-0 object-cover w-24 h-24 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500"
                        src={el.img[0]}
                        alt="Polaroid camera"
                      />
                      <div className="flex justify-center items-center w-full h-full">
                        <div className="flex flex-col justify-between w-full">
                          <div className="flex justify-between w-full pb-2 space-x-2">
                            <div className="space-y-1 flex items-end">
                              <h2 className="xl:text-lg text-xs sm:text-xs font-bold  sm:pr-8">
                                {el.title}
                              </h2>
                            </div>
                            <div className="text-right">
                              <p className="xl:text-lg text-base sm:text-xs font-semibold">
                                S/{el.price}
                              </p>
                              <p className="text-base sm:text-xs line-through dark:text-gray-600">
                               S/{el.price + 200}
                              </p>
                            </div>
                          </div>
                          <p className="text-xs sm:text-xs mb-2  dark:text-gray-600">
                            Talla: {el.talla}
                          </p>
                          <div className="text-xs flex justify-between items-start sm:text-xs mb-2  dark:text-gray-600">
                            Cantidad: {el.quantity}
                            <div className="flex text-sm divide-x">
                              <div className=" flex justify-end w-full items-center">
                                {/* <Button
                                  className="px-2 py-1 pl-0 space-x-1 cursor-pointer"
                                  onClick={() => handlerRemoveItem(el.id)}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                    className="w-4 h-4 fill-current ml-3"
                                  >
                                    <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                                    <rect
                                      width="32"
                                      height="200"
                                      x="168"
                                      y="216"
                                    ></rect>
                                    <rect
                                      width="32"
                                      height="200"
                                      x="240"
                                      y="216"
                                    ></rect>
                                    <rect
                                      width="32"
                                      height="200"
                                      x="312"
                                      y="216"
                                    ></rect>
                                    <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                                  </svg>
                                </Button> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  </a>
                ))}
            </div>
          )}

          {/* <!-- Sub total --> */}
          {domLoaded && (
            <div className="flex justify-center p-5">
              <div className="w-full absolute  rounded-lg border  bottom-0 bg-white px-6 py-3 shadow-md md:mt-0 ">
                <div className="mb-2 flex justify-between">
                  <p className="text-gray-700">Subtotal</p>
                  <p className="text-gray-700">S/{cartTotal}</p>
                </div>
                {/* <div className="flex justify-between">
                  <p className="text-gray-700">Delivery</p>
                  <p className="text-gray-700">S/4.99</p>
                </div> */}
                <hr className="my-4" />
                <div className="flex justify-between">
                  <p className="text-lg font-bold dark:text-[var(--dark-mode)]">
                    Total
                  </p>
                  <div className="">
                    <p className="mb-1 text-lg font-bold dark:text-[var(--dark-mode)]">
                      S/{cartTotal}
                    </p>
                    {/* <p className="text-sm text-gray-700 uppercase">Incluye igv</p> */}
                  </div>
                </div>

                <Link
                  href={'/carrito'}
                  className="flex w-full justify-center"
                  onClick={() => setOpen(!openCart)}
                >
                  <span className="mt-6 w-full uppercase rounded-md text-center bg-[#ae946d] py-1.5  text-blue-50 hover:bg-blue-gray-900 font-semibold">
                    ver carrito
                  </span>
                </Link>
                <Link
                  href={'/pagar'}
                  className="flex w-full justify-center"
                  onClick={() => setOpen(!openCart)}
                >
                  <span className="mt-2 w-full uppercase rounded-md text-center bg-[#ae946d] py-1.5  text-blue-50 hover:bg-blue-gray-900 font-semibold">
                    Pagar
                  </span>
                </Link>
              </div>
            </div>
          )}
        </div>
      </Drawer>

      <Dialog
        size="md"
        open={openUbi}
        handler={() => setOpenUbicanos(!openUbi)}
        className=" shadow-none"
        nonce={undefined}
        onResize={undefined}
        onResizeCapture={undefined}
      >
        <DialogBody
          nonce={undefined}
          onResize={undefined}
          onResizeCapture={undefined}
        >
          <div className="h-[15vh] w-full flex flex-col items-center justify-around">
            <Button
              className="bg-black rounded-xl w-4/6 py-2 text-sm md:text-base text-white"
              onClick={() => setTiendaLima(!tiendaLima)}
            >
              Tienda Lima
            </Button>
            <Button
              className="bg-black rounded-xl w-4/6 py-2 text-sm md:text-base text-white"
              onClick={() => setTiendaAguasVerdes(!tiendaAguasVerdes)}
            >
              Tienda Tumbes
            </Button>
          </div>
        </DialogBody>
      </Dialog>
      {/* lima */}
      <Dialog
        size="md"
        open={tiendaLima}
        handler={() => setTiendaLima(!tiendaLima)}
        className=" shadow-none"
        nonce={undefined}
        onResize={undefined}
        onResizeCapture={undefined}
      >
        <div>
          <Button
            className="bg-black w-10 h-10 rounded-full absolute right-0 flex justify-center items-center m-5"
            onClick={() => setTiendaLima(!tiendaLima)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#fff"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </Button>

          <iframe
            title="maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d975.4430350206259!2d-77.03339623037913!3d-12.059192787751336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8b939925501%3A0x56ad230febd44ef4!2sFritz!5e0!3m2!1ses!2spe!4v1698078808081!5m2!1ses!2spe"
            className="w-full rounded-3xl"
            height="450"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </Dialog>
      {/* aguas verdes */}
      <Dialog
        size="md"
        open={tiendaAguasVerdes}
        handler={() => setTiendaAguasVerdes(!tiendaAguasVerdes)}
        className=" shadow-none"
        nonce={undefined}
        onResize={undefined}
        onResizeCapture={undefined}
      >
        <div>
          <Button
            className="bg-black w-10 h-10 rounded-full absolute right-0 flex justify-center items-center m-5"
            onClick={() => setTiendaAguasVerdes(!tiendaAguasVerdes)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#fff"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </Button>

          <iframe
            title="maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.4530787859594!2d-80.25130761573114!3d-3.4819409329065985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x90339b82eee5b451%3A0xa414ce6fadeef6ff!2sFRITZ!5e0!3m2!1ses!2spe!4v1698079176305!5m2!1ses!2spe"
            className="w-full rounded-3xl"
            height="450"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </Dialog>
    </div>
  )
})
