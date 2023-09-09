import { Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import { RecipeList } from "./RecipeList";
import { data } from "../utils/data";

export const RecipeSearch = ({ clickOn }) => {
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
			<Text>Search for recipes here:</Text>
			<Input
				boxShadow='2px 2px 4px #000000'
				variant='outline filled'
				width='70%'
				onChange={handleChange}
			/>
			<RecipeList clickOn={clickOn} recipes={matchedRecipe} />
		</>
	);
};
