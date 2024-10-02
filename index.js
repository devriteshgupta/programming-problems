const express = require('express')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const app = express()
const router = express.Router()
const userRouter = express.Router()

const logRequest = (req, res, next) => {
    console.log(`Method : ${req.method} and the URL : ${req.url}`)
    next()
}

router.use(logRequest)

router.route('/user')
        .get((req, res) => {
            return res.json({
                message: "Login is verified",
            });
        })

app.use('/', router)


// userRouter.route

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Connection established at port : ${PORT}`);
})