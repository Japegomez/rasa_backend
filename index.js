const express = require('express')
var cors = require('cors')
const app = express()
const port = 4200

app.use(
	cors({
		origin: '*',
	})
)
var catalogo = require('./catalogo.json')
app.get('/', function (req, res) {
	res.json(catalogo)
	// comentario prueba
})

app.get('/palabrasclave', function (req, res) {
	res.json(['javi', 'adopcion'])
})

app.listen(port, () => {
	console.log(`app listening at http://localhost:${port}`)
})
