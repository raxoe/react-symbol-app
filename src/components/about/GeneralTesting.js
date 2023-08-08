import { useState } from "react";

const GeneralTesting = () => {
	const [stateData, setStateData] = useState([]);
	const onAddEvent = (data) => {
		setStateData(prevState => [...prevState, data]);
	};
	return (
		<>
			<h2> GeneralTesting</h2>
			<ListCom DataList={stateData} />
			<FormCom eventSubmit={onAddEvent} />
		</>
	);
}

const FormCom = (props) => {

	// const [formState, setFormState] = useState({ frmCourse: 'sdsd' });
	let [formState, setFormState] = useState({ title: 'Itile', desc: 'Idesc' });

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(formState);
		props.eventSubmit(formState);
	}

	const handleChange = (event) => {
		// const handleChange = (tags) => (event) => {
		setFormState({title:event.target.value});
		props.eventSubmit(formState);

	}

	return (
		<form onSubmit={handleSubmit}>
			{/* <input type="text" onChange={handleChange("title")} value={formState.title} />
			<input type="text" onChange={handleChange("desc")} value={formState.desc} /> */}
			<input type="text" name="title" onChange={handleChange} value={formState.title} />
			{/* <input type="text" name="desc" onChange={handleChange} value={formState.desc} /> */}
			<input type="submit" value="Add" />
		</form>
	);
}

const ListCom = (props) => {
	//console.log(props.DataList);
	return (
		props.DataList.map(data => <>
			<h2>{data.title}</h2>
		</>)
	);
}

export default GeneralTesting;