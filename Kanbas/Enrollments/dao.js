import Database from "../Database/index.js";




export function findAllEnrollments() {
    const { enrollments } = Database;
    return enrollments;
}

export function enrollUserInCourse(userId, courseId) {
    const { enrollments } = Database;
    enrollments.push({ _id: Date.now(), user: userId, course: courseId });
}

export function unenrollUserFromCourse(userId, courseId) {
    const { enrollments } = Database;
    const index = enrollments.findIndex(enrollment => enrollment.user === userId && enrollment.course === courseId);

    if (index !== -1) {
        // Remove the item from the array
        enrollments.splice(index, 1);
    } else {
    }
    // enrollments.push({ _id: Date.now(), user: userId, course: courseId });
}