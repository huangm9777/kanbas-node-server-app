import * as dao from "./dao.js";



export default function AssignmentRouts(app) {


    app.get("/api/assignments/:courseId", (req, res) => {
        const { courseId } = req.params;
        const assignments = dao.findAssignmentWithCid(courseId);
        res.send(assignments);
    });



    app.post("/api/assignments/:courseId", (req, res) => {
        const { courseId } = req.params;
        const assignment = {
            ...req.body,
            course: courseId,
        };
        const newAssignment = dao.createAssignment(assignment);
        res.send(newAssignment);
    });



    app.put("/api/assignments/:courseId", (req, res) => {
        const { courseId } = req.params;
        const assignment = req.body;
        const status = dao.updateAssignment(courseId, assignment);
        res.send(status);
    });



    app.delete("/api/assignments/:assignmentId", async (req, res) => {
        const { assignmentId } = req.params;
        const status = await dao.deleteAssignment(assignmentId);
        res.send(status);
    });


}