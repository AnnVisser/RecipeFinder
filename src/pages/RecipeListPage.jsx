import { Center, Heading, Box } from "@chakra-ui/react";
import { RecipeSearch } from "../components/RecipeSearch";

export const RecipeListPage = ({ clickOn }) => {
	return (
		<div>
			<Center flexDir='column'>
				<Box textAlign='center'>
					<Heading>Your Recipe App</Heading>
					<RecipeSearch clickOn={clickOn} />
				</Box>
			</Center>
		</div>
	);
};
