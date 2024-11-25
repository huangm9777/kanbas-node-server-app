import * as dao from "./dao.js";
// import * as courseDao from "../Courses/dao.js";
// import * as enrollmentsDao from "../Enrollments/dao.js";


export default function EnrollmentRoutes(app) {


    app.get("/api/enrollments", (req, res) => {
        
        const data = dao.findAllEnrollments();
        res.send(data);
    });
 
    app.put("/api/enrollments", (req, res) => {
        const enrollment = req.body.data;
        const status = dao.enrollUserInCourse(enrollment.userId, enrollment.courseId);
        res.send(status);
    });


    app.delete("/api/enrollments", (req, res) => {
        const enrollment = req.body;
        // console.log(enrollment.userId);
        const status = dao.unenrollUserFromCourse(enrollment.userId, enrollment.courseId);
        res.send(status);
    });
     

}