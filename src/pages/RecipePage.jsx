import { Button, Text, Image, Box } from "@chakra-ui/react";

export const RecipePage = ({ recipe, clickOn }) => {
	const localRecipe = recipe.recipe;
	const nutrientList = ["ENERC_KCAL", "FAT", "CHOCDF", "PROCNT", "CHOLE", "NA"];

	return (
		<Box
			display='flex'
			alignItems='center'
			justifyContent='space-between'
			flexDirection='column'
		>
			{/* Header */}
			<Box w='100%' h='300px' textAlign='center'>
				<Image
					objectFit='cover'
					w='100%'
					h='100%'
					src={localRecipe.image}
					alt='Delicious looking food you cannot see'
				/>

				<Button boxShadow='2px 2px 4px #000000' onClick={() => clickOn()}>
					Recipes
				</Button>

				<Text
					as='b'
					position='relative'
					top='-73px'
					color='#e9ecef'
					fontSize='6xl'
					textShadow='2px 2px 4px #000000'
				>
					{localRecipe.label}
				</Text>
			</Box>

			{/* Informationbox */}
			<Box
				position='relative'
				left='-20%'
				margin='25px'
				padding='25px'
				backgroundColor='#e9ecef'
				borderRadius='10px'
				boxShadow='2px 2px 4px #000000'
			>
				<p>{localRecipe.mealType}</p>
				<p>{localRecipe.dishType}</p>
				<p>{localRecipe.totalTime}</p>
				<p>{localRecipe.yield}</p>

				{localRecipe.ingredientLines.map((ingredients) => {
					return <p key={ingredients}>{ingredients}</p>;
				})}
			</Box>

			{/* Labelsbox */}
			<Box
				margin='25px'
				position='relative'
				top='-363px'
				left='150px'
				padding='25px'
				backgroundColor='#e9ecef'
				borderRadius='10px'
				boxShadow='2px 2px 4px #000000'
			>
				{localRecipe.dietLabels.map((diet) => {
					return <p key={diet}>{diet}</p>;
				})}

				{localRecipe.healthLabels.map((healthLabel) => {
					return <p key={healthLabel}>{healthLabel}</p>;
				})}

				{localRecipe.cautions.length > 0 &&
					localRecipe.cautions.map((caution) => {
						return <p key={caution}>{caution}</p>;
					})}
				<h2>Total Nutrients</h2>
				<ul>
					{Object.keys(localRecipe.totalNutrients).map(
						(nutrient) =>
							nutrientList.includes(nutrient) && (
								<li key={nutrient}>
									<strong>{localRecipe.totalNutrients[nutrient].label}:</strong>{" "}
									{localRecipe.totalNutrients[nutrient].quantity}{" "}
									{localRecipe.totalNutrients[nutrient].unit}
								</li>
							)
					)}
				</ul>
			</Box>
		</Box>
	);
};
