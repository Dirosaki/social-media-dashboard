type HomeProps = {
	toggleTheme: () => void
}

export default function Home({ toggleTheme }: HomeProps) {
	return (
		<>
			<h1>Home</h1>
			<button type='button' onClick={toggleTheme}>
				Trocar tema
			</button>
		</>
	)
}
