import express from 'express'
import { ContactController } from '../controllers/ContactController.js';

const router = express.Router();

router.post('/contact', ContactController )

export default router;