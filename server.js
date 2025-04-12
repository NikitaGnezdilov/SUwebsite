const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()
const PORT = 80
const db = new sqlite3.Database('./database.sqlite')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))



в
app.get('/main', (req, res) => {
	res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.get('/', (req, res) => {
	res.send('Hello World!')
})

app.post('/submit', (req, res) => {
	const { email, phone } = req.body
	db.run(
		`INSERT INTO contacts (email, phone) VALUES (?, ?)`,
		[email, phone],
		function (err) {
			if (err) {
				return res.status(500).send('Error occurred while saving data.')
			}
			res.status(200).send('Data saved successfully!')
		}
	)
})

app.listen(PORT, () => {
	console.log(`Сервер запущен на http://beastweb.ru:${PORT}`)
})


