const express = require('express')
const cors = require('cors');
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
require('dotenv').config()
const port = process.env.PORT || 5000

connectDB()

const app = express()

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/tasks', require('./routes/taskRoutes'))

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))