let courseManager = {
    schoolName: "Hoc vien buu chinh vien thong",
    year: 2025,
    courses: [
        {
            courseId: "M1",
            title: "TypeScrit Co Ban",
            instructor: "Nguyen Van A",
            students: [
                {
                    studentId: "S001",
                    name: "An",
                    email: "an@example.com",
                    hasCompleted: true,
                    finalScore: 8.5,
                },
                {
                    studentId: "S002",
                    name: "Binh",
                    email: "binh@example.com",
                    hasCompleted: true,
                    finalScore: 10,
                },
                {
                    studentId: "S003",
                    name: "Chi",
                    email: "chi@example.com",
                    hasCompleted: false,
                },
            ],
            isActive: true,
        },
        {
            courseId: "M2",
            title: "HTML & CSS",
            instructor: "Tran Thi B",
            students: [
                {
                    studentId: "S001",
                    name: "An",
                    email: "an@example.com",
                    hasCompleted: false,
                },
                {
                    studentId: "S002",
                    name: "Binh",
                    email: "binh@example.com",
                    hasCompleted: false,
                },
            ],
            isActive: false,
        },
    ],
};
const getCompletedStudents = (course) => course.students.filter((a) => a.hasCompleted);
const calculateAverageScore = (course) => {
    let temp = getCompletedStudents(course);
    if (!temp.length) {
        return null;
    }
    return temp.reduce((a, b) => a + b.finalScore, 0) / temp.length;
};
const printCourseReport = (courseManager) => {
    courseManager.courses.map((target, index) => {
        console.log(index + ". Khoa: " + target.title + ` (GV: ${target.instructor})`);
        console.log("     - Tong hoc vien: " + target.students.length);
        console.log("     - Hoan Thanh: " +
            target.students.filter((a) => a.hasCompleted).length +
            " hoc vien");
        let ave = calculateAverageScore(target);
        console.log("     - Trung binh diem: " + (ave === null ? "N/A" : ave));
        console.log("     - Trang thai: " + (target.isActive ? "DANG MO" : "DA DONG"));
    });
};
printCourseReport(courseManager);
export {};
