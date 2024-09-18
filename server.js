const express = require("express");
const app = express();
const port = 3000;
const conn = require("./dbcon");
app.get("/", (req, res) => {   

    (async () => {
        try {
            const [rows] = await conn.execute("SELECT 1 + 1 as result");
            return res.send(rows[0].result === 2 ? "Connected to database" : "Failed to connect to database");
        } catch (error) {
            return res.send("Failed to connect to database");
        }
    })();
    

});
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});