const express = require('express')
const path = require('path')
const app = express()
const dotenv = require('dotenv')

dotenv.config()
const PORT = process.env.SERVER_PORT || 8000

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, 'dist')))

// Serve the index.html file for all other routes
app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
