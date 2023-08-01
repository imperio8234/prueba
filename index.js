const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());



app.get("/", (req, res) => {
    res.send("se creo este puerto de prueba")
})

const PORT = 4000;

app.listen(PORT, ()=> {
    console.log("se inicio en el puerto ",PORT)
})