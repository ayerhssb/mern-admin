const express = require("express");
const app = express()

const router = require("./router/auth-router");
app.use(express.json());

app.use("/api/auth", router);

// app.get('/', (req, res) => {
//         res.status(200).send("Reaching the Server");
// });

const PORT = 5000;
app.listen(PORT, ()=> {
    console.log(`Server running on port ${PORT}`)
})