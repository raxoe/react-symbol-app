import { useSelector, useDispatch } from "react-redux";
import { createCourse } from "../../redux/features/courseSlice/courseSlice";

function CoursesPage() {

	let _courseObject = { courseObj: { title: 'Ini' } };

	const courseState = useSelector((state) => state.courseReducer.courseObj);
	const dispatch = useDispatch();

	const handleChange = (event) => {
		_courseObject = { courseObj: { title: event.target.value } };		
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		
		//console.log('bef', courseState);
		dispatch(createCourse(_courseObject.courseObj));
		//console.log('aft', courseState);
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input type="input" onChange={handleChange} value={_courseObject.title}></input>
				<button>Submit</button>
			</form>

			<div>
				{
					courseState.map((course) => {
						return (<div key={course.title}>{course.title}</div>)
					})
				}
			</div>
		</div>

	);
}

export default CoursesPage;