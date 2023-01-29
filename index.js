const express = require('express')
var cors = require('cors')
const app = express()
const port = 3001
app.use(
	cors({
		origin: '*',
	})
)
app.get('/', function (req, res) {
	res.send({ mensaje: 'hello world' })
})

app.listen(port, () => {
	console.log(`app listening at http://localhost:${port}`)
})
