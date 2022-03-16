import styled, {
	css,
	DefaultTheme,
	ThemeProps,
	FlattenSimpleInterpolation,
} from "styled-components";

type GetSocialCardProps = ({
	theme,
}: ThemeProps<DefaultTheme>) => FlattenSimpleInterpolation;

type CardProps = {
	social: string;
};

type FooterProps = {
	isIncreasing: boolean;
};

const getSocialCard: Record<string, GetSocialCardProps> = {
	facebook: ({ theme }) => css`
		background: ${theme.colors.facebook};
	`,

	twitter: ({ theme }) => css`
		background: ${theme.colors.twitter};
	`,

	instagram: ({ theme }) => css`
		background: ${theme.colors.instagram};
	`,

	youtube: ({ theme }) => css`
		background: ${theme.colors.youtube};
	`,
};

export const Card = styled.div<CardProps>`
	${({ theme, social }) => css`
		padding: 1.5rem 0;
		position: relative;
		height: 13.75rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		background: ${theme.colors.cardBackground};
		border-radius: 0.25rem;
		overflow: hidden;
		transition: background 0.2s ease-out;
		cursor: pointer;

		&::before {
			content: "";
			position: absolute;
			top: 0;
			height: 0.25rem;
			width: 100%;

			${getSocialCard[social]};
		}

		@media (hover: hover) {
			&:hover {
				background: #333a56;
			}
		}

		header {
			display: flex;
			align-items: center;
			gap: 0.5rem;
			color: ${theme.colors.text};
			font-weight: 500;
		}

		div {
			display: flex;
			flex-direction: column;

			strong {
				font-size: 3.375rem;
				text-align: center;
			}

			p {
				font-size: 0.875rem;
				letter-spacing: 0.35em;
				text-align: center;
				text-transform: uppercase;
				color: ${theme.colors.text};
			}
		}

		@media (min-width: 85.375rem) {
			height: 15rem;

			header {
				gap: 1rem;

				img {
					transform: scale(1.2);
				}
			}

			div {
				strong {
					font-size: 3.5rem;
				}
			}
		}
	`}
`;

export const Footer = styled.footer<FooterProps>`
	${({ theme, isIncreasing }) => css`
		p {
			display: flex;
			align-items: center;
			gap: 0.4rem;
			font-size: 0.875rem;
			font-weight: 700;
			color: ${isIncreasing ? theme.colors.limeGreen : theme.colors.brightRed};

			img {
				transform: scale(1.2);
			}
		}
	`}
`;
