import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import CreateTask from "./createtask.jsx";

//create your first component
const Home = () => {
	return (
		<div className="container text-center bg-light">
			<h1>TODOLIST</h1>
			<CreateTask/>
		</div>
	);
};

export default Home;
