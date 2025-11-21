import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./Courses/[cid]/Modules/reducer";
import accountReducer from "./Account/reducer";
import assignmentReducer from "./Courses/[cid]/Assignments/reducer";
import coursesReducer from "./Courses/reducer";
import enrollmentsReducer from "./Enrollments/reducer";


const store = configureStore({
    reducer: {
        modulesReducer,
        accountReducer,
        assignmentReducer,
        coursesReducer,
        enrollmentsReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;