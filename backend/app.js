const express = require("express")
const app = express()
const errorMiddleWare = require("./middleware/error")
const cookieParser = require("cookie-parser")
cors = require("cors");

app.use(cors());

app.use(express.json())
app.use(cookieParser())

//Route Imports
const product = require("./routes/productRoute")
const user = require("./routes/userRoute")
const order = require("./routes/orderRoute")

app.use("/api/v1", product)
app.use("/api/v1", user)
app.use("/api/v1", order)

//Middlewarer for errors
app.use(errorMiddleWare)


module.exports = app