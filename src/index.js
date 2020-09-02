import * as React from "react";
import * as ReactDOM from "react-dom";

import Navbar from "./components/NavbarCustom";
import './scss/custom.scss';

class Main extends React.Component {
	constructor() {
		super();

		this.state = { scrolling: false };
		this.handleScroll = this.handleScroll.bind(this);
	}

	componentDidMount() {
		window.addEventListener("scroll", this.handleScroll);
	}

	componentWillUnmount() {
		window.removeEventListener("scroll", this.handleScroll);
	}

	handleScroll(e) {
		if(window.pageYOffset > 10 && !this.state.scrolling) {
			this.setState({ scrolling: true });
		}
	}

	render() {
		return (
			<div>
				<Navbar isScrolling={this.state.scrolling} />
				<div className="test">haha</div>
			</div>
		);
	}
}

ReactDOM.render(<Main />, document.getElementById("root"));