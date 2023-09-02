import { useState } from "react";
import { RecipeListPage } from "./pages/RecipeListPage";
import { RecipePage } from "./pages/RecipePage";

export const App = () => {
	const [userRecipe, setUserRecipe] = useState();

	return (
		<div>
			{userRecipe ? (
				<RecipePage
					key={userRecipe.recipe.label}
					recipe={userRecipe}
					clickOn={setUserRecipe}
				/>
			) : (
				<RecipeListPage clickOn={setUserRecipe} />
			)}
		</div>
	);
};
