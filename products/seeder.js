import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'
import users from './data/users.js'
import products from './data/products.js'
import User from './models/userModel.js'
import Product from './models/productModel.js'
import Order from './models/orderModel.js'
import connectDB from './config/db.js'
import axios from 'axios'

dotenv.config()

connectDB()

const importData = async () => {
  try {
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()

    const config = {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwYTY0MTk1N2U1MDJhMDAyZDUzNzQ2MSIsImlzQWRtaW4iOnRydWUsIm5hbWUiOiJBZG1pbiBVc2VyIiwiaWF0IjoxNjIxNTA4ODYzLCJleHAiOjE2MjQxMDA4NjN9.ZnfPThpU6NBXKA3s9qtmEKTv6CwOIvruPjFKPv63hc4`,
                                     },
    }
    const { data } = await axios.get(process.env.REACT_APP_DB_USER+`/api/users`, config)
    // const createdUsers = await User.insertMany(users)

    const adminUser = data[0]._id

    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser }
    })

    await Product.insertMany(sampleProducts)

    console.log('Data Imported!'.green.inverse)
    process.exit()
  } catch (error) {
    console.error(`${error}`.red.inverse)
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()

    console.log('Data Destroyed!'.red.inverse)
    process.exit()
  } catch (error) {
    console.error(`${error}`.red.inverse)
    process.exit(1)
  }
}

if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}
