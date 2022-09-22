import express, { Request, Response } from 'express'
import { authRouter } from './routes/auth';
import cors from 'cors'
import bodyParser, { urlencoded } from 'body-parser';

const app = express();
app.use(cors({
    origin: "*"
}))
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())

app.use('/auth', authRouter)

app.listen(8000, () => {
    console.log("Server is running successfully")
})
