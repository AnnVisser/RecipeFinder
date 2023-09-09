import { RecipeItem } from "./RecipeItem";
import { Box } from "@chakra-ui/react";
export const RecipeList = ({ recipes, clickOn }) => {
	return (
		<Box
			display='flex'
			flexDirection={{ base: "row", ms: "column" }}
			flexWrap='wrap'
			justifyContent='center'
		>
			{recipes.map((recipe) => (
				<RecipeItem
					key={recipe.recipe.label}
					recipe={recipe}
					clickOn={clickOn}
				/>
			))}
		</Box>
	);
};
