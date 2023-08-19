import { Center, Heading, Box } from "@chakra-ui/react";
import { RecipeSearch } from "../components/RecipeSearch";

export const RecipeListPage = () => {
	return (
		<div>
			<Center flexDir='column'>
				<Box>
					<Heading>Your Recipe App</Heading>
					<RecipeSearch />
				</Box>
			</Center>
		</div>
	);
};

// You can play around with the console log, but ultimately remove it once you are done
// console.log(data.hits[5].recipe.label);
// console.log(data.hits[3].recipe.healthLabels);
