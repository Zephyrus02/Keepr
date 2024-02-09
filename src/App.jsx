import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import content from "./content";

function App() {
	return (
		<div>
			<Header />
			{content.map((notecnt) => (
				<Note
					key={notecnt.key}
					title={notecnt.title}
					text={notecnt.text}
				/>
			))}
			<Footer />
		</div>
	);
}
export default App;
