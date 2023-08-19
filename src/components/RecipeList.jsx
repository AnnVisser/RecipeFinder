import { RecipeItem } from "./RecipeItem";

export const RecipeList = ({ recipes, clickOn }) => {
	return (
		<>
			{recipes.map((recipe) => (
				<RecipeItem
					key={recipe.recipe.label}
					recipe={recipe}
					clickOn={clickOn}
				/>
			))}
		</>
	);
};
