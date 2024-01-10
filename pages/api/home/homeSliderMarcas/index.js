import { dbConnect } from '../../../../utils/mongoose'
import Taks from '../../../../models/home/homeCarouselMarcas'
dbConnect()
export default async function handler(req, res) {
  const { method, body } = req
  switch (method) {
    case 'GET':
      try {
        const tasks = await Taks.find()
        return res.status(200).json(tasks)
      } catch (error) {
        return res.status(500).json({ error: error.message })
      }

    case 'POST':


    try {
        console.log(body)
        const newTask = new Taks(body)
        const saveTasks = await newTask.save()
        return res.status(201).json(saveTasks)
        
    } catch (error) {
        return res.status(500).json({ error: error.message })
        
    }

    default:
      return res.status(400).json({ msg: 'this method not difined' })
  }
}
