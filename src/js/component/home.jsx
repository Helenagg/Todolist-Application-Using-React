import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import CreateTask from "./createtask.jsx";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<h1>TASKS</h1>
			<CreateTask/>
		</div>
	);
};

export default Home;
