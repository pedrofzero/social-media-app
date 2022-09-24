import express, { Request, Response } from 'express'
import cors from 'cors'
import bodyParser, { urlencoded } from 'body-parser';
import fileupload from 'express-fileupload'
import cookieparser from 'cookie-parser'
import { authRouter } from './routes/auth';
import { usersRouter } from './routes/users';
import { postRouter } from './routes/post';
import { verifyJWT } from './middleware/jwt';

const app = express();
app.use(cors({ origin: "http://localhost:3000" }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(fileupload())
app.use(cookieparser())


// Routes
app.use('/auth', authRouter)

app.use(verifyJWT)
app.use('/post', postRouter)
app.use('/users', usersRouter)


// Start server
app.listen(8000, () => {
    console.log("Server is running successfully")
})
