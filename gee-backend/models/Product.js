const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: String,
    required: true,
    validate: {
      validator: (v) => /^https?:\/\/.*\.(jpg|jpeg|png|webp|gif)(\?.*)?$/i,
      message: props => `${props.value} is not a valid image URL!`
    }
  },
  description: {
    type: String,
    required: true,
  },
  features: {
    type: [String],
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0
  }
}, { timestamps: true });


module.exports = mongoose.model("Product", productSchema);
