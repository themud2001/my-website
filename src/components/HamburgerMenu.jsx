import * as React from "react";

import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

class HamburgerMenu extends React.Component {
	constructor(props) {
		super(props);
		this.scrollToAbout = this.scrollToAbout.bind(this);
		this.scrollToContact = this.scrollToContact.bind(this);
	}

	scrollToAbout(e) {
		this.props.onMenuClose(e);
		document.querySelector(".about-container").scrollIntoView({ behavior: "smooth", block: "start" });
	}

	scrollToContact(e) {
		this.props.onMenuClose(e);
		document.querySelector(".contact-container").scrollIntoView({ behavior: "smooth", block: "nearest" });
	}

	render() {
		return (
			<div className={"menu-content" + (this.props.isOpened ? " opened" : "")}>
				<Container fluid>
					<Nav className="flex-column text-center">
						<svg onClick={this.props.onMenuClose} width="56px" height="56px" viewBox="0 0 16 16" className="menu-close" fill="#000" xmlns="http://www.w3.org/2000/svg">
							<path fillRule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
						</svg>

						<div className="nav-links-container">
							<Nav.Link onClick={this.scrollToAbout}><h1>About</h1></Nav.Link>
							<Nav.Link onClick={this.scrollToContact}><h1>Contact</h1></Nav.Link>
						</div>
					</Nav>
				</Container>
			</div>
		);
	}
}

export default HamburgerMenu;