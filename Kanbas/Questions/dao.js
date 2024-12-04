import Database from "../Database/index.js";


export function findQuestionWithQuizId(qid) {
    const { questions } = Database;
    const quizQuestions = questions.filter(
        question => question.qid.toString() === qid);

    return quizQuestions;
}
