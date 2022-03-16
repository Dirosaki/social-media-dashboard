import { useEffect, useState } from "react";

import { useTheme } from "styled-components";

import CardPrimary from "components/CardPrimary";
import CardSecondary from "components/CardSecondary";

import dataCardsPrimary from "assets/json/cardsPrimary.json";
import dataCardsSecondary from "assets/json/cardsSecondary.json";

import * as S from "./styles";

type HomeProps = {
	toggleTheme: () => void;
};

type CardPrimaryProps = {
	social: string;
	atSign: string;
	followers: number;
	followersToday: number;
};

type CardsSecondaryProps = {
	social: string;
	title: string;
	count: number;
	increasing: number;
};

export default function Home({ toggleTheme }: HomeProps) {
	const { title } = useTheme();

	const [cardsPrimary, setCardsPrimary] = useState<CardPrimaryProps[]>([]);
	const [cardsSecondary, setCardsSecondary] = useState<CardsSecondaryProps[]>(
		[]
	);

	useEffect(() => {
		setCardsPrimary(dataCardsPrimary);
		setCardsSecondary(dataCardsSecondary);
	}, []);

	const calculateTotalFollowers = cardsPrimary.reduce(
		(followers, card) => followers + card.followers,
		0
	);

	const formatTotalFollowers = Intl.NumberFormat("en-us").format(
		calculateTotalFollowers
	);

	return (
		<>
			<S.Header>
				<div className="header__titleWrapper">
					<h1>Social Media Dashboard</h1>
					<p>Total Followers: {formatTotalFollowers}</p>
				</div>
				<span />
				<div className="header__switchWrapper">
					<strong>Dark Mode</strong>
					<S.Switch
						type="button"
						role="switch"
						aria-checked={title === "dark"}
						onClick={toggleTheme}
					/>
				</div>
			</S.Header>
			<S.Container>
				<S.CardPrimaryWrapper>
					{cardsPrimary.map((card) => (
						<CardPrimary
							key={card.social}
							social={card.social}
							atSign={card.atSign}
							followers={card.followers}
							followersToday={card.followersToday}
						/>
					))}
				</S.CardPrimaryWrapper>

				<h2>Overview - Today</h2>

				<S.CardSecondaryWrapper>
					{cardsSecondary.map((card) => (
						<CardSecondary
							key={card.count}
							social={card.social}
							title={card.title}
							count={card.count}
							increasing={card.increasing}
						/>
					))}
				</S.CardSecondaryWrapper>
			</S.Container>
		</>
	);
}
