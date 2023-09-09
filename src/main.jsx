import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { Box } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ChakraProvider>
			<Box backgroundColor='pink'>
				<App />
			</Box>
		</ChakraProvider>
	</React.StrictMode>
);
