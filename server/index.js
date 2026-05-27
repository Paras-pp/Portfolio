const express = require('express')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors({ origin: ['http://localhost:3000', 'http://127.0.0.1:3000'] }))
app.use(express.json())

app.post('/api/contact', (req, res) => {
  const { name, email, subject, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email and message are required.' })
  }

  console.log('\n--- New Contact Submission ---')
  console.log(`From:    ${name} <${email}>`)
  console.log(`Subject: ${subject || '(none)'}`)
  console.log(`Message: ${message}`)
  console.log('-----------------------------\n')

  res.json({ success: true })
})

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})
