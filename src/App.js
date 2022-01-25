import React from "react";
import Navbar from "./NavBar";
import "./App.css";
import Navigator from "./Navigator";

function App() {
	return (
		<div className="App">
			<Navbar />
			<header className="App-header">
				<Navigator />
			</header>
		</div>
	);
}

export default App;
