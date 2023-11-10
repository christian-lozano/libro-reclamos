import * as React from 'react'

interface EmailTemplateProps {
  nombre: string
  telefono: string
  email: string
  apellido: string
  documento: string
  direccion: string
  quejaReclamo: string
  detalleReclamo: string
}
export const emailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  nombre,
  apellido,
  telefono,
  email,
  documento,
  direccion,
  quejaReclamo,
  detalleReclamo,
}) => (
  <div>
    <div>
      <img
        className="mx-auto h-11 w-11 rounded-xl object-cover"
        src="https://fritz-sport.vercel.app/static/icons/icon-144x144.png"
        alt="milink Logo"
      />
    </div>

    <h1 className="uppercase">
      {quejaReclamo === 'Queja' ? 'Recibiste Una: ' : 'Recibiste Un: '}{' '}
      {quejaReclamo}
    </h1>
    <p className="capitalize ">
      <b>Nombres y Apellidos</b>: {nombre} {apellido}
    </p>
    <p>
      <b>Numero de Documento </b>: {documento}{' '}
    </p>
    <p>
      <b>Numero de teléfono es</b>: {telefono}{' '}
    </p>
    <p>
      <b>Correo electrónico</b>: {email}
    </p>
    <p>
      <b>Direccion</b>: {direccion}
    </p>
    <p>
      <b>{quejaReclamo}</b>: {detalleReclamo}
    </p>

    {/* <button>
      <a href="https://christianlozano.com">christian lozano</a>
    </button> */}
  </div>
)
