import * as React from "react";
import * as ReactDOM from "react-dom";

import Navbar from "./components/NavbarCustom";
import PageLanding from "./components/PageLanding";

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
		if(window.pageYOffset > 60) {
			if(!this.state.scrolling) {
				this.setState({ scrolling: true });
			}
		} else {
			this.setState({ scrolling: false });
		}
	}

	render() {
		return (
			<div>
				<Navbar isScrolling={this.state.scrolling} />
				<PageLanding />
				<div className="test">haha</div>
			</div>
		);
	}
}

ReactDOM.render(<Main />, document.getElementById("root"));