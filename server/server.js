const server = require("express")()
const PORT = process.env.PORT || 5500

server.get("", (req, res) => {
    res.send("server running at port", PORT)
})
