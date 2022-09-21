import express, { Request, Response } from 'express'

const app = express();

app.get('/hey', (req: Request, res: Response) => {
    res.send('hi')
})

app.listen(8000, () => {
    console.log("Server is running successfully")
})
