import * as React from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Hamburger from "./Hamburger";

class NavbarCustom extends React.Component {
	constructor(props) {
		super(props);
		this.scrollToPageLanding = this.scrollToPageLanding.bind(this);
	}

	scrollToPageLanding(e) {
		e.preventDefault();
		document.querySelector(".page-landing").scrollIntoView({ behavior: "smooth", block: "start" });
	}

	render() {
		return (
			<Navbar fixed="top" className={"navbar-custom justify-content-between" + (this.props.isScrolling ? " scrolling" : "")} variant="dark">
				<Navbar.Brand onClick={this.scrollToPageLanding}>THEMUD</Navbar.Brand>
				<Nav>
					<Nav.Link onClick={this.props.onHamburgerClick}>
						<Hamburger />
					</Nav.Link>
				</Nav>
			</Navbar>
		);
	}
}

export default NavbarCustom;