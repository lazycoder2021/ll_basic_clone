import mongoose from "mongoose"; 

const questionSchema = mongoose.Schema({
    question: {
        type: String,
        required: true
    },
    answer1: {
        type: String,
        required: true
    },
    answer2: {
        type: String,
        required: true
    },
    answer3: {
        type: String,
        required: true
    },
    answer4: {
        type: String,
        required: true
    },
    correctAns: {
        type: String,
        required: true
    }
}); 

const Question = mongoose.model('Question', questionSchema); 

export default Question; 
