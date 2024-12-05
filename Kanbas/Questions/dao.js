import Database from "../Database/index.js";


export function findQuestionWithQuizId(qid) {
    const { questions } = Database;
    const quizQuestions = questions.filter(
        question => question.qid.toString() === qid);

    return quizQuestions;
}


export function findQuestionWithQuId(quid) {
    const { questions } = Database;
    const question = questions.find(
        question => question.quid.toString() === quid);

    return question;
}
  
export function saveQuestion(question) {
    const { questions } = Database;
    const dbQuestion = questions.find(q=> q.quid === question.quid)
    if(!dbQuestion){
        // pushing new question
        questions.push(question);
    }else{
        // updating existing question
        Object.assign(dbQuestion, question);
    }
    // console.log(questions);
    return question;
}
