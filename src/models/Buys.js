const mongoose = require('mongoose')

const BuySchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
})

module.exports = mongoose.model('Buy', BuySchema)
