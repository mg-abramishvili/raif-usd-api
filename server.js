const express = require('express')
const app = express()
const axios = require('axios')
const cors = require('cors')

app.use(cors())

app.get("/", async (req, res) => {
    const response = await axios.get('https://www.raiffeisen.ru/oapi/currency_rate/get/?source=RCONNECT&currencies=USD')
    
    res.json(await response.data)
})

app.listen(3000, () => {
    console.log('Listening on port 3000')
})