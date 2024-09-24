import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import authRoute from "./routes/auth-route.js"
import memberRoute from "./routes/member-route.js"
import galleryRoute from "./routes/gallery-route.js"
import eventRoute from "./routes/event-routes.js"
import cookieParser from 'cookie-parser'
import path from 'path';
dotenv.config()

// <<<<<<----------Databse Code-START--------->>>>>>
const URI = process.env.MONGO
mongoose.connect(URI, { dbName: "99s_INDIA" })
    .then(() => console.log("Database connected Successfully!!!"))
    .catch((error) => console.log("Failed to connect Database!!!!!", error))
// <<<<<<----------Databse Code-END--------->>>>>>

const __dirname = path.resolve();

const app = express()
app.use(express.json())
app.use(cookieParser())


// <<<<<<----------Server Live Code-START--------->>>>>>
const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
    console.log(`Server is live on port ${PORT}!!!`)
})
// <<<<<<----------Server Live Code-END--------->>>>>>


// <<<<<<----------APi's-START--------->>>>>>
app.use("/api/auth", authRoute)
app.use("/api/member", memberRoute)
app.use("/api/gallery", galleryRoute)
app.use("/api/event", eventRoute)


app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
})

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500
    const errMessage = err.message || 'Internal Server Error'
    return res.status(statusCode).json({
        success: false,
        statusCode,
        errMessage
    })
})
// <<<<<<----------APi's-END--------->>>>>>

export default app