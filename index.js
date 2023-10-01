const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const user = require('./model/user');
const connectMongoDB = require('./db')
const port = 5000 || process.env.PORT;

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
    let success = false;
    try {
        const { name, email, message } = req.body;
        await user.create({
            name: name,
            email: email,
            message: message
        })
        success = true;
        res.status(200).send({ success, msg: "message sent successfully" });
    } catch (error) {
        res.status(500).send({ success, msg: "Internal Server error" });
    }

})
connectMongoDB(process.env.mongoURI);

app.listen(port, () => {
    console.log(`server has started on port http://localhost:${port}`);
})



