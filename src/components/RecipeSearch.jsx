import { TextInput } from "ui/TextInput.jsx";
import { useState } from "react";
import { RecipeList } from "./RecipeList";

export const RecipeSearch = ({ clickOn }) => {
	const [searchField, setSearchField] = useState("Test Recipe");

	return (
		<>
		<label>Search for recipe{&apos}s here:</label>
		<TextInput />
		</>
	)
};
