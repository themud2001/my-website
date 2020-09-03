import * as React from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Hamburger from "./Hamburger";

function NavbarCustom({ isScrolling }) {
	return (
		<Navbar fixed="top" className={"navbar-custom justify-content-between" + (isScrolling ? " scrolling" : "")} variant="dark">
			<Navbar.Brand href="#">THEMUD</Navbar.Brand>
			<Nav>
				<Nav.Link>
					<Hamburger />
				</Nav.Link>
			</Nav>
		</Navbar>
	);
}

export default NavbarCustom;