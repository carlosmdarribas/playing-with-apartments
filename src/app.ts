import express from 'express';
import morgan from 'morgan';
import cors from 'cors'
import fileUpload from 'express-fileupload';

import config from './config';
import routes from './routes/routes';

const app = express();

app.use(fileUpload());
app.set('PUERTO', config.PORT);

app.use(morgan('dev')); 
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false})); 

app.use(routes);
app.use('/public', express.static(config.PUBLIC_DIR));

export default app;