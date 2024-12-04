import Database from "../Database/index.js";

export function findQuizWithCid(courseId) {
    const { quizzes } = Database;
    const courseQuizzes = quizzes.filter(
        quizzes => quizzes.course === courseId);
    return courseQuizzes;
}
export function findQuizWithQid(qid) {
    const { quizzes } = Database;
    const quiz = quizzes.find(
        quizzes => quizzes.qid.toString() === qid);
        
    return quiz;
}
 
export function createQuiz(quiz) {
//   const newQuiz = { ...quiz, id: Date.now().toString() };
  Database.quizzes = [...Database.quizzes, quiz];
  return quiz;
}
// export function unpublish(qid) {
//     const { quizzes } = Database;
//     const dbQuizzes = quizzes.find((quiz) => quiz.qid === qid);
//     dbQuizzes.isPublished = false;
//     return dbQuizzes; 
//   } 

export function updateQuiz(qid, quiz) {
    const { quizzes } = Database;
    const dbQuiz = quizzes.find((quiz) => quiz.qid.toString()===qid );
    // quizzes.map((quiz)=> )
    // console.log(dbQuiz)
    Object.assign(dbQuiz, quiz); 
    return dbQuiz;
  }
  
// export function createAssignment(assignment) {
//   const newAssignment = { ...assignment, _id: Date.now().toString() };
//   Database.assignments = [...Database.assignments, newAssignment];
//   return newAssignment;
// }


  

// export function deleteAssignment(assignmentId) {
//     const { assignments } = Database;
//     Database.assignments = assignments.filter((assignment) => assignment._id !== assignmentId);
//    }
   