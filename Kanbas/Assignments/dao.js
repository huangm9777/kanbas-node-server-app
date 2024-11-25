import Database from "../Database/index.js";

export function findAssignmentWithCid(courseId) {
    const { assignments } = Database;
    const courseAssignment = assignments.filter(
        assignment => assignment.course === courseId);
    return courseAssignment;
}

export function createAssignment(assignment) {
  const newAssignment = { ...assignment, _id: Date.now().toString() };
  Database.assignments = [...Database.assignments, newAssignment];
  return newAssignment;
}


export function updateAssignment(courseId, assignment) {
    const { assignments } = Database;
    const dbAssignment = assignments.find((assignment) => assignment.course === courseId);
    Object.assign(dbAssignment, assignment);
    return dbAssignment;
  }
  
  

export function deleteAssignment(assignmentId) {
    const { assignments } = Database;
    Database.assignments = assignments.filter((assignment) => assignment._id !== assignmentId);
   }
   