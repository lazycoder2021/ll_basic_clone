import express from "express";
import { testCtrl, createQuestionCtrl, getQuestionsCtrl, getQuestionCtrl, delQuestionCtrl, updateQuestionCtrl } from "../controllers/testCtrl.js";
const router = express.Router();


router.post('/question', createQuestionCtrl); 
router.get('/questions', getQuestionsCtrl);
router.get('/question/:id', getQuestionCtrl);
router.delete('/question/:id', delQuestionCtrl);
router.put('/question/:id', updateQuestionCtrl);


export default router; 
