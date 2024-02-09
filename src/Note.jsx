import React from "react";

function Note(notecnt) {
	return (
		<div className="note">
			<h1>{notecnt.title}</h1>
			<p>{notecnt.text}</p>
		</div>
	);
}

export default Note;
