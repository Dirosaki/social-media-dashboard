import { createGlobalStyle, css } from "styled-components";

const GlobalStyle = createGlobalStyle`
${({ theme }) => css`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: "Inter", sans-serif;
	}

	body {
		min-height: 100vh;
		background: ${theme.colors.background};
		font-size: 1rem;
		color: ${theme.colors.title};
	}
`}
`;

export default GlobalStyle;
