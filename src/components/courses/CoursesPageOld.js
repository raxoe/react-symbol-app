// not using
import React from "react";

//module for Redux
import { connect, useDispatch } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import PropTypes from 'prop-types';

// const CoursesPage = () => { return (<h2>Coruses are here</h2>) };



class CoursesPage extends React.Component {
	state = { course: { title: "" } };
	dispatch = useDispatch();

	//handleChange = this.handleChange.bind(this);

	handleChange = event => {
		const course = { ...this.state.course, title: event.target.value };
		this.setState({ course });
	}

	handleSubmit = event => {
		event.preventDefault();

		//old redux
		//this.props.dispatch(courseActions.createCourse(this.state.course));




	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<h2>Courses</h2>
				<h3>Add Courses</h3>
				<input type="text" onChange={this.handleChange} value={this.state.course.title} />
				<input type="submit" value="Save" />

				{this.props.courses.map(course => {
					<div key={course.title}>{course.title}</div>
				})}

			</form>
		);
	}
}

CoursesPage.propTypes = {
	dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
	return {
		courses: state.courses
	};
}

export default connect(mapStateToProps)(CoursesPage);

// export default CoursesPage;
