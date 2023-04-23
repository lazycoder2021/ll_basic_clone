import Question from "../model/Question.js";




export const testCtrl = async (req, res) => {
    res.send('testing test controller')
}; 

export const createQuestionCtrl = async (req, res) => {
    const question = await Question.create({
        question: req.body.question,
        answer1: req.body.answer1,
        answer2: req.body.answer2, 
        answer3: req.body.answer3,
        answer4: req.body.answer4,
        correctAns: req.body.correctAns
    })

    res.status(200).json({ 'msg': 'question created successfully', question })
}; 

export const getQuestionsCtrl = async (req, res) => {
    const questions = await Question.find({});

    res.status(200).json({ 'msg': 'question fetched successfully', questions })
};


export const getQuestionCtrl = async (req, res) => {
    const questions = await Question.find({_id:req.params.id});

    res.status(200).json({ 'msg': 'question fetched successfully', questions })
};

export const updateQuestionCtrl = async (req, res) => {
    const question = await Question.findByIdAndUpdate({ _id: req.params.id }, (req.body), { new: true });

    res.status(200).json({ 'msg': 'question updated successfully', question })
};

export const delQuestionCtrl = async (req, res) => {
    const question = await Question.findByIdAndDelete({ _id: req.params.id });

    res.status(200).json({ 'msg': 'question deleted successfully', question })
};

