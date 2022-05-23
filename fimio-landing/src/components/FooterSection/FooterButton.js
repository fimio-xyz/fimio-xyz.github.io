import React from "react";

const FooterButton = () => {
	return (
		<a style={{
			textDecoration: "none",
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			fontStyle: "normal",
			fontWeight: "600",
			fontSize: "18px",
			lineHeight: "28px",
			textAlign: "center",
			color: "white",
			cursor: "pointer"
		}} href={`https://twitter.com/fimioxyz`}
		target='_blank'
		>@fimioxyz</a>
	);
};

export default FooterButton;
