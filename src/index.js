import * as React from "react";
import * as ReactDOM from "react-dom";

import Navbar from "./components/NavbarCustom";
import HamburgerMenu from "./components/HamburgerMenu";
import PageLanding from "./components/PageLanding";

import './scss/custom.scss';

class Main extends React.Component {
	constructor() {
		super();

		this.state = {
			scrolling: false,
			hamburgerOpen: false
		};

		this.handleScroll = this.handleScroll.bind(this);
		this.handleHamburgerClick = this.handleHamburgerClick.bind(this);
		this.handleMenuClose = this.handleMenuClose.bind(this);
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

	handleHamburgerClick(e) {
		e.preventDefault();

		if(!this.state.hamburgerOpen) {
			this.setState({ hamburgerOpen: true });
		}
	}

	handleMenuClose(e) {
		e.preventDefault();

		if(this.state.hamburgerOpen) {
			this.setState({ hamburgerOpen: false });
		}
	}

	render() {
		return (
			<div>
				<Navbar isScrolling={this.state.scrolling} onHamburgerClick={this.handleHamburgerClick} />
				<HamburgerMenu isOpened={this.state.hamburgerOpen} onMenuClose={this.handleMenuClose} />
				<PageLanding />
				<div className="test">haha</div>
			</div>
		);
	}
}

ReactDOM.render(<Main />, document.getElementById("root"));