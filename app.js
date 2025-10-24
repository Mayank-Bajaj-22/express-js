import express from "express";

const app = express();

const PORT = process.env.PORT || 3000;
app.get("/", (req, res) => {
    res.send("<h1>Hello Mayank!</h1>")
})

app.get("/about", (req, res) => {
    res.send("<h1>About Page</h1>")
})

// console.log(process)

app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}: http://localhost:${PORT}/`)
})