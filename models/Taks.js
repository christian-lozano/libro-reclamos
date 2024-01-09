import { Schema, model, models } from 'mongoose'

const TaskShema = new Schema(
  {
    title: {
      type: String,
      require: [true, 'title requerido'],
      unique: true,
      trim: true,
      maxlength: [40, 'title maximo de longitud 40 caracteres'],
    },
    description: {
      type: String,
      require: [true, 'description requerido'],
      unique: true,
      trim: true,
      maxlength: [200, 'description maximo de longitud 200 caracteres'],
    },
  },

  {
    timestamps: true,
    versionKey: false,
  }
)

export default models.Task ||  model('Task', TaskShema)
