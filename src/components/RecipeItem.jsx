import { Box } from "@chakra-ui/react";

export const RecipeItem = ({ recipe, clickOn }) => {
	return (
		<Box p='3'>
			<button onClick={() => clickOn(recipe)}>
				<img
					width='200px'
					src={recipe.recipe.image}
					alt='Delicious looking food you cannot see'
				></img>
				<p>{recipe.recipe.label}</p>
				<p>{recipe.recipe.mealType}</p>
				<p>{recipe.recipe.dishType}</p>
				<p>{recipe.recipe.cautions}</p>
				<p>{recipe.recipe.dietLabels}</p>
				<p>
					{recipe.recipe.healthLabels.some(
						(healthLabel) => healthLabel === "Vegan"
					)
						? "Vegan"
						: ""}
				</p>
				<p>
					{" "}
					{recipe.recipe.healthLabels.some(
						(healthLabel) => healthLabel === "Vegetarian"
					)
						? "Vegetarian"
						: ""}
				</p>
			</button>
		</Box>
	);
};
