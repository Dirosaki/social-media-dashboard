import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'

import GlobalStyle from './styles/global'

function MainRoutes() {
	return (
		<>
			<GlobalStyle />
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home />} />
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default MainRoutes
