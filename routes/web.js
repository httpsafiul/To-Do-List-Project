import express from 'express';
const router =  express.Router();

import listController from '../controllers/listController.js';

router.get('/', listController.getAllDoc)
router.post('/', listController.createDoc)
router.post('/delete/:id', listController.deleteDocById)

export default router;