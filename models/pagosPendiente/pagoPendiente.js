import mongoose, { Schema, models } from "mongoose";

const PagoCompletadoSchema = new Schema(
  {
    id_payer: {
      type: String,
      required: [true,"tipo id_payer es necesaria"],
      trim:true

    },
    nombres: {
      type: String,
      required: [true,"tipo es nombres"],
      trim:true

    },
    email: {
      type: String,
      required: [true,"tipo necesaria email"],
      trim:true

    },
    documento: {
      type: String,
      required: [true,"tipo necesaria documento"],
      trim:true

    },
    telefono: {
      type: String,
      required: [true,"tipo necesaria telefono"],
      trim:true

    },
    area_code: {
      type: String,
      required: [true,"tipo necesaria area_code"],
      trim:true

    },

  },



  { timestamps: true }
);

const PagoCompletado = models.pago_completados || mongoose.model("pago_completados", PagoCompletadoSchema);
export default PagoCompletado;
