import express from 'express';
import Routes from './app/routes/routes';
import * as dotenv from 'dotenv'
dotenv.config();
const app = express();
const {PORT} = process.env;

app.use(Routes);
app.use(express.static('app/public'));



app.listen(PORT, () => {
    console.log(`\t - Servidor rodando em localhost:${PORT}`);
})