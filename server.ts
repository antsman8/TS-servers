import express, { Request, Response } from 'express';
import axios from 'axios';

const app = express();
const port = 4000;

app.get('/api/data', (req: Request, res: Response) => {
    const data = {
        message: 'Hello, WBPROD!',
        body: '100',
    };
    res.json(data);
});

app.listen(port, () => {
    console.log('Server 1 is running');
});
async function sendPostRequest() {
    const dataToSend = {
        value: 10,
    };

    try {
        const response = await axios.post(
            'http://localhost:3000/api/data',
            dataToSend
        );
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}
sendPostRequest();
