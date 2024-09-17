const express = require("express");
const app = express();
const port = 3000;
app.get("/", (req, res) => {
    res.send("Hello World it is working!. and i am happy to see you");   
});
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});