import "./TextInput.css";

export const TextInput = ({ changeFn }) => {
	return (
		<div>
			<input type='text' className='text-input' onChange={changeFn}></input>
		</div>
	);
};
