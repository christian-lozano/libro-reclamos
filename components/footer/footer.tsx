import {
  Drawer,
  Input,
  Card,
  Textarea,
  Select,
  Option,
} from '@material-tailwind/react'
import type { FormEvent } from 'react'
import { memo, useEffect, useState } from 'react'

import { Button } from '../@ui/button/button'

export type FooterProps = Record<string, unknown>

export const Footer = memo(function Footer() {
  const [open, setOpen] = useState(!false)

  const closeDrawer = () => setOpen(false)

  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')
  const [documento, setDocumento] = useState('')

  const [telefono, setTelf] = useState('')
  const [direccion, setDireccion] = useState('')
  const [quejaReclamo, setQuejaReclamo] = useState('')
  const [detalleReclamo, setDetalleReclamo] = useState('')

  const [email, setEmail] = useState('')
  const [desable, setDesable] = useState(false)
  const [mensajeEnviado, setMensajeEnviado] = useState(false)

  const sendMail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setDesable(true)
    setMensajeEnviado(true)
    await fetch('/api/send', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        nombre,
        apellido,
        documento,
        email,
        telefono,
        direccion,
        quejaReclamo,
        detalleReclamo,
      }),
    })

    setMensajeEnviado(false)
    // setDesable(false)
    setNombre('')
    setEmail('')
    setTelf('')
    setApellido('')
    setDocumento('')
    setDireccion('')
    setQuejaReclamo('')
    setDetalleReclamo('')
  }
  useEffect(() => {
    if (
      nombre.length <= 3 ||
      email.length <= 3 ||
      telefono.length <= 3 ||
      apellido.length <= 3 ||
      documento.length <= 3 ||
      direccion.length <= 3 ||
      quejaReclamo.length <= 3 ||
      detalleReclamo.length <= 10
    ) {
      setDesable(false)
    } else {
      setDesable(true)
    }
  }, [nombre, telefono, email, apellido, documento, direccion, quejaReclamo, detalleReclamo])

  return (
    <div>
      {/* form Libro */}
      <Drawer
        open={open}
        className="flex justify-center w-full"
        placement="bottom"
        size={1000}
        nonce={undefined}
        onClose={closeDrawer}
        onResize={undefined}
        onResizeCapture={undefined}
      >
        <Card
          color="transparent"
          shadow={false}
          nonce={undefined}
          className="2xl:w-2/6 w-4/4"
          onResize={undefined}
          onResizeCapture={undefined}
        >
          <div className="flex justify-center">
            <div
              className={`${
                !mensajeEnviado ? 'hidden' : 'block'
              } absolute  top-8 xl:w-full w-5/6 py-3 flex justify-center text-center bg-blue-600 rounded-lg text-white `}
            >
              Solicitud Enviada
            </div>
          </div>
          <form className="mt-8 mb-2 w-[full]" onSubmit={(e) => sendMail(e)}>
            <div className=" flex flex-col  2xl:gap-3 laptop:gap-8 gap-x-6  gap-y-3">
              <h6 className="mb-3 text-black text-2xl font-semibold text-center">
                Libro de Reclamaciones
              </h6>
              {/* <div className="grid grid-cols-2 sm:grid-cols-2 gap-x-1 lg:grid-cols-2 xl:grid-cols-2 laptop:grid-cols-2 2xl:grid-cols-2 laptop:gap-y-6 2xl:gap-y-3  gap-y-2  "></div> */}
              <Input
                size="lg"
                label="Nombres"
                nonce={undefined}
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                onResize={undefined}
                onResizeCapture={undefined}
              />
              <Input
                value={apellido}
                size="lg"
                label="Apellidos"
                nonce={undefined}
                onChange={(e) => setApellido(e.target.value)}
                onResize={undefined}
                onResizeCapture={undefined}
              />
              <Input
                value={documento}
                size="lg"
                label="Doc de Identidad"
                nonce={undefined}
                onChange={(e) => setDocumento(e.target.value)}
                onResize={undefined}
                onResizeCapture={undefined}
              />
              <Input
                value={telefono}
                size="lg"
                label="Numero de Teléfono"
                nonce={undefined}
                onChange={(e) => setTelf(e.target.value)}
                onResize={undefined}
                onResizeCapture={undefined}
              />{' '}
              <Input
                // className="w-[80%]"
                size="lg"
                label="Dirección"
                value={direccion}
                nonce={undefined}
                onResize={undefined}
                onChange={(e) => setDireccion(e.target.value)}
                onResizeCapture={undefined}
              />
              <Input
                // className="w-[80%]"
                value={email}
                size="lg"
                label="Correo Electrónico"
                nonce={undefined}
                onChange={(e) => setEmail(e.target.value)}
                onResize={undefined}
                onResizeCapture={undefined}
              />
              <Select
                label="Queja o Reclamo"
                nonce={undefined}
                onResize={undefined}
                onResizeCapture={undefined}
                onChange={(e = 'Queja') => setQuejaReclamo(e)}
              >
                <Option value="Queja" className="w-[80%]">
                  Queja
                </Option>
                <Option value="Reclamo">Reclamo</Option>
              </Select>
              <Textarea
                value={detalleReclamo}
                size="md"
                label="Detalle de Reclamo o Queja"
                nonce={undefined}
                onChange={(e) => setDetalleReclamo(e.target.value)}
                onResize={undefined}
                onResizeCapture={undefined}
              />
            </div>
            <div className="w-full flex justify-center">
              {desable ? (
                <button
                  type="submit"
                  className="mt-2 px-8  py-2 rounded-lg bg-blue-600  text-white"
                >
                  Enviar
                </button>
              ) : (
                <Button className="mt-2 px-8  py-2 rounded-lg bg-red-500  text-white">
                  Enviar
                </Button>
              )}
            </div>
          </form>
        </Card>
      </Drawer>
    </div>
  )
})
