// é nas models que definimos as fontes que precisaremos buscar
// Aqui vamos criar o esboço onde vamos definir os campos para essa fonte
const mongoose = require("mongoose");

const goalSchema = mongoose.Schema(
  {
  // Com cada objetivo, precisaremos saber qual foi o usuário que criou aquele objetivo
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    },
    text: {
      type: String,
      required: [true, "Por favor, adicione um texto"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Goal', goalSchema)