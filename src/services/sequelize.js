import Sequelize from 'sequelize'

const sequelize = new Sequelize(
  'epiz_24818388_loja_mundo_tech',
  'epiz_24818388',
  'natanael1997',
  {
    host: 'sql313.epizy.com',
    dialect: 'mysql',
  }
)

try {
  sequelize.authenticate()
} catch (error) {
  console.log('error mysql: ' + error)
}
