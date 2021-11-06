import "./App.css";

const Person = () => {
	const url = "https://randomuser.me/api/portraits/thumb/men/75.jpg";
	return (
		<div className="person">
			<img src={url} alt="" />
			<div>
				<h4>name</h4>
				<h4>job</h4>
			</div>
		</div>
	);
};

const PersonList = () => {
	return <Person></Person>;
};

const App = () => {
	return <PersonList />;
};

export default App;
