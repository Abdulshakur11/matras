const PORT = process.env.PORT || 4000
const sequelizeConnection = 'postgres://postgres:0000@localhost:5432/matras'

module.exports = {
  PORT,
  sequelizeConnection
}