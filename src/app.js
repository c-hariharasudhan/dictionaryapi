import express from 'express';
import bodyParser from 'body-parser';

const app = express();

let port = 2019;

app.get('/', (req, res)=> {
    res.send('Thank God!');
})
app.listen(port, () => {
    console.log('Server is up & running on port : ' + port);
})