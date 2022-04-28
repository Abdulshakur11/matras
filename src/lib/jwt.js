const { sign, verify } = require('jsonwebtoken');
const { SECRET_KEY } = require('../config')
 
const signUser = (payload) => sign(payload, SECRET_KEY);
const verifyUser = (payload) => verify(payload, SECRET_KEY);

module.exports = {
  signUser,
  verifyUser
}