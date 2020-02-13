const { getMonth } = require('date-fns')
const Buy = require('../models/Buys')

module.exports = {
  async index(req, res) {
    const buys = await Buy.find()

    // get months
    const totals = []
    buys.map(buy => {
      totals.push(getMonth(buy.createdAt))
    })
    const totalsUnique = Array.from(new Set(totals))

    // get database totals month
    const totalsMonth = []
    for (let i = 0; i < totalsUnique.length; i++) {
      totalsMonth.push(
        buys
          .filter(buy => getMonth(buy.createdAt) === totalsUnique[i])
          .reduce((a, buy) => ({
            month: totalsUnique[i],
            total: a.total + buy.total,
          }))
      )
    }
    res.json(totalsMonth)
  },
}
