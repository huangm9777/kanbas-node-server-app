import * as dao from "./dao.js";


export default function QuestionRoutes(app) {

    // 
    app.get("/api/quizzes/question/:quizId", (req, res) => {
        const { quizId } = req.params;
        const questions = dao.findQuestionWithQuizId(quizId);
        res.send(questions);
    });

    app.get("/api/question/:quId", (req, res) => {
        const { quId } = req.params;
        const question = dao.findQuestionWithQuId(quId);
        res.send(question);
    });



    app.post("/api/question/:quId", (req, res) => {
        // const { quId } = req.params;
        const question = {
            ...req.body,
        };
        const newQuestion = dao.saveQuestion(question);
        res.send(newQuestion);
    });


}