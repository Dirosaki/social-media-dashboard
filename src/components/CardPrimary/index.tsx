import getSocialIcon from "utils/getSocialIcon";

import iconArrowDown from "assets/icons/icon-down.svg";
import iconArrowUp from "assets/icons/icon-up.svg";

import * as S from "./styles";

type CardPrimaryProps = {
	social: string;
	atSign: string;
	followers: number;
	followersToday: number;
};

function CardPrimary({
	social,
	atSign,
	followers,
	followersToday,
}: CardPrimaryProps) {
	const formatNumberFollowers =
		String(followers).length > 4
			? `${Math.floor(followers / 1000)}k`
			: followers;

	const formatFollowersToday = Math.abs(followersToday);

	return (
		<S.Card social={social}>
			<header>
				<img src={getSocialIcon[social]} alt={`Logo ${social}`} />
				<span>{atSign}</span>
			</header>

			<div>
				<strong>{formatNumberFollowers}</strong>
				<p>{social === "youtube" ? "Subscribers" : "Followers"}</p>
			</div>

			<S.Footer isIncreasing={followersToday >= 0}>
				<p>
					{followersToday >= 0 ? (
						<img src={iconArrowUp} alt="Seta para cima" />
					) : (
						<img src={iconArrowDown} alt="Seta para baixo" />
					)}
					{formatFollowersToday} Today
				</p>
			</S.Footer>
		</S.Card>
	);
}

export default CardPrimary;
