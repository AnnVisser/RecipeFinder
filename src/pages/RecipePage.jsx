import {
	Tag,
	TagLabel,
	TagCloseButton,
	Text,
	Image,
	Box,
	Card,
	CardHeader,
	CardBody,
	ListItem,
	UnorderedList,
} from "@chakra-ui/react";

export const RecipePage = ({ recipe, clickOn }) => {
	const localRecipe = recipe.recipe;
	const nutrientList = ["ENERC_KCAL", "FAT", "CHOCDF", "PROCNT", "CHOLE", "NA"];

	return (
		<Card display='flex' alignItems='center' flexDirection={{ base: "column" }}>
			{/* The header */}
			<CardHeader bgColor='#e9ecef' w='70%' padding='0px' textAlign='center'>
				<Image
					objectFit='cover'
					w='100%'
					h={{ base: "10rem", sm: "20rem" }}
					src={localRecipe.image}
					alt='Delicious looking food you cannot see'
				/>
			</CardHeader>
			{/* Backbutton */}
			<CardHeader
				w='70%'
				bgColor='#e9ecef'
				padding='5px'
				color='pink'
				display='flex'
				justifyContent='right'
			>
				<Tag bgColor='#e9ecef' cursor='pointer' onClick={() => clickOn()}>
					<TagLabel fontSize={{ base: "2xs", sm: "sm" }}>
						Back to Recipes
					</TagLabel>
					<TagCloseButton />
				</Tag>
			</CardHeader>

			{/* The recipe itself */}
			<CardBody
				margin='0px'
				padding='5px 15px 5px 15px'
				backgroundColor='#e9ecef'
				w='70%'
				borderRadius='0px 0px 10px 10px'
				display='flex'
				flexDirection={{ base: "column", sm: "row" }}
				justifyContent='space-between'
			>
				{/* Leftbox */}
				<Box>
					{/* title and mealtype */}
					<Text as='b' textTransform='uppercase' color='grey' fontSize='2xs'>
						{localRecipe.mealType}
						<br />
					</Text>
					<Text w='100%' as='b' fontSize='xl'>
						{localRecipe.label}
					</Text>
					{/* Information */}
					<Text fontSize='sm' textTransform='capitalize'>
						<b>Dish:</b> {localRecipe.dishType}
					</Text>
					<Text fontSize='sm'>
						<p>
							<b>Total cooking Time: </b>
							{localRecipe.totalTime} minutes
						</p>
						<p>
							<b>Servings: </b>
							{localRecipe.yield}
						</p>
					</Text>
					<br />
					{/* Ingredients */}
					<Text fontSize='sm'>
						<b>Ingredients:</b>

						<UnorderedList>
							{localRecipe.ingredientLines.map((ingredients) => {
								return <ListItem key={ingredients}>{ingredients}</ListItem>;
							})}
						</UnorderedList>
					</Text>
				</Box>

				{/* Labels box */}
				<Box fontSize='sm' w='50%'>
					{localRecipe.cautions.length > 0 && (
						<>
							<Text as='b'>
								Health labels:
								<br />
							</Text>
							{localRecipe.healthLabels.map((healthLabel) => {
								return (
									<Tag
										fontSize='xs'
										m='2px'
										bgColor='purple.100'
										key={healthLabel}
									>
										{healthLabel}
									</Tag>
								);
							})}
						</>
					)}
					<br />
					{localRecipe.dietLabels.length > 0 && (
						<>
							<Text as='b'>
								Diet:
								<br />
							</Text>
							{localRecipe.dietLabels.map((diet) => {
								return (
									<Tag fontSize='xs' m='2px' bgColor='green.100' key={diet}>
										{diet}
									</Tag>
								);
							})}
						</>
					)}
					<br />

					{localRecipe.cautions.length > 0 && (
						<>
							<Text as='b'>
								Cautions:
								<br />
							</Text>
							{localRecipe.cautions.map((caution) => {
								return (
									<Tag fontSize='xs' m='2px' bgColor='red.100' key={caution}>
										{caution}
									</Tag>
								);
							})}
						</>
					)}
					<br />
					<Text as='b'>Total Nutrients:</Text>
					<br />

					{Object.keys(localRecipe.totalNutrients).map(
						(nutrient) =>
							nutrientList.includes(nutrient) && (
								<Tag fontSize='xs' m='6px' bgColor='#e9ecef' key={nutrient}>
									{localRecipe.totalNutrients[nutrient].label}
									<br />
									{Math.round(localRecipe.totalNutrients[nutrient].quantity)}
									{localRecipe.totalNutrients[nutrient].unit}
								</Tag>
							)
					)}
				</Box>
			</CardBody>
		</Card>
	);
};
