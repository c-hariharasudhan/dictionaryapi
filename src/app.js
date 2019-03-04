import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import routes from './routes/userRoutes';

const app = express();

const PORT = 2019;
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://admin:abc123!@ds035787.mlab.com:35787/dictionary')

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

routes(app)

app.get('/', (req, res)=> {
    res.send('Thank God!');
})
app.get('/health', (req, res) => {
    console.log(mongoose.connection.readyState)
    res.send('Mongo connection is ' + mongoose.connection.readyState)
})
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})