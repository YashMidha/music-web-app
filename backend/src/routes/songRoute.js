import {addSong, listSong, removeSong} from '../controllers/songController.js';
import express from 'express';
import upload from '../middleware/multer.js';

const songRouter = express.Router();

songRouter.post('/add', upload.fields([{name:'image', maxCount:1}, {name: 'audio', maxCount: 1}]), addSong);  // i dont understand the fileds part
songRouter.get('/list', listSong);
songRouter.post('/remove', removeSong)

export default songRouter;
