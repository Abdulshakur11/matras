const PORT = process.env.PORT || 4000
const sequelizeConnection = 'postgres://postgres:0000@localhost:5432/matras'
const SECRET_KEY = "MAXFIY_KALIT"

module.exports = {
  PORT,
  sequelizeConnection,
  SECRET_KEY
}