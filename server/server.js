const express = require("express")

const server = express()
const parser = require("body-parser")
const cors = require("cors")

const PORT = process.env.PORT || 5500

server.use(parser.json())

server.use(parser.urlencoded{
    extended: true
})

server.use(cors())

server.get("", (req, res) => {
    res.send("welcome", PORT)
})

server.listen(port, () => {
    console.log(`server running at port ${PORT}`)
})