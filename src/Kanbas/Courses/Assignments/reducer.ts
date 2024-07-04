import { createSlice } from "@reduxjs/toolkit";
import { assignments as initialAssignments } from "../../Database"; // Adjust the path if necessary

const initialState = {
  assignments: initialAssignments,
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, { payload: assignment }) => {
      const newAssignment = {
        _id: new Date().getTime().toString(),
        title: assignment.title,
        course: assignment.course,
        description: assignment.description,
        points: assignment.points,
        dueDate: assignment.dueDate,
        availableFrom: assignment.availableFrom,
        availableUntil: assignment.availableUntil,
        gradeType: assignment.gradeType,
        submissionType: assignment.submissionType,
      };
      state.assignments = [...state.assignments, newAssignment] as any;
    },

    updateAssignment: (state, { payload: updatedAssignment }) => {
      state.assignments = state.assignments.map((assignment: any) =>
        assignment._id === updatedAssignment._id ? updatedAssignment : assignment
      ) as any;
    },
    deleteAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.filter(
        (assignment: any) => assignment._id !== assignmentId
      );
    },
  },
});

export const {
  addAssignment,
  updateAssignment,
  deleteAssignment,
} = assignmentsSlice.actions;

export default assignmentsSlice.reducer;
