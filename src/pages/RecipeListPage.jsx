import { Center, Heading, Box } from "@chakra-ui/react";
import { RecipeList } from "../components/RecipeList";
import { data } from "../utils/data";
import { TextInput } from "../components/ui/TextInput";

export const RecipeListPage = ({ clickOn }) => {
	return (
		<div>
			<Center h='100vh' flexDir='column'>
				<Box>
					<Heading>Your Recipe App</Heading>
					<TextInput />
				</Box>
			</Center>
			<Box p='5'>
				<RecipeList clickOn={clickOn} recipes={data.hits} />
			</Box>
		</div>
	);
};

// You can play around with the console log, but ultimately remove it once you are done
// console.log(data.hits[5].recipe.label);
// console.log(data.hits[3].recipe.healthLabels);
