import { TextInput } from "./ui/TextInput";
import { useState } from "react";
import { RecipeList } from "./RecipeList";
import { data } from "../utils/data";

export const RecipeSearch = ({ clickFn }) => {
	const [searchField, setSearchField] = useState(" ");

	const matchedRecipe = data.hits.filter((recipe) => {
		return (
			recipe.recipe.label.toLowerCase().includes(searchField.toLowerCase()) ||
			recipe.recipe.healthLabels
				.toString()
				.toLowerCase()
				.includes(searchField.toLowerCase())
		);
	});

	const handleChange = (event) => {
		setSearchField(event.target.value);
	};

	return (
		<>
			<label>Search for recipes here:</label>
			<TextInput changeFn={handleChange} />
			<RecipeList clickFn={clickFn} recipes={matchedRecipe} />
		</>
	);
};
