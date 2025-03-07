import express from 'express'
import { config } from 'dotenv'
import { formatData, getData } from './data.js'
import { startTelegramBot } from './bot.js'

config()
const app = express()
let localData = []

app.get('/data', (req, res) => {
    res.send(localData)
})

app.listen(process.env.PORT, () => {
    console.log(`Server is listening at http://localhost:${process.env.PORT}`)
})

try {
    const data = await getData()
    localData = formatData(data)
    console.log(`Load data success`)
} catch (error) {
    console.error(`Error load data: ${error}`)
}


try {
    const updateData = setInterval(async () => {
        const data = await getData()
        localData = formatData(data)
        console.log('Update local data')
    }, 86400000)
} catch (error) {
    console.error(`Error update local data: ${error}`)
}

startTelegramBot()

