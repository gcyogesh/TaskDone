import express from 'express'
import { ContactController, DeleteThatInfo, EditThatInfo, GetThatInformation } from '../controllers/ContactController.js';

const router = express.Router();

router.post('/contact', ContactController )
router.get('/contact',GetThatInformation );
router.delete('/contact/:id', DeleteThatInfo); 
 

export default router; 