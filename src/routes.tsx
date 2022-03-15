import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import useLocalStorage from './hooks/useLocalStorage'

import Home from './pages/Home'

import GlobalStyle from './styles/global'
import dark from './styles/themes/dark'
import light from './styles/themes/light'

function MainRoutes() {
	const [theme, setTheme] = useLocalStorage('darkTheme', true)

	const handleToggleTheme = () => {
		setTheme((prevState) => !prevState)
	}

	return (
		<ThemeProvider theme={theme ? dark : light}>
			<GlobalStyle />
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home toggleTheme={handleToggleTheme} />} />
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	)
}

export default MainRoutes
