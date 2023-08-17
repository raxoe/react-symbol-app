import { createSlice } from "@reduxjs/toolkit";

export const courseSlice = createSlice({
	name: 'course',
	initialState: {
		// courseObj: [{ title: '1' }, { title: '2' }]
		courseObj:[]
	},
	reducers: {
		createCourse: (state, action) => {
			
			// console.log('s', state.courseObj)
			// console.log('a', action.payload);
			state.courseObj = [...state.courseObj, { ...action.payload }]
		},
		deleteCourse: (state,action)=>{
			
		}
	}
})

export const { createCourse } = courseSlice.actions;

export default courseSlice.reducer;