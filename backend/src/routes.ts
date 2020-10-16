import { Router } from 'express';
import bodyParser from 'body-parser';
import multer from 'multer';

import OrphanagesController from './controllers/OpharnagesController';
import uploadConfig from './config/upload';

const routes = Router();
const upload = multer(uploadConfig);
const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({ extended: false })

routes.get('/orphanages', jsonParser, OrphanagesController.index)
routes.get('/orphanages/:id', jsonParser, OrphanagesController.show)
routes.post('/orphanages', upload.array('images'), jsonParser, OrphanagesController.create)

export default routes;
