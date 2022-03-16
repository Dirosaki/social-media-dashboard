import getSocialIcon from "utils/getSocialIcon";

import iconArrowDown from "assets/icons/icon-down.svg";
import iconArrowUp from "assets/icons/icon-up.svg";

import * as S from "./styles";

type CardSecondaryProps = {
	social: string;
	title: string;
	count: number;
	increasing: number;
};

function CardSecondary({
	social,
	title,
	count,
	increasing,
}: CardSecondaryProps) {
	const formatNumberCount =
		String(count).length > 4 ? `${Math.floor(count / 1000)}k` : count;

	const formatIncreasing = Math.abs(increasing * 100);

	return (
		<S.Card>
			<div>
				<p>{title}</p>
				<img src={getSocialIcon[social]} alt={`Logo ${social}`} />
			</div>
			<S.Footer isIncreasing={increasing >= 0}>
				<strong>{formatNumberCount}</strong>
				<p>
					{increasing >= 0 ? (
						<img src={iconArrowUp} alt="Seta para cima" />
					) : (
						<img src={iconArrowDown} alt="Seta para baixo" />
					)}
					{formatIncreasing}%
				</p>
			</S.Footer>
		</S.Card>
	);
}

export default CardSecondary;
