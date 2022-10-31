import express from 'express';
import Routes from './app/routes/routes';
import * as dotenv from 'dotenv'
dotenv.config();
import { engine } from 'express-handlebars';
const app = express();
const {PORT} = process.env;

app.use(Routes);
app.use(express.static('public'));
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.listen(PORT, () => {
    console.log(`\t - Servidor rodando em localhost:${PORT}`);
})