class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: {}
		};
	}
	render() {
		const { data } = this.state;
		return (
			<div>Shitcoin</div>;
	}
}

export default App;
