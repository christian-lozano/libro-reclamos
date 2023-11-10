import type { NextApiRequest, NextApiResponse } from 'next'
import { Resend } from 'resend'

import { emailTemplate } from '@/components/email-template-send/EmailTemplate'

const resend = new Resend('re_CApSewKk_Lb6awHRVv2deVEfmsfDbEUWm')

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const {
      nombre,
      email,
      telefono,
      apellido,
      documento,
      direccion,
      quejaReclamo,
      detalleReclamo,
    } = req.body
    const data = await resend.emails.send({
      from: 'Fritz Sport <onboarding@resend.dev>',
      to: ['christian.lozano.adrianzen@gmail.com'],
      subject: 'Libro de Reclamaciones',
      react: emailTemplate({
        nombre,
        email,
        telefono,
        apellido,
        documento,
        direccion,
        quejaReclamo,
        detalleReclamo,
      }),
    })
    res.status(200).json(data)
  } catch (error) {
    res.status(400).json(error)
  }
}
