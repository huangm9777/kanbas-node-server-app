import * as dao from "./dao.js";



export default function QuizzesRouts(app) {


    app.get("/api/quizzes/course/:courseId", (req, res) => {
        const { courseId } = req.params;
        const quizzes = dao.findQuizWithCid(courseId);
        res.send(quizzes);
    });

    app.get("/api/quizzes/quiz/:quizId", (req, res) => {
        const { quizId } = req.params;
        const quiz = dao.findQuizWithQid(quizId);
        res.send(quiz);
    });

    app.put("/api/quizzes/:qid", (req, res) => {
        const { qid } = req.params;
        const quiz = req.body;
        const status = dao.updateQuiz(qid,quiz);
        res.send(status);

        // const { courseId } = req.params;
        // const assignment = req.body;
        // const status = dao.updateAssignment(courseId, assignment);
        // res.send(status);
    });
}