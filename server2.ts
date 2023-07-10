import express, { Request, Response } from 'express';
import axios from 'axios';

const app = express();
const port = 3000;

app.use(express.json());

app.post('/api/data', (req: Request, res: Response) => {
    const requestData = req.body;
    const responseData = {
        message: 'data accepted',
        value: requestData.value * 3,
    };
    res.json(responseData);
});

app.listen(port, () => {
    console.log('Server 2 is running');
});

async function sendGetRequest() {
    try {
        const response = await axios.get('http://localhost:4000/api/data');
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}
sendGetRequest();
