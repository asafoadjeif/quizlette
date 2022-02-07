import express from "express"
import cors from "cors"
import userRoute from "./routes/user.route.js"
// import scoreboard from "./models/user.schema.js"

const app = express()

app.use(cors())
app.use(express.json())

// app.use("/api/v1/scoreboard", scoreboard)

app.get("/", (req, res) => {
    res.send("Welcome to quizlette api")
})

app.get("/users", userRoute)
app.use("*", (req, res) => res.status(404).json({ error: "not found"}))

export default app;