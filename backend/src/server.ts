import express from 'express';
import path from 'path';
import './database/connection';
import 'express-async-errors';
import cors from 'cors';

import routes from './routes'
import errorHandler from './errors/handler';

app.use(cors())
const app = express();
app.use(express.json())
app.use(routes)
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))
app.use(errorHandler);

app.listen(3333);
