import * as React from "react";

import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

function HamburgerMenu({ isOpened }) {
	return (
		<div className={"menu-content" + (isOpened ? " opened" : "")}>
			<Container fluid>
				<Nav className="flex-column text-center">
					<svg width="56px" height="56px" viewBox="0 0 16 16" className="menu-close" fill="#000" xmlns="http://www.w3.org/2000/svg">
						<path fillRule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
					</svg>

					<div className="nav-links-container">
						<Nav.Link><h1>About</h1></Nav.Link>
						<Nav.Link><h1>Contact</h1></Nav.Link>
					</div>
				</Nav>
			</Container>
		</div>
	);
}

export default HamburgerMenu;