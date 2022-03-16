import "styled-components";

declare module "styled-components" {
	export interface DefaultTheme {
		title: string;
		colors: {
			limeGreen: string;
			brightRed: string;
			facebook: string;
			twitter: string;
			instagram: string;
			youtube: string;

			toggle: string;
			background: string;
			topBackground: string;
			cardBackground: string;
			text: string;
			title: string;
		};
	}
}
