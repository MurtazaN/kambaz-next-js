
import { createSlice } from "@reduxjs/toolkit";
import { courses, enrollments } from "../Database";
import { v4 as uuidv4 } from "uuid";

const initialState = {
    courses: courses,
    enrollments: enrollments,
};
const coursesSlice = createSlice({
    name: "courses",
    initialState,
    reducers: {
        addNewCourse: (state, { payload: course }) => {
            const newCourse = { ...course, _id: uuidv4() };
            state.courses = [...state.courses, newCourse] as any;
        },
        deleteCourse: (state, { payload: courseId }) => {
            state.courses = state.courses.filter(
                (course: any) => course._id !== courseId
            );
        },
        updateCourse: (state, { payload: course }) => {
            state.courses = state.courses.map((c: any) =>
                c._id === course._id ? course : c
            ) as any;
        },
        setCourses: (state, { payload: courses }) => {
            state.courses = courses;
        },
        enrollCourse: (state, { payload: { userId, courseId } }) => {
            const newEnrollment: any = {
                _id: uuidv4(),
                user: userId,
                course: courseId,
            };
            console.log(newEnrollment);
            state.enrollments = [...state.enrollments, newEnrollment] as any;
        },
        unenrollCourse: (state, { payload: { userId, courseId } }) => {
            state.enrollments = state.enrollments.filter((e: any) =>
                e.user !== userId || e.course !== courseId
            );
        },
    },
});
export const { addNewCourse, deleteCourse, updateCourse, setCourses, enrollCourse, unenrollCourse } =
    coursesSlice.actions;
export default coursesSlice.reducer;