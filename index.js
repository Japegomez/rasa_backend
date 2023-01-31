const express = require('express')
var cors = require('cors')
const body_parser = require('body-parser')
const app = express()
const port = 4200

app.use(body_parser.urlencoded({ extended: true }))
app.use(
	cors({
		origin: '*',
	})
)
var catalogo = require('./catalogo.json')

app.post('/catalogo', function (req, res) {
	console.log(req)
	res.send(catalogo)
})

app.get('/palabrasclave', function (req, res) {
	res.json(['ayuda', 'adopcion'])
})

app.listen(port, () => {
	console.log(`app listening at http://localhost:${port}`)
})
