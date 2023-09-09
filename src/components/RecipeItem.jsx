import {
	Text,
	Image,
	Tag,
	Card,
	CardBody,
	CardHeader,
	CardFooter,
} from "@chakra-ui/react";

export const RecipeItem = ({ recipe, clickOn }) => {
	const localRecipe = recipe.recipe;
	return (
		<Card
			backgroundColor='#e9ecef'
			width='250px'
			margin='10px'
			onClick={() => clickOn(recipe)}
			cursor='pointer'
			boxShadow='2px 2px 4px #000000'
		>
			<CardHeader padding='0px'>
				<Image
					height={{ base: "7rem", sm: "15rem" }}
					objectFit='cover'
					borderRadius='5px 5px 0px 0px'
					width='100%'
					src={localRecipe.image}
					alt='Delicious looking food you cannot see'
				></Image>
			</CardHeader>
			<CardBody padding='5px'>
				<Text as='b' textTransform='uppercase' color='grey' fontSize='2xs'>
					{localRecipe.mealType}
				</Text>
				<Text as='b' fontSize='md'>
					<br />
					{localRecipe.label}
				</Text>
				<p>
					{localRecipe.healthLabels.includes("Vegan") && (
						<Tag fontSize='xs' m='2px' backgroundColor='purple.200'>
							Vegan
						</Tag>
					)}
					{localRecipe.healthLabels.includes("Vegetarian") && (
						<Tag
							m='2px'
							fontSize='xs'
							background='transparent'
							backgroundColor='pink'
						>
							Vegetarian
						</Tag>
					)}
				</p>

				<Text fontSize='xs' textTransform='capitalize'>
					<b>Dish:</b> {localRecipe.dishType}
				</Text>
			</CardBody>
			<CardFooter
				display='flex'
				flexWrap='wrap'
				justifyContent='center'
				padding='0px'
				m='2px'
			>
				{localRecipe.cautions.length > 0 &&
					localRecipe.cautions.map((caution) => {
						return (
							<Tag m='2px' fontSize='xs' bgColor='blue.200' key={caution}>
								{caution}
							</Tag>
						);
					})}
				{localRecipe.dietLabels.length > 0 &&
					localRecipe.dietLabels.map((dietLabel) => {
						return (
							<Tag
								m='2px'
								fontSize='xs'
								backgroundColor='green.200'
								key={dietLabel}
							>
								{dietLabel}
							</Tag>
						);
					})}
			</CardFooter>
		</Card>
	);
};
