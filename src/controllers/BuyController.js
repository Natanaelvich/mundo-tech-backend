const Buy = require('../models/Buys')
const Product = require('../models/Product')

module.exports = {
  async index(req, res) {
    const buys = await Buy.find()
      .sort('-createdAt')
      .populate('product')
      .exec()

    res.json(buys)
  },

  async store(req, res) {
    const { product } = req.headers
    const { amount, total, createdAt } = req.body

    const sale = await Buy.create({
      amount,
      total,
      product,
      createdAt,
    })

    const amounProduct = await Product.findById(product).select('amount -_id')

    if (amount > amounProduct.amount) {
      console.log('entrando')
      return res.status(404).json({ error: 'quantidade ultrapass o estoque' })
    }

    const updateAmount = amounProduct.amount - amount
    await Product.update({ _id: product }, { $set: { amount: updateAmount } })

    return res.json(sale)
  },
}
