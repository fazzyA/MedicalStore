// import axios from 'axios'
// import asyncHandler from 'express-async-handler'

// export const authCheck = asyncHandler(async (req, res) => {
//     let { token } = req.body
//     let resp = await axios.post(process.env.REACT_APP_DB_USER + `/api/users/authchk`, { token })
//     res.json({ resp })
//     console.log(resp)
// })