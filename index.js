import express from 'express'
import bodyparser from 'body-parser'

const app = express()
const PORT= 5000

app.use(bodyparser.json())

app.listen(PORT,() => console.log(`server Runnuning on port:http://localhost:${PORT}`))