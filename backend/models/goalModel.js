// é nas models que definimos as fontes que precisaremos buscar
// Aqui vamos criar o esboço onde vamos definir os campos para essa fonte
const mongoose = require("mongoose");

const goalSchema = mongoose.Schema(
  {
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