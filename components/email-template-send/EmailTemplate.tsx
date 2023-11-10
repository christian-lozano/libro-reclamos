import * as React from 'react'

interface EmailTemplateProps {
  nombre: string
  telefono: string
  email: string
  apellido: string
  documento: string
}

export const emailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  nombre,
  apellido,
  telefono,
  email,
  documento,
}) => (
  <div>
    <div className="space-y-6 text-center mt-10 md:my-2 ">
      <img
        className="mx-auto h-11 w-11 rounded-xl object-cover"
        src="https://milink.pe/iconformsalto.webp"
        alt="milink Logo"
      />
    </div>

    <h1 className="capitalize"> {nombre} Quiere una Invitación</h1>
    <p className="capitalize ">
      Nombres y Apellidos: {nombre} {apellido}
    </p>
    <p>con numero de Documento: {documento} </p>
    <p>su numero de teléfono es: {telefono} </p>
    <p>correo electrónico: {email}</p>
    {/* <button>
      <a href="https://christianlozano.com">christian lozano</a>
    </button> */}
  </div>
)
