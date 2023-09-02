import { Center, Heading } from "@chakra-ui/react";

export const RecipePage = (recipe) => {
	const localRecipe = recipe.recipe.recipe;
	const nutrientList = ["ENERC_KCAL", "FAT", "CHOCDF", "PROCNT", "CHOLE", "NA"];

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
			<p>{localRecipe.yield}</p>
			{localRecipe.dietLabels.map((diet) => {
				return <p key={diet}>{diet}</p>;
			})}

			{localRecipe.healthLabels.map((healthLabel) => {
				return <p key={healthLabel}>{healthLabel}</p>;
			})}

			{localRecipe.cautions.map((caution) => {
				return <p key={caution}>{caution}</p>;
			})}

			{localRecipe.ingredientLines.map((ingredients) => {
				return <p key={ingredients}>{ingredients}</p>;
			})}

			<div>
				<h2>Total Nutrients</h2>
				<ul>
					{Object.keys(localRecipe.totalNutrients).map(
						(nutrientKey) =>
							nutrientList.includes(nutrientKey) && (
								<li key={nutrientKey}>
									<strong>
										{localRecipe.totalNutrients[nutrientKey].label}:
									</strong>{" "}
									{localRecipe.totalNutrients[nutrientKey].quantity}{" "}
									{localRecipe.totalNutrients[nutrientKey].unit}
								</li>
							)
					)}
				</ul>
			</div>
		</Center>
	);
};
