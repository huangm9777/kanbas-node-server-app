import * as dao from "./dao.js";


export default function QuestionRoutes(app) {

    // 
    app.get("/api/quizzes/question/:quizId", (req, res) => {
        const { quizId } = req.params;
        const questions = dao.findQuestionWithQuizId(quizId);
        res.send(questions);
    });


}