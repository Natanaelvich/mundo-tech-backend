import Product from '../models/Product'

export default {
  async index(req, res) {
    const products = await Product.find()
    res.json(products)
  },

  async store(req, res) {
    const { name, price, amount } = req.body
    const { location: url } = req.file
    console.log(url)

    const product = await Product.create({
      name,
      price,
      amount,
      url_image: url,
    })
    return res.json(product)
  },

  async update(req, res) {
    const { _id } = req.params
    const { location: url } = req.file

    await Product.updateOne(
      { _id: _id },
      {
        $set: { url_image: url },
      }
    )

    res.json({ _id, url })
  },
}
