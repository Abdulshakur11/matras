const PORT = process.env.PORT || 4000
const sequelizeConnection = 'postgres://postgres:0000@localhost:5432/matras';
const elephantConnection = "postgres://hoovzkvq:tFfpKZEAZWFYfM2W8DkAN9rGrcpy27tQ@arjuna.db.elephantsql.com/hoovzkvq"
const SECRET_KEY = "MAXFIY_KALIT"

module.exports = {
  PORT,
  sequelizeConnection,
  SECRET_KEY,
  elephantConnection
}