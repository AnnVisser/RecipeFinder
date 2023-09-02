import { Center, Heading } from "@chakra-ui/react";

export const RecipePage = (recipe) => {
	const localRecipe = recipe.recipe.recipe;
	console.log(localRecipe);

	return (
		<Center h='100vh' flexDir='column'>
			<Heading>{localRecipe.label}</Heading>
			<img
				width='200px'
				src={localRecipe.image}
				alt='Delicious looking food you cannot see'
			></img>
			<p>{localRecipe.mealType}</p>
			<p>{localRecipe.dishType}</p>
			<p>{localRecipe.totalTime}</p>
			<p>{localRecipe.dietLabels}</p>
			<p>{localRecipe.healthLabels}</p>
			<p>{localRecipe.cautions}</p>

			{localRecipe.ingredientLines.map((element) => {
				return <p>{element}</p>;
			})}

			<p>{localRecipe.yield}</p>
			{localRecipe.totalNutrients.map((element) => {
				return <p>{element}</p>;
			})}
			{/*  In de map nog een map maken die zegt als element een array is, toon 1 voor 1 via nog een map, anders toon gewoon.  */}
		</Center>
	);
};

// Total nutrients (Energy in kcal, protein, fat, carbs, cholesterol, sodium)
