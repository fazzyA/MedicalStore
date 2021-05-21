import jwt from 'jsonwebtoken'

const generateToken = (id, isAdmin, name) => {
  return jwt.sign({ id, isAdmin, name }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  })
}

export default generateToken
