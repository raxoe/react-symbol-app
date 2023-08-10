import { createSlice } from "@reduxjs/toolkit";

export const courseSlice = createSlice({
	name: 'course',
	initialState: {},
	reducers: {
		createCourse: (state, action) => {
			return [...state, { ...action.course }]
		}
	}
})

export const { createCourse } = courseSlice.actions;

export default courseSlice.reducer;