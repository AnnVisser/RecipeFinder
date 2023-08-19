import { TextInput } from "./ui/TextInput";
import { useState } from "react";

export const RecipeSearch = () => {
	const [searchField, setSearchField] = useState("TestRecipe");

	return (
		<>
			<label>Search for recipes here:</label>
			<TextInput />
			<p>{searchField}</p>
		</>
	);
};
