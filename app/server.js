import express from 'express';
import Routes from './routes/routes.js';
import * as dotenv from 'dotenv'

dotenv.config();
const app = express();
const {PORT} = process.env;
const HOST = "0.0.0.0";
app.use(Routes);
app.use(express.static('app/public'));

app.listen(PORT, HOST);

