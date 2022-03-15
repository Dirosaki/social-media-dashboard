import { createGlobalStyle, css } from 'styled-components'

const GlobalStyle = createGlobalStyle`
${({ theme }) => css`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: 'Inter', sans-serif;
	}

	body {
		font-size: 1rem;
	}
`}
`

export default GlobalStyle
