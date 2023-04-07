const express = require('express');
const app = express();

// Configs
app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const dotenv = require('dotenv');
dotenv.config();


app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
});


// 404
app.use((req, res, next) => {
    res.status(404).send("Page not found");
})

// Listen
app.listen(process.env.PORT, () => {
    console.log(`Server successfully running on port ${process.env.PORT}`);
});
