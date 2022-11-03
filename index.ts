import express from 'express';
import Routes from './app/routes/routes';
import * as dotenv from 'dotenv'

dotenv.config();
import { create } from 'express-handlebars';
import handlebarsHelpers from './config/handlebars-helpers';
const app = express();
const {PORT} = process.env;

const hbs = create({
    extname:'handlebars',
    helpers: handlebarsHelpers
});

app.use(express.urlencoded({ extended: false }))
    .use(express.json())
    .use(Routes)
    .use(express.static('public'))
    .engine('handlebars', hbs.engine)
    .set('view engine', 'handlebars')
    .set('views', './views');
    

app.listen(PORT, () => {
    console.log(`\t - Servidor rodando em localhost:${PORT}`);
})