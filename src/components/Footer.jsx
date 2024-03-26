import React from "react";

function Footer() {
	var date = new Date().getFullYear();
	return (
		<footer>
			<p>Made by Aneesh Raskar | Copyright © {date}</p>
		</footer>
	);
}

export default Footer;
