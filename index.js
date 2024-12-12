const app = require('./app')
const config = require('./utils/config')
const logger = require('./utils/logger')


app.listen(config.PORT, () => {
  logger.info(`Server running on port ${config.PORT}`)
})

// const express = require('express')
// const morgan = require('morgan')
// const cors = require('cors')
// const app = express()

// const app = require('./app')
// const config = require('./utils/config')
// const logger = require('./utils/logger')

// app.use(express.json())
// app.use(morgan('dev'))
// app.use(cors())
// app.use(express.static('dist')) //serve static files from dist folder

// //configuration to show body of post request when using morgan for logging requests
// morgan.token('body', (req) => JSON.stringify(req.body))
// app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))


// app.get('/api/persons/:id', (req, res) => {
//   const person = persons.find(p => p.id === req.params.id)
//   if(person) {
//     res.json(person)
//   } else {
//     res.status(404).end()
//   }

// })

// app.delete('/api/persons/:id', (req, res) => {
//   const id = req.params.id
//   persons = persons.filter(person => person.id !== id)

//   res.status(204).end()
// })

// app.post('/api/persons', (req, res) => {
//   const person = req.body
//   person.id = Math.floor(Math.random() * 1000000)

//   if(!person.name || !person.number) {
//     return res.status(400).json({ error: 'name or number missing' })
//   }

//   const existingPerson = persons.find(p => p.name === person.name)

//   if(existingPerson) {
//     return res.status(400).json({ error: 'name must be unique' })
//   }

//   persons = persons.concat(person)

//   res.json(person)

// })

// app.listen(config.PORT, () => {
//   logger.info(`Server running on port ${config.PORT}`)
// })
