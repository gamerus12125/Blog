import React from "react";

const YoutubeIcon = (props) => {
	return (
		<svg
			className={props.className}
			width="24"
			height="24"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g clipPath="url(#clip0)">
				<path d="M19.615 3.184C16.011 2.938 7.984 2.939 4.385 3.184C0.488 3.45 0.029 5.804 0 12C0.029 18.185 0.484 20.549 4.385 20.816C7.985 21.061 16.011 21.062 19.615 20.816C23.512 20.55 23.971 18.196 24 12C23.971 5.815 23.516 3.451 19.615 3.184ZM9 16V8L17 11.993L9 16Z" />
			</g>
			<defs>
				<clipPath id="clip0">
					<rect width="24" height="24" />
				</clipPath>
			</defs>
		</svg>
	);
};

export default YoutubeIcon;