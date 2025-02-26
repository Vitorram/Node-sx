//const express = require('express')
import express from 'express'

import userRouter from './routers/userRouter.js'

const app = express()
const port = 3000

app.use('/user', userRouter)

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})