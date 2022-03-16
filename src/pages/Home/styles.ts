import styled, { css } from "styled-components";

export const Header = styled.header`
	${({ theme }) => css`
		padding: 2rem 2rem 5rem;
		background: ${theme.colors.topBackground};

		.header__titleWrapper {
			margin-bottom: 1.5rem;

			h1 {
				font-size: 1.5rem;
			}

			p {
				margin-top: 0.5rem;
				font-size: 0.875rem;
				font-weight: 600;
				color: ${theme.colors.text};
			}
		}

		span {
			height: 0.0625rem;
			width: 100%;
			display: block;
			background: ${theme.colors.text};
		}

		.header__switchWrapper {
			margin-top: 1.25rem;
			display: flex;
			align-items: center;
			justify-content: space-between;

			strong {
				font-size: 0.875rem;
				font-weight: 600;
				color: ${theme.colors.text};
			}
		}

		@media (min-width: 64rem) {
			padding: 2rem 2rem 12rem;
			display: flex;
			align-items: center;
			justify-content: space-between;

			.header__titleWrapper {
				margin-bottom: 0;

				h1 {
					font-size: 1.75rem;
				}

				p {
					font-size: 1rem;
				}
			}

			span {
				display: none;
			}

			.header__switchWrapper {
				margin-top: 0;
				gap: 1.5rem;

				strong {
					font-size: 1rem;
					color: ${theme.colors.title};
				}
			}
		}

		@media (min-width: 90rem) {
			padding: 2rem 10.25rem 12rem;
		}
	`}
`;

export const Switch = styled.button`
	${({ theme }) => css`
		position: relative;
		height: 1.5rem;
		width: 2.875rem;
		display: flex;
		align-items: center;
		background: ${theme.colors.toggle};
		border-radius: 3.125rem;
		border: none;
		box-sizing: border-box;
		cursor: pointer;

		&::before {
			content: "";
			position: absolute;
			left: 0.125rem;
			height: 1.25rem;
			width: 1.25rem;
			background: ${theme.colors.topBackground};
			border-radius: 100%;
			transition: left 0.2s ease-out;
		}

		&[aria-checked="true"]:before {
			left: calc(100% - (1.25rem + 0.125rem));
		}

		&:focus-visible {
			box-shadow: 0 0 0 0.125rem ${theme.colors.title};
		}

		@media (hover: hover) {
			&:hover:before {
				background: ${theme.colors.cardBackground};
			}
		}
	`}
`;

export const Container = styled.main`
	padding: 0 2rem;

	h2 {
		font-size: 1.5rem;
	}

	@media (min-width: 64rem) {
		h2 {
			font-size: 1.75rem;
		}
	}

	@media (min-width: 90rem) {
		padding: 0 10.25rem;
	}
`;

export const CardPrimaryWrapper = styled.section`
	margin: -3rem 0 3rem;
	display: grid;
	gap: 1.5rem;

	@media (min-width: 47.75rem) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (min-width: 64rem) {
		margin: -10rem 0 2.5rem;
	}

	@media (min-width: 75rem) {
		grid-template-columns: repeat(4, 1fr);
		gap: 2rem;
	}
`;

export const CardSecondaryWrapper = styled.section`
	margin: 2rem 0 3rem;
	display: grid;
	gap: 1.5rem;

	@media (min-width: 47.75rem) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (min-width: 64rem) {
		margin: 1.5rem 0 3rem;
	}

	@media (min-width: 75rem) {
		grid-template-columns: repeat(4, 1fr);
		gap: 1.5rem 2rem;
	}
`;
