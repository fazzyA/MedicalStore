import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin1@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'John Doe',
    email: 'john1@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Jane Doe',
    email: 'jane1@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
