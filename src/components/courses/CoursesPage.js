import { useSelector, useDispatch } from "react-redux";
import { createCourse } from "../../redux/features/courseSlice/courseSlice";
import { useState } from "react";

function CoursesPage() {

	// let _courseObject = { courseObj: { id: 0, title: 'Ini', desc: 'desc' } };
	// let _courseObject = { id: 0, title: 'Ini', desc: 'desc' };	
	const [_courseStateObject, setCourseObject] = useState({ id: 0, title: 'Ini', desc: 'desc' });

	const courseState = useSelector((state) => state.courseReducer.courseObj);
	const dispatch = useDispatch();

	const handleChange = tags => (event) => {
		// _courseObject = { courseObj: { title: event.target.value } };
		// _courseObject = { ..._courseObject.courseObj, title: event.target.value };
		// _courseObject = { ..._courseObject, title: event.target.value };

		// _courseObject[tags] = event.target.value;		

		let updateCourseObject = { ..._courseStateObject, [tags]: event.target.value };
		console.log('update', updateCourseObject);
		setCourseObject(updateCourseObject);
		console.log('aft', _courseStateObject);

	};


	const handleSubmit = (event) => {
		event.preventDefault();

		setCourseObject({..._courseStateObject,id:++_courseStateObject.id});
		//console.log('bef', courseState);
		dispatch(createCourse(_courseStateObject));
		console.log('aftSubmit', _courseStateObject);
		//console.log('aft', courseState);
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				{/* <input type="input" onChange={handleChange} value={_courseObject.title}></input> */}
				<span>Title</span><input type="input" onChange={handleChange("title")} ></input> <br />
				<span>Desc</span><input type="input" onChange={handleChange("desc")} ></input> <br />
				<button>Submit</button>
			</form>

			<div>
				{
					courseState.map((course) => {
						return (
							// <div key={course.id}>
							// 	<span>{course.title}</span>
							// 	<span>{course.desc}</span>

							// 	</div>
							<div key={course.id}>
								{course.id} || {course.title} || {course.desc}
							</div>

						)
					})
				}
			</div>
		</div>

	);
}

export default CoursesPage;