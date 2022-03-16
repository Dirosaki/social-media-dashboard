import styled, { css } from "styled-components";

type FooterProps = {
	isIncreasing: boolean;
};

export const Card = styled.div`
	${({ theme }) => css`
		padding: 1.5rem;
		height: 8.125rem;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		background: ${theme.colors.cardBackground};
		border-radius: 0.25rem;
		transition: background 0.2s ease-out;
		cursor: pointer;

		div {
			display: flex;
			justify-content: space-between;

			p {
				font-size: 0.875rem;
				color: ${theme.colors.text};
				font-weight: 600;
			}
		}

		@media (hover: hover) {
			&:hover {
				background: #333a56;
			}
		}

		@media (min-width: 85.375rem) {
			height: 8.5rem;

			div {
				p {
					font-size: 1rem;
				}

				img {
					transform: scale(1.2);
				}
			}
		}
	`}
`;

export const Footer = styled.footer<FooterProps>`
	${({ theme, isIncreasing }) => css`
		display: flex;
		align-items: flex-end;
		justify-content: space-between;

		strong {
			font-size: 2.25rem;
		}

		p {
			height: max-content;
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
